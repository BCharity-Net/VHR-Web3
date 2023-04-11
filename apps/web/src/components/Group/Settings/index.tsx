import { useMutation } from '@apollo/client'
import { Button } from '@components/UI/Button'
import { WarningMessage } from '@components/UI/WarningMessage'
import type { Group } from 'src/types/index.ts /types'
import { TrashIcon } from '@heroicons/react/outline'
import type { Mutation } from 'lens'
import { HidePublicationDocument } from 'lens'
import { useRouter } from 'next/router'
import type { FC } from 'react'

interface Props {
  group: Group
}

const Settings: FC<Props> = ({ group }) => {
  const { push } = useRouter()
  const [hidePost] = useMutation<Mutation>(HidePublicationDocument, {
    onCompleted: () => {
      push('/')
    }
  })

  return (
    <div className="p-5 space-y-5">
      <div>
        <WarningMessage message="Only delete settings is available now, you can't edit any part of the group right now!" />
      </div>
      <div className="space-y-2">
        <div className="font-bold text-red-500">Danger Zone</div>
        <p>Deleting your group will delete only from indexers and not from the blockchain.</p>
        <Button
          className="!mt-5"
          icon={<TrashIcon className="w-5 h-5" />}
          variant="danger"
          onClick={() => {
            if (confirm('Are you sure you want to delete?')) {
              hidePost({
                variables: { request: { publicationId: group?.id } }
              })
            }
          }}
        >
          Delete Group
        </Button>
      </div>
    </div>
  )
}

export default Settings
