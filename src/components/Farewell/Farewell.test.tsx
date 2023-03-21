import { render, screen } from '@testing-library/react';
import Farewell from './Farewell';

describe('Farewell', () => {
  test('should be rendered', () => {
    render(<Farewell />);
    const textElement = screen.getByText('Bye');
    expect(textElement).toBeInTheDocument();
  });
  test('renders with a name sent as a prop', () => {
    render(<Farewell name="Kotesh" />);
    const combinedTextElement = screen.getByText('Bye Kotesh');
    expect(combinedTextElement).toBeInTheDocument();
  });
});
