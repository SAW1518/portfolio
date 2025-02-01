import { render, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Home } from 'src/pages';
import { AllContextProvidersMock } from 'src/mocks';
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
    const { getByRole, getAllByText } = render(
      <AllContextProvidersMock>
        <Home />
      </AllContextProvidersMock>,
    );

    // Check main heading
    expect(getByRole('heading', { name: /jesus enrique uribe lopez/i })).toBeDefined();

    // Check subheading
    expect(getAllByText('Software Engineer - JavaScript/TypeScript').at(0)).toBeDefined();

    // Check skills section
    expect(getByRole('heading', { name: /skills/i })).toBeDefined();

    // Check contact information section
    expect(getByRole('heading', { name: /contact information/i })).toBeDefined();

    // Check experience section
    expect(getAllByText('Experience').at(1)).toBeDefined();
  });

  it('should render social links correctly', () => {
    const { getAllByRole } = render(<Home />);

    const linkedinLink = getAllByRole('link');
    expect(linkedinLink[0].getAttribute('href')).toBe('#about_seccion');

    expect(linkedinLink[1].getAttribute('href')).toBe('#skills_seccion');

    expect(linkedinLink[2].getAttribute('href')).toBe('#contact_seccion');
  });

  it('should call copy function with correct arguments when copy button is clicked', () => {
    const writeTextMock = vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue();

    const { getAllByRole } = render(
      <AllContextProvidersMock>
        <Home />
      </AllContextProvidersMock>,
    );

    const parentElement = getAllByRole('button')[0] as unknown as HTMLButtonElement;

    if (parentElement) {
      fireEvent.click(parentElement);
    }

    expect(writeTextMock).toHaveBeenCalledWith('contactojesusenriqueul@gmail.com');
  });
});
