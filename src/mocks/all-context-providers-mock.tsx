import { I18nextProvider } from 'react-i18next';
import { vi } from 'vitest';
import i18n from './i18n-mock-store';
import { AlertProvidersContext, AlertProvidersType } from '../providers/alert.provider';

export const alertProvidersDefaultMock = {
  showAlert: false,
  show: vi.fn(),
  isCarouselOpen: false,
  openCarousel: vi.fn(),
  closeCarousel: vi.fn(),
};

export const AllContextProvidersMock = ({
  children,
  alertProvidersMock = alertProvidersDefaultMock,
}: {
  children: JSX.Element;
  alertProvidersMock?: AlertProvidersType;
}) => {
  return (
    <I18nextProvider i18n={i18n}>
      <AlertProvidersContext.Provider value={alertProvidersMock}>
        {children}
      </AlertProvidersContext.Provider>
    </I18nextProvider>
  );
};
