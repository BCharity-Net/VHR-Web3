import type { FC } from 'react'
import { Spinner } from 'ui'

interface Props {
  message?: string
}

const Loader: FC<Props> = ({ message }) => {
  return (
    <div className="p-5 space-y-2 font-bold text-center">
      <Spinner size="md" className="mx-auto" />
      {message ? <div>{message}</div> : null}
    </div>
  )
}

export default Loader
