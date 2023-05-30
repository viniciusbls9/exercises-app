import { render, screen } from '@testing-library/react';
import Card from './';
import { Activity } from '@phosphor-icons/react';

describe('Card', () => {
  it('renders the icon and text', () => {
    const mockIcon = <Activity alt="Card Icon" />;
    const mockText = 'Card Text';

    const { container } = render(<Card icon={mockIcon} text={mockText} />);

    const textElement = screen.getByText(mockText);

    expect(textElement).toBeInTheDocument();
    expect(container).toMatchSnapshot()
  });
});