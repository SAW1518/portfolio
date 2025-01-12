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
    images: [
      {
        companyName: 'EPAM Systems',
        src: '/login.png',
        titule: 'Working in sign in and sign up in Expedia grup',
        urls: [
          'https://www.expedia.com/login',
          'https://www.vrbo.com/login?enable_login=true',
          'https://www.hoteles.com/login',
          'https://www.wotif.com/login',
        ],
        descripcion: 'Sign in no required *',
      },
      {
        companyName: 'EPAM Systems',
        src: '/UP.png',
        titule: 'Working in account-profile in Expedia grup',
        urls: [
          'https://www.expedia.com/account',
          'https://www.vrbo.com/account',
          'https://www.hoteles.com/account',
          'https://www.wotif.com/account',
        ],
        descripcion: 'Sign in required *',
      },
      {
        companyName: 'EPAM Systems',
        src: '/section-management.png',
        titule: 'Working in Session management in Expedia grup',
        urls: ['https://www.expedia.com/account-security?dvc_history=true'],
        descripcion: 'Sign in required *',
      },
      {
        companyName: 'EPAM Systems',
        src: '/delete.png',
        titule: 'Working in Delete account in Expedia grup',
        urls: [
          'https://www.expedia.com/user/delete',
          'https://www.vrbo.com/user/delete',
          'https://www.hoteles.com/user/delete',
          'https://www.wotif.com/user/delete',
        ],
        descripcion: 'Sign in required *',
      },
    ],
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
