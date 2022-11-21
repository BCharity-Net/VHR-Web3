import Collectors from '@components/Shared/Modal/Collectors'
import { Button } from '@components/UI/Button'
import { Card } from '@components/UI/Card'
import { Modal } from '@components/UI/Modal'
import type { BCharityPublication } from '@generated/types'
import { ClockIcon } from '@heroicons/react/outline'
import getIPFSLink from '@lib/getIPFSLink'
import imageProxy from '@lib/imageProxy'
import type { FC } from 'react'
import { useState } from 'react'
import { useAppStore } from 'src/store/app'

import Verify from './Verify'

interface Props {
  publication: BCharityPublication
}

interface MediaProps {
  media: string | undefined | null
}

const Media: FC<MediaProps> = ({ media }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  let attachments: any[] = []
  if (media) {
    attachments = JSON.parse(media)
  }
  return (
    <div>
      {attachments && (
        <>
          <div className="h-80 mb-[20px]">
            <img
              key="attachment"
              className="object-cover h-full rounded-lg border-[3px] border-black margin"
              // height={60}
              src={imageProxy(getIPFSLink(attachments[activeIndex].item), 'attachment')}
              alt={attachments[activeIndex].item}
            />
          </div>
          <div className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
            {attachments.map((i: any, index: any) =>
              index === activeIndex ? (
                <img
                  key="attachment"
                  className="object-cover w-[200px] h-[100px] rounded-lg inline-block mr-[20px] border-[3px] border-black"
                  src={imageProxy(getIPFSLink(i.item), 'attachment')}
                  alt={i.item}
                  onClick={() => {
                    setActiveIndex(index)
                  }}
                />
              ) : (
                <img
                  key="attachment"
                  className="object-cover w-[200px] h-[100px] rounded-lg inline-block mr-[20px] cursor-pointer blur-[1px] border-[3px] border-gray-300"
                  src={imageProxy(getIPFSLink(i.item), 'attachment')}
                  alt={i.item}
                  onClick={() => {
                    setActiveIndex(index)
                  }}
                />
              )
            )}
          </div>
        </>
      )}
    </div>
  )
}

const Hours: FC<Props> = ({ publication }) => {
  // const { t } = useTranslation('common')
  const currentProfile = useAppStore((state) => state.currentProfile)
  const [showVerifyModal, setShowVerifyModal] = useState(false)
  if (publication.metadata.attributes.length < 9) {
    return <div />
  }
  return (
    <Card forceRounded>
      <div className="p-5">
        <div className="mr-0 space-y-1 sm:mr-16" />
        <div className="block justify-between items-center sm:flex">
          <div className="text-xl font-bold">
            {' '}
            <div className="text-2xl">VHR Volunteer Hour Verification </div>
            <div className="text-xl">
              Submitted by {publication.profile.name} ({publication.profile.handle}):
            </div>
          </div>
          {currentProfile &&
            (publication?.stats?.totalAmountOfCollects < 1 ? (
              <div className="pt-3 sm:pt-0">
                <Verify publication={publication} />
              </div>
            ) : (
              <div className="p-3">
                <Button className="sm:mt-0 sm:ml-auto" onClick={() => setShowVerifyModal(!showVerifyModal)}>
                  Verified
                </Button>
                <Modal
                  title="Verified"
                  icon={<ClockIcon className="w-5 h-5 text-brand" />}
                  show={showVerifyModal}
                  onClose={() => setShowVerifyModal(false)}
                >
                  <Collectors publicationId={publication?.id} />
                </Modal>
              </div>
            ))}
        </div>
        <div>
          <table className="border border-violet-500 w-10 whitespace-nowrap">
            <tr className="text-center font-bold bg-violet-200">
              <th className="border border-violet-500 px-6 py-2">Organization</th>
              <th className="border border-violet-500 px-6 py-2">{publication.metadata.name}</th>
            </tr>
            <tr className="text-center font-bold bg-violet-200">
              <th className="border border-violet-500 px-6 py-2">Organization Wallet</th>
              <th className="border border-violet-500 px-6 py-2">
                {publication.metadata.attributes[1].value?.substring(0, 30) + '...'}
              </th>
            </tr>
            <tr className="text-center font-bold bg-violet-200">
              {!(publication.metadata.attributes[2].value === publication.metadata.attributes[3].value) ? (
                <th className="border border-violet-500 px-6 py-2">Start Date</th>
              ) : (
                <th className="border border-violet-500 px-6 py-2">Date</th>
              )}
              <th className="border border-violet-500 px-6 py-2">
                {publication.metadata.attributes[2].value}
              </th>
            </tr>

            {!(publication.metadata.attributes[2].value === publication.metadata.attributes[3].value) && (
              <tr className="text-center font-bold bg-violet-200">
                <th className="border border-violet-500 px-6 py-2">End Date</th>
                <th className="border border-violet-500 px-6 py-2">
                  {publication.metadata.attributes[3].value}
                </th>
              </tr>
            )}
            <tr className="text-center font-bold bg-violet-200">
              <th className="border border-violet-500 px-6 py-2">Total Hours</th>
              <th className="border border-violet-500 px-6 py-2">
                {publication.metadata.attributes[4].value}
              </th>
            </tr>
            <tr className="text-center font-bold bg-violet-200">
              <th className="border border-violet-500 px-6 py-2">Program</th>
              <th className="border border-violet-500 px-6 py-2">
                {publication.metadata.attributes[5].value}
              </th>
            </tr>

            <tr className="text-center font-bold bg-violet-200">
              <th className="border border-violet-500 px-6 py-2">City/Region</th>
              <th className="border border-violet-500 px-6 py-2">
                {publication.metadata.attributes[6].value}
              </th>
            </tr>

            <tr className="text-center font-bold bg-violet-200">
              <th className="border border-violet-500 px-6 py-2">Category</th>
              <th className="border border-violet-500 px-6 py-2">
                {publication.metadata.attributes[7].value}
              </th>
            </tr>

            <tr className="text-center font-bold bg-violet-200">
              <th className="border border-violet-500 px-6 py-2">Outcome</th>
              <th className="border border-violet-500 px-6 py-2">{publication.metadata.description}</th>
            </tr>
          </table>
        </div>

        <br />
        <div>
          {publication.metadata.attributes[8].value && (
            <>
              <div className="text-xl font-bold">Event Images</div>
              <Media media={publication.metadata.attributes[8].value} />
            </>
          )}
        </div>
      </div>
    </Card>
  )
}

export default Hours
