import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { AlertProvidersContext, AlertProvidersType } from 'src/providers';
import i18n from 'src/mocks/i18n-mock-store';

export const AllContextProvidersMock = ({
  children,
  alertProvidersContextStore = { showAlert: false, show: () => {} },
}: {
  children: ReactNode;
  alertProvidersContextStore?: AlertProvidersType;
}) => {
  return (
    <AlertProvidersContext.Provider value={alertProvidersContextStore}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </AlertProvidersContext.Provider>
  );
};
