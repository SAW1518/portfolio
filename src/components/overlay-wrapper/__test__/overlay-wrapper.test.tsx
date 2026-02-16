import { render, cleanup } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { OverlayWrapper } from '../overlay-wrapper';

describe('OverlayWrapper', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="pageWrapper"></div>';
    document.body.style.overflow = '';
  });

  afterEach(() => {
    cleanup();
  });

  it('should render children inside the pageWrapper portal', () => {
    render(
      <OverlayWrapper>
        <p>Test content</p>
      </OverlayWrapper>,
    );

    const pageWrapper = document.getElementById('pageWrapper');
    expect(pageWrapper?.textContent).toBe('Test content');
  });

  it('should block page scroll when mounted', () => {
    render(
      <OverlayWrapper>
        <p>Test</p>
      </OverlayWrapper>,
    );

    expect(document.body.style.overflow).toBe('hidden');
  });

  it('should restore page scroll when unmounted', () => {
    const { unmount } = render(
      <OverlayWrapper>
        <p>Test</p>
      </OverlayWrapper>,
    );

    expect(document.body.style.overflow).toBe('hidden');

    unmount();

    expect(document.body.style.overflow).toBe('');
  });
});
