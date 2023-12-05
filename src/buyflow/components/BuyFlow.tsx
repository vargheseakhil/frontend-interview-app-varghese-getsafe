import React, { useState } from 'react'
import AgeStep from './AgeStep'
import EmailStep from './EmailStep'
import SummaryStep from './SummaryStep'
import { useParams } from 'react-router-dom'
import FullNameStep from './FullNameStep'
import { PRODUCT_IDS_TO_NAMES, ProductIds } from '../data/ProductTypes'

const Buyflow: React.FC = () => {
  const { projectId } = useParams<{ projectId: ProductIds }>();
  const [currentStep, setStep] = useState('email')
  const [collectedData, updateData] = useState({
    email: '',
    age: 0,
    name: ''
  })
  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value })
    setStep(nextStep)
  }
  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[projectId]}</h4>
      {(currentStep === 'email' && <EmailStep cb={getStepCallback('age')} />) ||
        (currentStep === 'age' && (
          <AgeStep cb={getStepCallback(projectId === 'ux_ins' ? 'name' : 'summary')} />
        )) ||
        (currentStep === 'name' && (
          <FullNameStep cb={getStepCallback('summary')} />
        )) || 
        (currentStep === 'summary' && (
          <SummaryStep collectedData={collectedData} projectId={projectId} />
        ))}
    </>
  )
}

export default Buyflow