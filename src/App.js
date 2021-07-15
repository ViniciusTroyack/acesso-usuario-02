import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Company from './pages/company';
import Customer from './pages/customer';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/company/:id">
            <Company />
          </Route>
          <Route exact path="/customer/:id">
            <Customer />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
