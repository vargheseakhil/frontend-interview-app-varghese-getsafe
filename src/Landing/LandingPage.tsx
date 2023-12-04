import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage: React.FC = () => {
  return (
    <>
        <p>Welcome to Getsafe's Developer Insurance</p>
        <Link to="/buy/insurance_dev">Get started!</Link>
    </>
  )
}

export default LandingPage
