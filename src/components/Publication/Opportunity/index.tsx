import { Card } from '@components/UI/Card'
import { BCharityPublication } from '@generated/bcharitytypes'
import getIPFSLink from '@lib/getIPFSLink'
import imagekitURL from '@lib/imagekitURL'
import { FC, useState } from 'react'

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
          <img
            key="attachment"
            className="object-cover w-full h-full rounded-lg border-[3px] border-black margin mb-[20px]"
            // height={240}
            src={imagekitURL(getIPFSLink(attachments[activeIndex].item), 'attachment')}
            alt={attachments[activeIndex].item}
          />
          <div className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
            {attachments.map((i: any, index: any) =>
              index === activeIndex ? (
                <img
                  key="attachment"
                  className="object-cover w-[200px] h-[100px] rounded-lg inline-block mr-[20px] border-[3px] border-black"
                  src={imagekitURL(getIPFSLink(i.item), 'attachment')}
                  alt={i.item}
                  onClick={() => {
                    setActiveIndex(index)
                  }}
                />
              ) : (
                <img
                  key="attachment"
                  className="object-cover w-[200px] h-[100px] rounded-lg inline-block mr-[20px] cursor-pointer blur-[1px] border-[3px] border-gray-300"
                  src={imagekitURL(getIPFSLink(i.item), 'attachment')}
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

const Opportunities: FC<Props> = ({ publication }) => {
  // const { t } = useTranslation('common')
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
            <div className="text-2xl">Volunteer Opportunities </div>
            <div className="text-xl">Make a comment to apply for this volunteer opportunity.</div>
          </div>
        </div>
        <div>
          <table className="border border-violet-500 w-10 whitespace-nowrap">
            <tr className="text-center font-bold bg-violet-200">
              <th className="border border-violet-500 px-6 py-2">Organization</th>
              <th className="border border-violet-500 px-6 py-2">{publication.metadata.name}</th>
            </tr>

            <tr className="text-center font-bold bg-violet-200">
              <th className="border border-violet-500 px-6 py-2">Program</th>
              <th className="border border-violet-500 px-6 py-2">
                {publication.metadata.attributes[1].value}
              </th>
            </tr>
            <tr className="text-center font-bold bg-violet-200">
              <th className="border border-violet-500 px-6 py-2">Position</th>
              <th className="border border-violet-500 px-6 py-2">
                {publication.metadata.attributes[2].value}
              </th>
            </tr>

            <tr className="text-center font-bold bg-violet-200">
              <th className="border border-violet-500 px-6 py-2">Number of Volunteers</th>
              <th className="border border-violet-500 px-6 py-2">
                {publication.metadata.attributes[3].value}
              </th>
            </tr>

            <tr className="text-center font-bold bg-violet-200">
              <th className="border border-violet-500 px-6 py-2">City/Region</th>
              <th className="border border-violet-500 px-6 py-2">
                {publication.metadata.attributes[4].value}
              </th>
            </tr>

            <tr className="text-center font-bold bg-violet-200">
              <th className="border border-violet-500 px-6 py-2">Category</th>
              <th className="border border-violet-500 px-6 py-2">
                {publication.metadata.attributes[5].value}
              </th>
            </tr>
            <tr className="text-center font-bold bg-violet-200">
              {!(publication.metadata.attributes[6].value === publication.metadata.attributes[7].value) ? (
                <th className="border border-violet-500 px-6 py-2">Start Date</th>
              ) : (
                <th className="border border-violet-500 px-6 py-2">Date</th>
              )}
              <th className="border border-violet-500 px-6 py-2">
                {publication.metadata.attributes[6].value}
              </th>
            </tr>

            {!(publication.metadata.attributes[6].value === publication.metadata.attributes[7].value) && (
              <tr className="text-center font-bold bg-violet-200">
                <th className="border border-violet-500 px-6 py-2">End Date</th>
                <th className="border border-violet-500 px-6 py-2">
                  {publication.metadata.attributes[7].value}
                </th>
              </tr>
            )}

            <tr className="text-center font-bold bg-violet-200">
              <th className="border border-violet-500 px-6 py-2">Total Hours</th>
              <th className="border border-violet-500 px-6 py-2">
                {publication.metadata.attributes[8].value}
              </th>
            </tr>

            <tr className="text-center font-bold bg-violet-200">
              <th className="border border-violet-500 px-6 py-2">Description and Requirements</th>
              <th className="border border-violet-500 px-6 py-2">{publication.metadata.description}</th>
            </tr>
          </table>
        </div>

        <br />
        <div>
          {publication.metadata.attributes[9].value && (
            <>
              <div className="text-xl font-bold">Event Images</div>
              <Media media={publication.metadata.attributes[9].value} />
            </>
          )}
        </div>
      </div>
    </Card>
  )
}

export default Opportunities
