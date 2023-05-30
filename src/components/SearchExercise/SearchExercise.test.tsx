import { render, screen } from '@testing-library/react';
import ExerciseSearch from './';

describe('ExerciseSearch', () => {
  it('renders the text and input field', () => {
    const { container } = render(<ExerciseSearch />);
    const textElement = screen.getByText('Find your exercises');
    const inputElement = screen.getByPlaceholderText('Enter your exercise');
    expect(textElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
});