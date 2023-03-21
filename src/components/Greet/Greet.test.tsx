import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test.skip('Greet should be rendered', () => {
  render(<Greet />);
  const textElement = screen.getByText('Hello');
  expect(textElement).toBeInTheDocument();
});
test.skip('Greet renders with a name sent as a prop', () => {
  render(<Greet name="Kotesh" />);
  const combinedTextElement = screen.getByText('Hello Kotesh');
  expect(combinedTextElement).toBeInTheDocument();
});
