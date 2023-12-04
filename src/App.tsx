import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import Buyflow, { ProductIds } from './buyflow/BuyFlow'
import LandingPage from './Landing/LandingPage'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/buy/insurance_dev">
            <Buyflow productId={ProductIds.devIns} />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
