import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_IDS_TO_NAMES, ProductIds } from '../../buyflow';

const LandingPage: React.FC = () => {
  const [selectedInsurance, setSelectedInsurance] = useState<ProductIds>(ProductIds.devIns);

  const handleInsuranceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedInsurance(event.target.value as ProductIds);
  };

  return (
    <>
      <p>Welcome to Getsafe's
      <select value={selectedInsurance} onChange={handleInsuranceChange}>
        {Object.entries(PRODUCT_IDS_TO_NAMES)?.map(([productId, productName]) => (
          <option key={productId} value={productId}>
            {productName}
          </option>
        ))}
      </select>
      </p>
      <Link to={`/buy/${selectedInsurance}`}>Get started!</Link>
    </>
  );
};

export default LandingPage;
