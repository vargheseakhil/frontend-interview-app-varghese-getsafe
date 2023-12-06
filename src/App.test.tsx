import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders insurance app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Getsafe's/i);
  expect(linkElement).toBeInTheDocument();
});
