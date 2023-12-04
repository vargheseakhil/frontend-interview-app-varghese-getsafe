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
      <div>Email: {collectedData.email}</div>
      <div>Age: {collectedData.age}</div>
      {
        collectedData.name && <div>Name: {collectedData.name}</div>
      }
      <div>
        <Link to={`/purchased=${projectId}`}>Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
