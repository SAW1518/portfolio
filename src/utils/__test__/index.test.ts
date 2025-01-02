import { describe, it, expect } from 'vitest';
import { copy } from 'src/utils';


describe('Reexported modules', () => {
  it('should export copy', () => {
    expect(copy).toBeDefined();
  });
})