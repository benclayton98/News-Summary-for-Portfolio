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
    const imgElement = screen.getByAltText("image1");
    expect(imgElement).toBeInTheDocument();
});

test('render 2 more headlines and images from an API', () => {
    render(<News />);
    const apiElement2 = screen.getByTitle("apiHead2");
    const apiElement3 = screen.getByTitle("apiHead3");
    const imgElement2 = screen.getByAltText("image2");
    const imgElement3 = screen.getByAltText("image3");
    expect(apiElement2).toBeInTheDocument();
    expect(apiElement3).toBeInTheDocument();
    expect(imgElement2).toBeInTheDocument();
    expect(imgElement3).toBeInTheDocument();
});