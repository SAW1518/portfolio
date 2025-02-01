import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Alert } from '../alert';
import { AllContextProvidersMock } from 'src/mocks';


vi.mock('react-dom', () => ({
  ...vi.importActual('react-dom'),
  createPortal: vi.fn((element: any) => element),
}));

describe('Alert', () => {
  it('should render the alert component', () => {
    const { getAllByText } = render(
      <div>
        <AllContextProvidersMock alertProvidersContextStore={{ showAlert: true, show: () => {} }}>
          <div id="pageWrapper">
            <Alert />
          </div>
        </AllContextProvidersMock>
      </div>,
    );
    expect(getAllByText('Email copied!')).toBeDefined();
    expect(getAllByText('The email address has been copied to your clipboard.')).toBeDefined();
  });
});
