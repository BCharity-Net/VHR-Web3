import useStaffMode from '@components/utils/hooks/useStaffMode'
import { Mixpanel } from '@lib/mixpanel'
import Link from 'next/link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
// import { APP_NAME } from 'src/constants'
import { FOOTER } from 'src/tracking'

const Footer: FC = () => {
  const { t } = useTranslation('common')
  const { allowed: staffMode } = useStaffMode()

  return (
    <footer
      className={`mt-4 leading-7 text-sm sticky flex flex-wrap px-3 lg:px-0 gap-x-[12px] ${
        staffMode ? 'top-28' : 'top-20'
      }`}
    >
      <a
        href="https://polygive.gitbook.io/bcharity/"
        target="_blank"
        rel="noreferrer noopener"
        onClick={() => Mixpanel.track(FOOTER.ABOUT)}
      >
        {t('About')}
      </a>
      <a
        href="https://discord.gg/4vKS59q5kV"
        target="_blank"
        rel="noreferrer noopener"
        onClick={() => Mixpanel.track(FOOTER.DISCORD)}
      >
        Discord
      </a>
      <a
        href="https://twitter.com/BCharityFi"
        target="_blank"
        rel="noreferrer noopener"
        onClick={() => Mixpanel.track(FOOTER.TWITTER)}
      >
        {t('Twitter')}
      </a>
      <a
        href="https://t.me/BCharitynet"
        target="_blank"
        rel="noreferrer noopener"
        onClick={() => Mixpanel.track(FOOTER.TELEGRAM)}
      >
        {t('Telegram')}
      </a>
      <a href="" target="_blank" rel="noreferrer noopener" onClick={() => Mixpanel.track(FOOTER.DONATE)}>
        {t('Donate')}
      </a>
      <a href="" target="_blank" rel="noreferrer noopener" onClick={() => Mixpanel.track(FOOTER.STATUS)}>
        {t('Status')}
      </a>
      <a
        href="https://snapshot.org/#/igive.eth"
        target="_blank"
        rel="noreferrer noopener"
        onClick={() => Mixpanel.track(FOOTER.VOTE)}
      >
        {t('Vote')}
      </a>
      <a href="https://github.com/BCharity-Net/SocialFi" target="_blank" rel="noreferrer noopener">
        GitHub
      </a>
      <a href="https://feedback.bcharity.net" target="_blank" rel="noreferrer noopener">
        Feedback
      </a>
      <Link href="/thanks">{t('Thanks')}</Link>
      <Link href="/privacy">{t('Privacy')}</Link>
      <Link href="/terms">{t('Terms')}</Link>
      <span className="font-bold text-gray-600 dark:text-gray-600">
        <a href="https://ecssen.ca/" target="_blank" rel="noreferrer noopener">
          {t('Copyright')}
        </a>
      </span>
      <span className="font-bold text-gray-600 dark:text-gray-600">
        <a href="https://github.com/lensterxyz/lenster" target="_blank" rel="noreferrer noopener">
          {new Date().getFullYear()} {t('Copyright-lenster')}
        </a>
      </span>
      {/* <a
        className="pr-3 hover:font-bold"
        href={`https://vercel.com/?utm_source=${APP_NAME}&utm_campaign=oss`}
        target="_blank"
        rel="noreferrer noopener"
      >
        ▲ Powered by Vercel
      </a> */}
    </footer>
  )
}

export default Footer
