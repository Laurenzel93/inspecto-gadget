import React from 'react';
import { Switch, Route, HashRouter as Router} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { AccountCreation, Dashboard, Details, Login, PastInspections, NoMatch } from './pages';
import './App.css';



function App() {
  return (
    <Router basename='/'>
        <Switch>
          <Route exact path={['/', '/login']}>
            <Login />
          </Route> 
          <PrivateRoute exact path='/dashboard'> 
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path='/create-account'>
            <AccountCreation />
          </PrivateRoute>
          <PrivateRoute exact path='/details:id'>
            <Details />
          </PrivateRoute>
          <PrivateRoute exact path='/past-inspections'>
            <PastInspections/>
          </PrivateRoute> 
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
