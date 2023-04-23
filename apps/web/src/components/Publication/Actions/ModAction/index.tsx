import Slug from '@components/Shared/Slug';
import {
  BanIcon,
  ExclamationCircleIcon,
  ExclamationIcon,
  PhotographIcon,
  RefreshIcon,
  ShieldCheckIcon
} from '@heroicons/react/outline';
import { Mixpanel } from '@lib/mixpanel';
import clsx from 'clsx';
import type { Publication } from 'lens';
import {
  PublicationReportingFraudSubreason,
  PublicationReportingSensitiveSubreason,
  PublicationReportingSpamSubreason,
  useReportPublicationMutation
} from 'lens';
import { stopEventPropagation } from 'lib/stopEventPropagation';
import type { FC, ReactNode } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useGlobalAlertStateStore } from 'src/store/alerts';
import { useGlobalModalStateStore } from 'src/store/modals';
import { MOD } from 'src/tracking';
import { Alert, Button } from 'ui';

interface Props {
  publication: Publication;
  className?: string;
}

const ModAction: FC<Props> = ({ publication, className = '' }) => {
  const setShowReportModal = useGlobalModalStateStore((state) => state.setShowReportModal);
  const setShowModActionAlert = useGlobalAlertStateStore((state) => state.setShowModActionAlert);
  const [showReportAlert, setShowReportAlert] = useState(false);

  const [createReport, { loading }] = useReportPublicationMutation();

  const reportPublication = async ({
    type,
    subreason,
    showToast = true
  }: {
    type: string;
    subreason: string;
    showToast?: boolean;
  }) => {
    return await createReport({
      variables: {
        request: {
          publicationId: publication?.id,
          reason: {
            [type]: { reason: type.replace('Reason', '').toUpperCase(), subreason }
          }
        }
      },
      onCompleted: () => {
        setShowModActionAlert(false, null);
      }
    }).finally(() => {
      if (showToast) {
        toast.success(`Publication reported successfully`);
      }
    });
  };

  const ReportButton = ({
    type,
    subreason,
    icon,
    label
  }: {
    type: string;
    subreason: string;
    icon: ReactNode;
    label: string;
  }) => (
    <Button
      disabled={loading}
      variant="warning"
      size="sm"
      outline
      icon={icon}
      onClick={() => {
        reportPublication({ type, subreason });
        Mixpanel.track(MOD.REPORT, {
          report_reason: type,
          report_subreason: subreason,
          report_publication_id: publication?.id
        });
      }}
    >
      {label}
    </Button>
  );

  return (
    <span
      className={clsx('flex flex-wrap items-center gap-3 text-sm', className)}
      onClick={stopEventPropagation}
      aria-hidden="true"
    >
      <ReportButton
        type="spamReason"
        subreason={PublicationReportingSpamSubreason.FakeEngagement}
        icon={<ExclamationCircleIcon className="h-4 w-4" />}
        label={`Spam`}
      />
      <ReportButton
        type="fraudReason"
        subreason={PublicationReportingFraudSubreason.Scam}
        icon={<PhotographIcon className="h-4 w-4" />}
        label={`Scam`}
      />
      <ReportButton
        type="sensitiveReason"
        subreason={PublicationReportingSensitiveSubreason.Nsfw}
        icon={<ExclamationIcon className="h-4 w-4" />}
        label={`NSFW`}
      />
      <ReportButton
        type="spamReason"
        subreason={PublicationReportingSpamSubreason.Repetitive}
        icon={<RefreshIcon className="h-4 w-4" />}
        label={`Repetitive`}
      />
      <Button
        disabled={loading}
        variant="danger"
        size="sm"
        outline
        icon={<BanIcon className="h-4 w-4" />}
        onClick={() => setShowReportAlert(true)}
      >
        Report
      </Button>
      <Button
        onClick={() => {
          setShowReportModal(true, publication);
        }}
        size="sm"
        disabled={loading}
        icon={<ShieldCheckIcon className="h-4 w-4" />}
      >
        Others
      </Button>
      <Alert
        title={`Report?`}
        description={`Are you sure? You want to report this user so that we can take action.`}
        confirmText={`Report`}
        show={showReportAlert}
        isPerformingAction={loading}
        isDestructive
        onConfirm={() => {
          for (let i = 0; i < 3; i++) {
            reportPublication({
              type: 'spamReason',
              subreason: PublicationReportingSpamSubreason.FakeEngagement,
              showToast: false
            }).finally(() => {
              setShowReportAlert(false);
            });
          }
          Mixpanel.track(MOD.REPORT, {
            report_reason: 'heavySpam',
            report_subreason: 'HEAVY_SPAM',
            report_publication_id: publication?.id
          });
        }}
        onClose={() => setShowReportAlert(false)}
      >
        <b>
          User: <Slug slug={publication.profile.handle} prefix="@" />
        </b>
      </Alert>
    </span>
  );
};

export default ModAction;
