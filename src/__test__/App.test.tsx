import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

vi.mock('src/pages', () => ({
  Home: () => <div>Home Component</div>,
}));

describe('App Component', () => {
  it('should render the Home component wrapped in AlertProviders', () => {
    render(<App />);
    expect(screen.getByText('Home Component')).toBeDefined();
  });
});
