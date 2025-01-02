import { describe, it, expect } from 'vitest';
import { AlertProviders, AlertProvidersContext } from 'src/providers';

describe('Reexported modules', () => {
  it('should export AlertProviders', () => {
    expect(AlertProviders).toBeDefined();
  });

  it('should export AlertProvidersContext', () => {
    expect(AlertProvidersContext).toBeDefined();
  });
});
