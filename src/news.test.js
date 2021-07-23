import { render, screen } from '@testing-library/react';
import News from './news.js'

test('render headline1', () => {
  render(<News />);
  const headlineElement = screen.getByText("This is a headline");
  expect(headlineElement).toBeInTheDocument();
});

test('render headline2 from an API', () => {
    render(<News />);
    const apiElement = screen.getByTitle("apiHead");
    expect(apiElement).toBeInTheDocument();
  });


test('render image1 from an API', () => {
    render(<News />);
    const apiElement = screen.getByAltText("image1");
    expect(apiElement).toBeInTheDocument();
});
