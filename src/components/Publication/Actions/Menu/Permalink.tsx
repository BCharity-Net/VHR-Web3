import { BCharityPublication } from '@generated/bcharitytypes'
import { Menu } from '@headlessui/react'
import { ClipboardCopyIcon } from '@heroicons/react/outline'
import { Mixpanel } from '@lib/mixpanel'
import clsx from 'clsx'
import { FC } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import toast from 'react-hot-toast'
import { PUBLICATION } from 'src/tracking'

interface Props {
  publication: BCharityPublication
}

const Permalink: FC<Props> = ({ publication }) => {
  return (
    <CopyToClipboard
      text={`${location.origin}/posts/${publication?.id}`}
      onCopy={() => {
        toast.success('Copied to clipboard!')
        Mixpanel.track(PUBLICATION.PERMALINK)
      }}
    >
      <Menu.Item
        as="div"
        className={({ active }: { active: boolean }) =>
          clsx({ 'dropdown-active': active }, 'block px-4 py-1.5 text-sm m-2 rounded-lg cursor-pointer')
        }
        onClick={() => {}}
      >
        <div className="flex items-center space-x-2">
          <ClipboardCopyIcon className="w-4 h-4" />
          <div>Permalink</div>
        </div>
      </Menu.Item>
    </CopyToClipboard>
  )
}

export default Permalink
