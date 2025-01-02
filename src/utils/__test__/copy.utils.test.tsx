import { describe, it, expect, vi, beforeEach } from 'vitest';
import { copy } from '../copy.utils';

describe('copy', () => {
  beforeEach(() => {
    // Mockear navigator.clipboard
    Object.defineProperty(global, 'navigator', {
      value: {
        clipboard: {
          writeText: vi.fn(),
        },
      },
      configurable: true,
    });
  });

  it('should call onSuccessCallBack if writeText succeed', async () => {
    const writeTextMock = vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue();
    const onSuccessMock = vi.fn();
    const onErrorMock = vi.fn();

    await copy({
      newClip: 'test text',
      onSuccessCallBack: onSuccessMock,
      onErrorCallBack: onErrorMock,
    });

    expect(writeTextMock).toHaveBeenCalledWith('test text');
    expect(onSuccessMock).toHaveBeenCalled();
    expect(onErrorMock).not.toHaveBeenCalled();
  });
});
