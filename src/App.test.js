import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DFA Github link', () => {
  render(<App />);
  const linkElement = screen.getByText('News Summary Challenge');
  expect(linkElement).toBeInTheDocument();
});

