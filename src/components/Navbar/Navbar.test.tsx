import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Menu from './';

describe('Menu', () => {
  it('renders logo and links', () => {
    render(<Menu />);

    // Check if the logo is rendered
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();

    // // Check if the links are rendered
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();

    const exercisesLink = screen.getByText('Exercises');
    expect(exercisesLink).toBeInTheDocument();
  });
});
