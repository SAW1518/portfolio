import { render } from '@testing-library/react';
import { TitleSection } from 'src/components';
import { describe, expect, it } from 'vitest';

describe('TitleSection  Component', () => {
  it('should render a title', () => {
    const { getByText } = render(<TitleSection tag="h3" title="Title" />);
    expect(getByText('Title')).toBeDefined();
  });
  it('should render a title section with h3 tag', () => {
    const { container } = render(<TitleSection tag="h3" title="Title" />);
    expect(container.firstElementChild?.tagName).toBe('H3');
  });
  it('should render a title section with h4 tag', () => {
    const { container } = render(<TitleSection tag="h4" title="Title" />);
    expect(container.firstElementChild?.tagName).toBe('H4');
  });
});
