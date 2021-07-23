import { render, screen } from '@testing-library/react';


test('render headline1', () => {
  const submitElement = screen.getByLabelText("This is a headline");
  expect(submitElement).toBeInTheDocument();
});