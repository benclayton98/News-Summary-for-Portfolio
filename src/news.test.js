import { render, screen } from '@testing-library/react';
import News from './news.js'

test('render headline1', () => {
  render(<News />);
  const submitElement = screen.getByText("This is a headline");
  expect(submitElement).toBeInTheDocument();
});

test('render headline2 from an API', () => {
    render(<News />);
    const submitElement = screen.getByText('Link between diabetes and coronavirus infections');
    expect(submitElement).toBeInTheDocument();
  });