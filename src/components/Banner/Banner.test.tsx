import { render, screen } from '@testing-library/react';
import Banner from '.';

describe('Banner', () => {
  it('renders the title and subtitle', () => {
    render(<Banner />);
    const titleElement = screen.getByText('Find your favorite exercises');
    const subtitleElement = screen.getByText('Discover amazing content and more');
    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });
});
