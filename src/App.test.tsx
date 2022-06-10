import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
// the purpose of this test to ensure correct rendering of the component.
// It;s called testing unit.
// this is called a test suit.
test('renders sword art gamers header', () => {
  render(<App />);
  const linkElement = screen.getByText(/sword art gamers/i);
  expect(linkElement).toBeInTheDocument();
});
