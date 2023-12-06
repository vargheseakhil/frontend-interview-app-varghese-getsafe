import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EmailStep from '../EmailStep';

describe('EmailStep Component', () => {
  let mockCallback;

  beforeEach(() => {
    mockCallback = jest.fn();
    render(<EmailStep cb={mockCallback} />);
  });

  test('renders Email Step', () => {
    const emailInputElement = screen.getByLabelText('Email:');
    const nextButton = screen.getByText('Next');
    expect(emailInputElement).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  test('shows mandatory error when clicking Next without entering data', () => {
    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
  
    const errorElement = screen.getByText('Email is required');
    expect(errorElement).toBeInTheDocument();
    expect(mockCallback).not.toHaveBeenCalled();
  });

  test('shows invalid error when clicking Next with invalid email data', () => {
    const emailInputElement = screen.getByLabelText('Email:');
    fireEvent.change(emailInputElement, { target: { value: 'test.com' } });
    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
  
    const errorElement = screen.getByText('Please enter a valid email address');
    expect(errorElement).toBeInTheDocument();
    expect(mockCallback).not.toHaveBeenCalled();
  });

  test('invokes callback when clicking Next with valid data', () => {
    const emailInputElement = screen.getByLabelText('Email:');
    fireEvent.change(emailInputElement, { target: { value: 'test@example.com' } });

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
  
    expect(mockCallback).toHaveBeenCalledWith('email', 'test@example.com');
  });
});
