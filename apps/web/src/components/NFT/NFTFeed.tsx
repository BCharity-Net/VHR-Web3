import SingleNFT from '@components/NFT/SingleNFT';
import NFTSShimmer from '@components/Shared/Shimmer/NFTSShimmer';
import { EmptyState } from '@components/UI/EmptyState';
import { ErrorMessage } from '@components/UI/ErrorMessage';
import { CollectionIcon } from '@heroicons/react/outline';
import { IS_MAINNET } from 'data/constants';
import type { Nft, NfTsRequest, Profile } from 'lens';
import { useNftFeedQuery } from 'lens';
import type { FC } from 'react';
import { useState } from 'react';
import { useInView } from 'react-cool-inview';
import { CHAIN_ID } from 'src/constants';
import formatHandle from 'utils/formatHandle';
import { mainnet } from 'wagmi/chains';

interface Props {
  profile: Profile;
}

const NFTFeed: FC<Props> = ({ profile }) => {
  const [hasMore, setHasMore] = useState(true);

  // Variables
  const request: NfTsRequest = {
    chainIds: IS_MAINNET ? [CHAIN_ID, mainnet.id] : [CHAIN_ID],
    ownerAddress: profile?.ownedBy,
    limit: 10
  };

  const { data, loading, error, fetchMore } = useNftFeedQuery({
    variables: { request },
    skip: !profile?.ownedBy
  });

  const nfts = data?.nfts?.items;
  const pageInfo = data?.nfts?.pageInfo;

  const { observe } = useInView({
    onChange: async ({ inView }) => {
      if (!inView || !hasMore) {
        return;
      }

      await fetchMore({
        variables: { request: { ...request, cursor: pageInfo?.next } }
      }).then(({ data }) => {
        setHasMore(data?.nfts?.items?.length > 0);
      });
    }
  });

  if (loading) {
    return <NFTSShimmer />;
  }

  if (nfts?.length === 0) {
    return (
      <EmptyState
        message={
          <div>
            <span className="mr-1 font-bold">@{formatHandle(profile?.handle)}</span>
            <span>
              doesn’t have any NFTs!
            </span>
          </div>
        }
        icon={<CollectionIcon className="text-brand h-8 w-8" />}
      />
    );
  }

  if (error) {
    return <ErrorMessage title={`Failed to load nft feed`} error={error} />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {nfts?.map((nft) => (
        <div key={`${nft?.chainId}_${nft?.contractAddress}_${nft?.tokenId}`}>
          <SingleNFT nft={nft as Nft} />
        </div>
      ))}
      {hasMore && <span ref={observe} />}
    </div>
  );
};

export default NFTFeed;
