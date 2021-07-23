import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DFA Github link', () => {
  render(<App />);
  const linkElement = screen.getByText('The Clayton Digest | The Clayton Digest | The Clayton Digest | The Clayton Digest | The Clayton Digest | The Clayton Digest | The Clayton Digest | The Clayton Digest | The Clayton Digest | The Clayton Digest | The Clayton Digest | The Clayton Digest |');
  expect(linkElement).toBeInTheDocument();
});

