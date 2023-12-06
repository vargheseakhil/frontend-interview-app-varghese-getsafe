import React, { FC, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import SummaryStep from './SummaryStep';
import { 
  ProductIds,
  PRODUCT_IDS_TO_NAMES,
  insuranceStepIdentification,
  insuranceStepDetails 
} from '../data';

const Buyflow: FC = () => {
  const { productId } = useParams<{ productId: ProductIds }>();

  // Retrieve the steps for the provided productId
  const stepList = insuranceStepIdentification[productId];

  const [collectedData, updateData] = useState({});
  const [currentStepIndex, setStepIndex] = useState(0);


  // Check if the productId is valid, if not, redirect to initial page
  if (!Object.values(ProductIds).includes(productId)) {
    return <Redirect to="/" />;
  }

  const getStepCallback = () => (field: string, value: any) => {
    updateData(prevData => ({ ...prevData, [field]: value }));
    setStepIndex(currentStepIndex + 1);
  }

  // Get the component for the current step
  const currentStep = insuranceStepDetails[stepList[currentStepIndex]];
  const CurrentComponent = currentStep && currentStep[0]?.component;

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[productId]}</h4>
          {currentStepIndex >= stepList.length ? (
            <SummaryStep collectedData={collectedData} productId={productId} />
          ) : (
            <CurrentComponent cb={getStepCallback()} />
          )}
    </>
  )
}

export default Buyflow;