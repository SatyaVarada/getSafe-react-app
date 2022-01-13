import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { ProductIds } from './utilities/enums'
import {
  HOME_DESCRIPTION,
  PRODUCT_IDS_TO_NAMES,
  WELCOME_MESSAGE,
} from './utilities/constants'
import Buyflow from './buyflow/Buyflow'
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
              {WELCOME_MESSAGE}
              <br />
              {HOME_DESCRIPTION}
            </p>
            <Link to="/buy/insurance_dev">
              {PRODUCT_IDS_TO_NAMES[ProductIds.devIns]}
            </Link>
            <br />
            <Link to="/buy/insurance_design">
              {PRODUCT_IDS_TO_NAMES[ProductIds.designIns]}
            </Link>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
