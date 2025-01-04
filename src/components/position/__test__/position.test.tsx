import { render } from '@testing-library/react';
import { Position, PositionProps } from 'src/components';
import { describe, expect, it } from 'vitest';

describe('Position Component', () => {
  const defaultProps: PositionProps = {
    position: 'Software Engineer - JavaScript',
    companyNameAndTime: 'EPAM Systems · Full-time',
    dates: 'Mar 2024 - Present · 10 months',
    location: 'Guadalajara, Jalisco, México · Remote',
    positionDescription: 'Frontend developer for Expedia group Login and Profile Teams',
    skills: [
      'Javascript',
      'Typescript',
      'React',
      'Jest',
      'Cypress',
      'Github actions',
      'Github',
      'Node.js',
      'REST APIs',
    ],
    images: ['/UP.png', '/login.png', '/section-management.png', '/delete.png'],
  };
  it('should render elements', () => {
    const { getByText, getAllByRole } = render(<Position {...defaultProps} />);

    expect(getByText(defaultProps.position)).toBeDefined();
    expect(getByText(defaultProps.companyNameAndTime)).toBeDefined();
    expect(getByText(defaultProps.dates)).toBeDefined();
    expect(getByText(defaultProps.location)).toBeDefined();
    expect(getByText(defaultProps.positionDescription)).toBeDefined();
    defaultProps.skills?.forEach((skill) => {
      expect(getByText(skill)).toBeDefined();
    });
    getAllByRole('img').forEach((img, index) => {
      expect(img.getAttribute('src')).toBe(defaultProps.images?.[index]);
    });
  });
});
