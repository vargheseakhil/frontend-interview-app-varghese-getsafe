import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SummaryStep from '../SummaryStep';
import { ProductIds, insuranceStepDetails } from '../../data';

const collectedDataMock = {
  email: 'test@example.com',
  age: 30,
  name: 'John Doe'
};

const productIdMock = 'dev_ins' as ProductIds; // or any ProductId mock you want to use

describe('SummaryStep Component', () => {
  test('renders Summary Step with collected data', () => {
    render(
      <MemoryRouter>
        <SummaryStep collectedData={collectedDataMock} productId={productIdMock} />
      </MemoryRouter>
    );
    
    const emailElement = screen.getByText(insuranceStepDetails['email'][0]?.title);
    const ageElement = screen.getByText(insuranceStepDetails['age'][0]?.title);
    const nameElement = screen.getByText(insuranceStepDetails['name'][0]?.title);
    const purchaseLink = screen.getByText('Purchase');
    
    expect(emailElement).toBeInTheDocument();
    expect(ageElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(purchaseLink).toBeInTheDocument();
  });

  test('renders Summary Step with correct data values', () => {
    render(
      <MemoryRouter>
        <SummaryStep collectedData={collectedDataMock} productId={productIdMock} />
      </MemoryRouter>
    );
    
    const emailValueElement = screen.getByText(/test@example.com/i);
    const ageValueElement = screen.getByText(/30/i);
    const nameValueElement = screen.getByText(/John Doe/i);
    
    expect(emailValueElement).toBeInTheDocument();
    expect(ageValueElement).toBeInTheDocument();
    expect(nameValueElement).toBeInTheDocument();
  });

  test('renders Purchase link with correct route', () => {
    render(
      <MemoryRouter>
        <SummaryStep collectedData={collectedDataMock} productId={productIdMock} />
      </MemoryRouter>
    );

    const purchaseLink = screen.getByText('Purchase');
    expect(purchaseLink).toHaveAttribute('href', `/purchased=${productIdMock}`);
  });
});
