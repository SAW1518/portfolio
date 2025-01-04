import { renderHook } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useAlert } from 'src/hooks';
import { AllContextProvidersMock } from 'src/mocks';

describe('useAlert', () => {
  it('should throw an error when used outside of AlertProvidersContext', () => {
    try {
      renderHook(() => useAlert());
    } catch (error) {
      // @ts-ignore just for test
      expect(error.message).toBe('useAlert need to be inside of a AlertProviders');
    }
  });
  it('should return the context value when used within AlertProvidersContext', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AllContextProvidersMock>{children}</AllContextProvidersMock>
    );

    const { result } = renderHook(() => useAlert(), { wrapper });

    expect(result.current.show).toBeInstanceOf(Function);
    expect(result.current.showAlert).toBe(false);
  });
});
