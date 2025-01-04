import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Home } from 'src/pages';
describe('Home Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    Object.defineProperty(global, 'navigator', {
      value: {
        clipboard: {
          writeText: vi.fn(),
        },
      },
      configurable: true,
    });
  });

  it('should render headings and sections correctly', () => {
    render(<Home />);

    // Check main heading
    expect(screen.getByRole('heading', { name: /jesus enrique uribe lopez/i })).toBeDefined();

    // Check subheading
    expect(
      screen.getByRole('heading', { name: /software engineer - javascript\/typescript/i }),
    ).toBeDefined();

    // Check skills section
    expect(screen.getByRole('heading', { name: /skills/i })).toBeDefined();

    // Check contact information section
    expect(screen.getByRole('heading', { name: /contact information/i })).toBeDefined();

    // Check experience section
    expect(screen.getByRole('heading', { name: /experience/i })).toBeDefined();
  });

  it('should render social links correctly', () => {
    const { getAllByRole } = render(<Home />);

    const linkedinLink = getAllByRole('link');
    expect(linkedinLink[0].getAttribute('href')).toBe(
      'https://www.linkedin.com/in/jesus-enrique-ul',
    );

    expect(linkedinLink[1].getAttribute('href')).toBe('mailto:contactojesusenriqueul@gmail.com');

    expect(linkedinLink[2].getAttribute('href')).toBe('https://github.com/SAW1518');
  });

  it('should call copy function with correct arguments when copy button is clicked', () => {
    const writeTextMock = vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue();

    const { getAllByRole } = render(<Home />);

    const parentElement = getAllByRole('button')[0] as unknown as HTMLButtonElement;

    if (parentElement) {
      fireEvent.click(parentElement);
    }

    expect(writeTextMock).toHaveBeenCalledWith('contactojesusenriqueul@gmail.com');
  });
});
