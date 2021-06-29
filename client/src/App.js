import React from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
//import PrivateRoute from './components/PrivateRoute';
// eslint-disable-next-line no-unused-vars
import { AccountCreation, Dashboard, Details, Login, PastInspections, NoMatch } from './pages';
import './App.css';



function App() {
  // return (
  //   <Router basename='/'>
  //     <Switch>
  //       <Route exact path={['/', '/login']}>
  //         <Login />
  //       </Route>
  //       <PrivateRoute exact path='/dashboard'>
  //         <Dashboard />
  //       </PrivateRoute>
  //       <PrivateRoute exact path='/create-account'>
  //         <AccountCreation />
  //       </PrivateRoute>
  //       <PrivateRoute exact path='/details:id'>
  //         <Details />
  //       </PrivateRoute>
  //       <PrivateRoute exact path='/past-inspections'>
  //         <PastInspections />
  //       </PrivateRoute>
  //       <Route path='*'>
  //         <NoMatch />
  //       </Route>
  //     </Switch>
  //   </Router>
  // );

  // used only for dev purposes
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/login']}>
          <Login />
          <Link to="/dashboard" >Click to go to Dashboard</Link>
        </Route>
        <Route exact path='/dashboard'>
          <Dashboard />
        </Route>
        <Route exact path='/create-account'>
          <AccountCreation />
        </Route>
        <Route exact path='/details:id'>
          <Details />
        </Route>
        <Route exact path='/past-inspections'>
          <PastInspections />
        </Route>
        {/* <Route path='*'>
          <NoMatch />
        </Route> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App;
