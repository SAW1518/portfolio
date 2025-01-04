import { describe, it, expect } from 'vitest';
import { useAlert } from 'src/hooks';

describe('Reexported modules', () => {
  it('should export useAlert', () => {
    expect(useAlert).toBeDefined();
    expect(useAlert).toBeInstanceOf(Function);
  });
});
