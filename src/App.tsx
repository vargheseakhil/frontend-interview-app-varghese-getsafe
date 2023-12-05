import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import { Buyflow } from './buyflow'
import { LandingPage } from './landing'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/buy/:projectId">
            <Buyflow/>
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
