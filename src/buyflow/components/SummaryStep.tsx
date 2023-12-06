import React from 'react';
import { Link } from 'react-router-dom';
import { ProductIds, insuranceStepDetails } from '../data';

interface SummaryStepProps {
  collectedData: Record<string, string | number>
  productId: ProductIds;
}

const SummaryStep: React.FC<SummaryStepProps> = ({ collectedData, productId }) => {
  return (
    <div className="summary-container">
      <div className="summary-list">
        {Object.entries(collectedData).map(([key, value]) => 
          value && (
            <div key={key} className="summary-item">
              <span className='summary-label'>{insuranceStepDetails[key][0]?.title}</span> : {value}
            </div>
          )
        )}
      </div>
      <div>
        <Link className="get-started-button" to={`/purchased=${productId}`}>Purchase</Link>
      </div>
    </div>
  );
};

export default SummaryStep;
