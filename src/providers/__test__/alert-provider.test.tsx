import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AlertProvidersContext } from 'src/providers';
import { useContext } from 'react';
import { render } from '@testing-library/react';

const TestComponent = () => {
  const context = useContext(AlertProvidersContext);
  return <>{JSON.stringify(context)}</>;
};

const useTestHook = () => {
  const { show, showAlert } = useContext(AlertProvidersContext);
  return { show, showAlert };
};

describe('<AlertProvidersContext/>', () => {
  it('should provide the context', () => {
    const { getByText } = render(
      <AlertProvidersContext.Provider value={{ showAlert: true, show: () => {} }}>
        <TestComponent />
      </AlertProvidersContext.Provider>,
    );

    expect(getByText('{"showAlert":true}')).toBeDefined();
  });
});
