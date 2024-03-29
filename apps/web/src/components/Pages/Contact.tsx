import MetaTags from '@components/Common/MetaTags'
import SettingsHelper from '@components/Shared/SettingsHelper'
import { PencilAltIcon } from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { Mixpanel } from '@lib/mixpanel'
import axios from 'axios'
import { APP_NAME, FRESHDESK_WORKER_URL } from 'data/constants'
import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PAGEVIEW } from 'src/tracking'
import {
  Button,
  Card,
  EmptyState,
  Form,
  GridItemEight,
  GridItemFour,
  GridLayout,
  Input,
  Spinner,
  TextArea,
  useZodForm
} from 'ui'
import { object, string } from 'zod'

const newContactSchema = object({
  email: string().email({ message: `Email is not valid` }),
  subject: string().min(1, { message: 'Subject  should not be empty' }).max(260, {
    message: 'Subject should not exceed 260 characters'
  }),
  message: string().min(1, { message: 'Message should not be empty' }).max(1000, {
    message: 'Message should not exceed 1000 characters'
  })
})

const Contact: FC = () => {
  const { t } = useTranslation('common')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    Mixpanel.track(PAGEVIEW, { page: 'contact' });
  }, []);
  
  const form = useZodForm({
    schema: newContactSchema
  })

  const submitToFreshdesk = async (email: string, subject: string, body: string) => {
    setSubmitting(true);
    try {
      const { data } = await axios(FRESHDESK_WORKER_URL, {
        method: 'POST',
        data: { email, subject, body }
      });

      if (data.success) {
        setSubmitted(true);
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <GridLayout>
      <MetaTags title={`Contact • ${APP_NAME}`} />
      <GridItemFour>
        <SettingsHelper heading={t('Contact Title')} description={t('Contact Description')} />
      </GridItemFour>
      <GridItemEight>
        <Card>
          {submitted ? (
            <EmptyState
              message={<span>{'Your message has been sent!'}</span>}
              icon={<CheckCircleIcon className="w-14 h-14 text-green-500" />}
              hideCard
            />
          ) : (
            <Form
              form={form}
              className="p-5 space-y-4"
              onSubmit={({ email, subject, message }) => {
                submitToFreshdesk(email, subject, message)
              }}
            >
              <Input label={t`Email`} placeholder={t`gavin@hooli.com`} {...form.register('email')} />
              <Input label={t('Subject')} placeholder={t('What happened')} {...form.register('subject')} />
              <TextArea
                label={t('Contact message')}
                placeholder={t('Message')}
                {...form.register('message')}
              />
              <div className="ml-auto">
                <Button
                  type="submit"
                  disabled={submitting}
                  icon={submitting ? <Spinner size="xs" /> : <PencilAltIcon className="h-4 w-4" />}
                >
                  {t('Submit')}
                </Button>
              </div>
            </Form>
          )}
        </Card>
      </GridItemEight>
    </GridLayout>
  )
}

export default Contact
