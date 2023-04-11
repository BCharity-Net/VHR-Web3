import { PencilAltIcon } from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { Mixpanel } from '@lib/mixpanel'
import type { Publication } from 'lens'
import { useReportPublicationMutation } from 'lens'
import { stopEventPropagation } from 'lib/stopEventPropagation'
import type { FC } from 'react'
import { useState } from 'react'
import { useGlobalModalStateStore } from 'src/store/modals'
import { PUBLICATION } from 'src/tracking'
import { Button, EmptyState, ErrorMessage, Form, Spinner, TextArea, useZodForm } from 'ui'
import { object, string } from 'zod'

import Reason from './Reason'

const newReportSchema = object({
  additionalComments: string().max(260, {
    message: 'Additional comments should not exceed 260 characters'
  })
})

interface Props {
  publication: Publication
}

const Report: FC<Props> = ({ publication }) => {
  const reportConfig = useGlobalModalStateStore((state) => state.reportConfig)
  const [type, setType] = useState(reportConfig?.type ?? '')
  const [subReason, setSubReason] = useState(reportConfig?.subReason ?? '')

  const [createReport, { data: submitData, loading: submitLoading, error: submitError }] =
    useReportPublicationMutation({
      onCompleted: () => {
        Mixpanel.track(PUBLICATION.REPORT, {
          report_publication_id: publication?.id
        })
      }
    })

  const form = useZodForm({
    schema: newReportSchema
  })

  const reportPublication = (additionalComments: string | null) => {
    createReport({
      variables: {
        request: {
          publicationId: publication?.id,
          reason: {
            [type]: {
              reason: type.replace('Reason', '').toUpperCase(),
              subreason: subReason
            }
          },
          additionalComments
        }
      }
    })
  }

  return (
    <div onClick={stopEventPropagation}>
      {submitData?.reportPublication === null ? (
        <EmptyState
          message={<span>Publication reported successfully!</span>}
          icon={<CheckCircleIcon className="w-14 h-14 text-green-500" />}
          hideCard
        />
      ) : publication ? (
        <div className="p-5">
          <Form
            form={form}
            className="space-y-4"
            onSubmit={({ additionalComments }) => {
              reportPublication(additionalComments)
            }}
          >
            {submitError && <ErrorMessage title="Failed to report" error={submitError} />}
            <Reason setType={setType} setSubReason={setSubReason} type={type} subReason={subReason} />
            {subReason && (
              <>
                <TextArea
                  label="Description"
                  placeholder="Tell us something about the community!"
                  {...form.register('additionalComments')}
                />
                <div className="ml-auto">
                  <Button
                    type="submit"
                    disabled={submitLoading}
                    icon={submitLoading ? <Spinner size="xs" /> : <PencilAltIcon className="w-4 h-4" />}
                  >
                    Report
                  </Button>
                </div>
              </>
            )}
          </Form>
        </div>
      ) : null}
    </div>
  )
}

export default Report
