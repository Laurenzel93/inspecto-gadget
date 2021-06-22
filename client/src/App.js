import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { AccountCreation, Dashboard, Details, Login, PastInspections, NoMatch } from './pages';
import './App.css';



function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path={['/', '/login']} component={Login} />
          <PrivateRoute exact path='/dashboard' component={ Dashboard } />
          <PrivateRoute exact path='/create-account' component={ AccountCreation } />
          <PrivateRoute path='/details:id' component={ Details } />
          <PrivateRoute exact path='/past-inspections' component={ PastInspections } />
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
