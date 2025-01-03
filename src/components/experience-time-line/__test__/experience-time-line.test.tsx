import { render, screen } from '@testing-library/react';
import { ExperienceTimeLine } from '../experience-time-line';
import { describe, expect, it, vi } from 'vitest';
import { ExperienceCompanyProps } from 'src/components';

vi.mock('src/components', () => ({
  ExperienceCompany: (props: ExperienceCompanyProps) => (
    <div data-testid="experience-company">{JSON.stringify(props)}</div>
  ),
}));

describe('ExperienceTimeLine Component', () => {
  it('should render the correct number of ExperienceCompany components', () => {
    render(<ExperienceTimeLine />);

    const experienceCompanies = screen.getAllByTestId('experience-company');
    expect(experienceCompanies).toHaveLength(3);

    const firstCompanyProps = JSON.parse(experienceCompanies[0].textContent || '');
    expect(firstCompanyProps.imageAlt).toBe('EPAM System Lopo');
    expect(firstCompanyProps.positionList).toHaveLength(1);

    const secondCompanyProps = JSON.parse(experienceCompanies[1].textContent || '');
    expect(secondCompanyProps.imageAlt).toBe('Luxoft System Lopo');
    expect(secondCompanyProps.positionList).toHaveLength(1);

    const thirdCompanyProps = JSON.parse(experienceCompanies[2].textContent || '');
    expect(thirdCompanyProps.imageAlt).toBe('M0SB1T System Lopo');
    expect(thirdCompanyProps.positionList).toHaveLength(3);
  });
});
