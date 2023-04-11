import Collectors from '@components/Shared/Modal/Collectors';
import Likes from '@components/Shared/Modal/Likes';
import Mirrors from '@components/Shared/Modal/Mirrors';
import { CollectionIcon, HeartIcon, SwitchHorizontalIcon } from '@heroicons/react/outline';
import type { Publication } from 'lens';
import nFormatter from 'lib/nFormatter';
import type { FC } from 'react';
import { useState } from 'react';
import { usePreferencesStore } from 'src/store/preferences';
import { Modal } from 'ui';

interface Props {
  publication: Publication;
}

const PublicationStats: FC<Props> = ({ publication }) => {
  const hideLikesCount = usePreferencesStore((state) => state.hideLikesCount);
  const [showMirrorsModal, setShowMirrorsModal] = useState(false);
  const [showLikesModal, setShowLikesModal] = useState(false);
  const [showCollectorsModal, setShowCollectorsModal] = useState(false);

  const isMirror = publication.__typename === 'Mirror';
  const commentsCount = isMirror
    ? publication?.mirrorOf?.stats?.totalAmountOfComments
    : publication?.stats?.totalAmountOfComments;
  const mirrorCount = isMirror
    ? publication?.mirrorOf?.stats?.totalAmountOfMirrors
    : publication?.stats?.totalAmountOfMirrors;
  const reactionCount = isMirror
    ? publication?.mirrorOf?.stats?.totalUpvotes
    : publication?.stats?.totalUpvotes;
  const collectCount = isMirror
    ? publication?.mirrorOf?.stats?.totalAmountOfCollects
    : publication?.stats?.totalAmountOfCollects;
  const publicationId = isMirror ? publication?.mirrorOf?.id : publication?.id;

  return (
    <div className="flex flex-wrap gap-6 text-sm items-center py-3 lt-text-gray-500 sm:gap-8">
      {mirrorCount > 0 && (
        <>
          <span data-testid={`publication-${publication.id}-comment-stats`}>
            <b className="text-black dark:text-white">{nFormatter(commentsCount)}</b> Comments
          </span>
          <button
            type="button"
            onClick={() => setShowMirrorsModal(true)}
            data-testid={`publication-${publication.id}-mirror-stats`}
          >
            
          <b className="text-black dark:text-white">{nFormatter(mirrorCount)}</b> Mirrors
          </button>
          <Modal
            title="Mirrored by"
            icon={<SwitchHorizontalIcon className="w-5 h-5 text-brand" />}
            show={showMirrorsModal}
            onClose={() => setShowMirrorsModal(false)}
          >
            <Mirrors publicationId={publicationId} />
          </Modal>
        </>
      )}
      {!hideLikesCount && reactionCount > 0 && (
        <>
          <button
            type="button"
            onClick={() => setShowLikesModal(true)}
            data-testid={`publication-${publication.id}-like-stats`}
          >
            <b className="text-black dark:text-white">{nFormatter(reactionCount)}</b> Likes
          </button>
          <Modal
            title="Liked by"
            icon={<HeartIcon className="w-5 h-5 text-brand" />}
            show={showLikesModal}
            onClose={() => setShowLikesModal(false)}
          >
            <Likes publicationId={publicationId} />
          </Modal>
        </>
      )}
      {collectCount > 0 && (
        <>
          <button
            type="button"
            onClick={() => setShowCollectorsModal(true)}
            data-testid={`publication-${publication.id}-collect-stats`}
          >
            <b className="text-black dark:text-white">{nFormatter(collectCount)}</b> Collects
          </button>
          <Modal
            title="Collected by"
            icon={<CollectionIcon className="w-5 h-5 text-brand" />}
            show={showCollectorsModal}
            onClose={() => setShowCollectorsModal(false)}
          >
            <Collectors publicationId={publicationId} />
          </Modal>
        </>
      )}
    </div>
  );
};

export default PublicationStats;
