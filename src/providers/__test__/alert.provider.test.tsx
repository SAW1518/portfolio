import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { AlertProvidersContext } from 'src/providers';
import { useContext } from 'react';
import { act, render, renderHook } from '@testing-library/react';
import { alertProvidersDefaultMock } from 'src/mocks/all-context-providers-mock';

const TestComponent = () => {
  const context = useContext(AlertProvidersContext);
  return <>{JSON.stringify(context)}</>;
};

const TestComponentRuningShow = () => {
  const { show, showAlert } = useContext(AlertProvidersContext);

  return (
    <div>
      <button onClick={show}>Show Alert</button>
      {showAlert && <span>Alert is visible</span>}
    </div>
  );
};

const useTestHook = () => {
  const { show, showAlert } = useContext(AlertProvidersContext);
  return { show, showAlert };
};

describe('<AlertProvidersContext/>', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });
  it('should provide the context', () => {
    const { getByText } = render(
      <AlertProvidersContext.Provider value={{ ...alertProvidersDefaultMock, showAlert: false }}>
        <TestComponent />
      </AlertProvidersContext.Provider>,
    );

    expect(getByText('{"showAlert":false,"isCarouselOpen":false}')).toBeDefined();
  });

  it('should hide the alert after 3 seconds', () => {
    const { queryByText, getByText } = render(
      <AlertProvidersContext.Provider value={{ ...alertProvidersDefaultMock, showAlert: true }}>
        <TestComponentRuningShow />
      </AlertProvidersContext.Provider>,
    );

    act(() => {
      getByText('Show Alert').click();
    });

    expect(getByText('Alert is visible')).toBeDefined();

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(queryByText('Alert is visible')).toBeDefined();
  });

  it('should render the AlertProviders default values', () => {
    const { result } = renderHook(() => useTestHook());

    const { show, showAlert } = result.current;

    expect(showAlert).toBeUndefined();
    expect(show).toBeUndefined();
  });
});
