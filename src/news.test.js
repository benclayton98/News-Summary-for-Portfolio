import { render, screen } from '@testing-library/react';
import News from './news.js'

test('render headline1', () => {
  render(<News />);
  const submitElement = screen.getByText("This is a headline");
  expect(submitElement).toBeInTheDocument();
});