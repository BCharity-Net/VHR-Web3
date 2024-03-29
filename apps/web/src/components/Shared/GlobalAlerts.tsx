import ModAction from '@components/Publication/Actions/ModAction';
import type { FC } from 'react';
import { useGlobalAlertStateStore } from 'src/store/alerts';
import { Alert } from 'ui';

import DeletePublication from './Alert/DeletePublication';

const GlobalAlerts: FC = () => {
  const showModActionAlert = useGlobalAlertStateStore((state) => state.showModActionAlert);
  const modingPublication = useGlobalAlertStateStore((state) => state.modingPublication);
  const setShowModActionAlert = useGlobalAlertStateStore((state) => state.setShowModActionAlert);

  return (
    <>
      <DeletePublication />
      {modingPublication ? (
        <Alert
          show={showModActionAlert}
          title={`Mod actions`}
          description={`Perform mod actions on this publication.`}
          onClose={() => setShowModActionAlert(false, null)}
        >
          <ModAction publication={modingPublication} />
        </Alert>
      ) : null}
    </>
  );
};

export default GlobalAlerts;
