import { render } from '@testing-library/react';
import { Skills, SkillsProps } from 'src/components';
import { describe, expect, it } from 'vitest';

describe('Skills Component', () => {
  const defaultProps: SkillsProps = {
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
  };

  it('should render elements', () => {
    const { getByText } = render(<Skills {...defaultProps} />);

    defaultProps.skills?.forEach((skill) => {
      expect(getByText(skill)).toBeDefined();
    });
  });
});
