import React from 'react'
import { Link } from 'react-router-dom'
import { ProductIds } from './BuyFlow'

interface SummaryStepProps {
  collectedData: {
    email: string
    age: number,
    name?: string
  },
  projectId: ProductIds
}

const SummaryStep: React.FC<SummaryStepProps> = ({collectedData, projectId}) => {
  return (
    <>
      <p>Email: {collectedData.email}</p>
      <p>Age: {collectedData.age}</p>
      {
        collectedData.name && <p>Name: {collectedData.name}</p>
      }
      <div>
        <Link to={`/purchased=${projectId}`}>Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
