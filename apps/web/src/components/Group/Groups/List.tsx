import GroupProfile from '@components/Shared/GroupProfile'
import { Card } from '@components/UI/Card'
import { EmptyState } from '@components/UI/EmptyState'
import type { Group } from 'src/types/index.ts /types'
import { UsersIcon } from '@heroicons/react/outline'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
  groups: Group[]
}

const List: FC<Props> = ({ groups }) => {
  const { t } = useTranslation('common')
  return (
    <Card className="space-y-6">
      {groups?.length === 0 && (
        <EmptyState
          message={<div>{t('No groups found')}</div>}
          icon={<UsersIcon className="w-8 h-8 text-brand" />}
          hideCard
        />
      )}
      {groups.map((group: Group) => (
        <div key={group?.id}>
          <GroupProfile group={group} />
        </div>
      ))}
    </Card>
  )
}

export default List
