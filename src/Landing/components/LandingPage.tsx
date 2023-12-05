import React from 'react'
import { Link } from 'react-router-dom'
import { ProductIds } from '../../buyflow/components/BuyFlow'

const LandingPage: React.FC = () => {
  return (
    <>
        <p>Welcome to Getsafe's</p>
        <p>Developer Insurance</p>
        <Link to={`/buy/${ProductIds.devIns}`}>Get started!</Link>
        <p>Designer Insurance</p>
        <Link to={`/buy/${ProductIds.uxIns}`}>Get started!</Link>
    </>
  )
}

export default LandingPage
