import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_IDS_TO_NAMES } from '../../buyflow';

const LandingPage: React.FC = () => {
  return (
    <>
      <h2>Welcome to Getsafe's</h2>
      <div className="plan-cards-container">
        {Object.entries(PRODUCT_IDS_TO_NAMES).map(([productId, productName]) => (
          <div className="plan-card" key={productId}>
            <p>{productName}</p>
            <Link to={`/buy/${productId}`} className="get-started-button">
              Get started!
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default LandingPage;