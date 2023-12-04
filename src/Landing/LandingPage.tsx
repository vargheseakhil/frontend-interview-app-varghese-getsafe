import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage: React.FC = () => {
  return (
    <>
        <p>Welcome to Getsafe's</p>
        <p>Developer Insurance</p>
        <Link to="/buy/dev_ins">Get started!</Link>
        <p>Designer Insurance</p>
        <Link to="/buy/ux_ins">Get started!</Link>
    </>
  )
}

export default LandingPage
