import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FullNameStep from '../FullNameStep';

describe('FullNameStep Component', () => {
  let mockCallback;

  beforeEach(() => {
    mockCallback = jest.fn();
    render(<FullNameStep cb={mockCallback} />);
  });

  test('renders FullName Step with two input fields', () => {
    const firstNameInputElement = screen.getByLabelText('First Name:');
    const lastNameInputElement = screen.getByLabelText('Last Name:');
    
    expect(firstNameInputElement).toBeInTheDocument();
    expect(lastNameInputElement).toBeInTheDocument();
  });

  test('shows error when clicking Next without entering both names', () => {
    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
  
    const errorElement = screen.getByText('Please enter both first and last names');
    expect(errorElement).toBeInTheDocument();
    expect(mockCallback).not.toHaveBeenCalled();
  });

  test('invokes callback when clicking Next with both names entered', () => {
    const firstNameInputElement = screen.getByLabelText('First Name:');
    const lastNameInputElement = screen.getByLabelText('Last Name:');

    fireEvent.change(firstNameInputElement, { target: { value: 'John' } });
    fireEvent.change(lastNameInputElement, { target: { value: 'Smith' } });

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
  
    expect(mockCallback).toHaveBeenCalledWith('name', 'John Smith');
  });
});
