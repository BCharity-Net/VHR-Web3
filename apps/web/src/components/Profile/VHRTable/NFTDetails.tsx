import { FollowNFT } from 'abis/FollowNFT'
import type { FC } from 'react'
import { useContractRead } from 'wagmi'

interface Props {
  address: string
  callback?: Function
}

const NFTDetails: FC<Props> = ({ address, callback }) => {
  useContractRead({
    address: address,
    abi: FollowNFT,
    functionName: 'tokenURI',
    args: ['1'],
    onSuccess(data) {
      if (!callback) {
        return
      }
      callback(data)
    }
  })
  return <div />
}

export default NFTDetails
