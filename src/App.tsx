import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Buyflow, { ProductIds } from './buyflow/Buyflow'
import Acknowledgement from './buyflow/Acknowledgement'

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
          <Route path="/buy/insurance_design">
            <Buyflow productId={ProductIds.designIns} />
          </Route>
          <Route path="/purchased=dev_ins">
            <Acknowledgement productId={ProductIds.devIns} />
          </Route>
          <Route path="/purchased=design_ins">
            <Acknowledgement productId={ProductIds.designIns} />
          </Route>
          <Route path="/">
            <p>
              Welcome to Getsafe. <br />
              Get started with the insurance(s) of your choice!
            </p>
            <Link to="/buy/insurance_dev">Developer Insurance</Link>
            <br />
            <Link to="/buy/insurance_design">Designer Insurance</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
