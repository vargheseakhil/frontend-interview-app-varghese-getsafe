import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AgeStep from '../AgeStep';

describe('AgeStep Component', () => {
  let mockCallback;

  beforeEach(() => {
    mockCallback = jest.fn();
    render(<AgeStep cb={mockCallback} />);
  });

  test('renders Age Step', () => {
    const ageInputElement = screen.getByLabelText('Age:');
    const nextButton = screen.getByText('Next');
    expect(ageInputElement).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  test('shows mandatory error when clicking Next without entering age', () => {
    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
  
    const errorElement = screen.getByText('Please enter a valid age');
    expect(errorElement).toBeInTheDocument();
    expect(mockCallback).not.toHaveBeenCalled();
  });

  test('shows error when entering non-numeric value', () => {
    const ageInputElement = screen.getByLabelText('Age:');
    fireEvent.change(ageInputElement, { target: { value: 'abc' } });

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
  
    const errorElement = screen.getByText('Please enter a valid age');
    expect(errorElement).toBeInTheDocument();
    expect(mockCallback).not.toHaveBeenCalled();
  });

  test('invokes callback when clicking Next with valid age', () => {
    const ageInputElement = screen.getByLabelText('Age:');
    fireEvent.change(ageInputElement, { target: { value: '25' } });

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
  
    expect(mockCallback).toHaveBeenCalledWith('age', 25);
  });
});
