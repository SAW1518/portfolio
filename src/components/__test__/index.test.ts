import { describe, it, expect } from 'vitest';
import {
  TitleSection,
  SubTitleLink,
  Alert,
  ExperienceTimeLine,
  ExperienceCompany,
  Skills,
  Position
} from 'src/components';

describe('Reexported modules', () => {
  it('should export TitleSection', () => {
    expect(TitleSection).toBeDefined();
  });
  it('should export SubTitleLink', () => {
    expect(SubTitleLink).toBeDefined();
  });
  it('should export Alert', () => {
    expect(Alert).toBeDefined();
  });
  it('should export ExperienceTimeLine', () => {
    expect(ExperienceTimeLine).toBeDefined();
  });
  it('should export ExperienceCompany', () => {
    expect(ExperienceCompany).toBeDefined();
  });
  it('should export Skills', () => {
    expect(Skills).toBeDefined();
  });
  it('should export Position', () => {
    expect(Position).toBeDefined();
  });
});
