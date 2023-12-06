import React from 'react';
import { Link } from 'react-router-dom';
import { ProductIds, insuranceStepDetails } from '../data';

interface SummaryStepProps {
  collectedData: Record<string, string | number>
  productId: ProductIds;
}

const SummaryStep: React.FC<SummaryStepProps> = ({ collectedData, productId }) => {
  return (
    <>
      {Object.entries(collectedData).map(([key, value]) => 
        value && <p key={key}> 
          <span className='summary-label'>{insuranceStepDetails[key][0]?.title}</span> : {value}
        </p> // Only show if value exists
      )}
      <div>
        <Link to={`/purchased=${productId}`}>Purchase</Link>
      </div>
    </>
  );
}

export default SummaryStep;
