import { ReactNode } from 'react';
import { AlertProvidersContext, AlertProvidersType } from 'src/providers';

export const AllContextProvidersMock = ({
  children,
  alertProvidersContextStore = { showAlert: false, show: () => {} },
}: {
  children: ReactNode;
  alertProvidersContextStore?: AlertProvidersType;
}) => {
  return (
    <AlertProvidersContext.Provider value={alertProvidersContextStore}>
      {children}
    </AlertProvidersContext.Provider>
  );
};
