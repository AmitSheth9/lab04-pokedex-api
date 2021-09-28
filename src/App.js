
import React, { Component } from 'react'
import { BrowserRouter as Router, 
  Route, Switch, } from 'react-router-dom';
import './App.css';
import SearchPage from './SearchPage';
import HomePage from './HomePage';
import DetailsPage from './DetailsPage';

export default class App extends Component {
  
  render() {
    
  
  return (
<div>
    <Router>
      <Switch>
        <Route
        path='/'
        exact
        render={(routerProps) => <HomePage {...routerProps} />}
        />
        <Route
        path='/pokemon'
        exact
        render={(routerProps) => <SearchPage {...routerProps}  />}
        />
        <Route
        path='/pokemon/:id'
        exact
        render={(routerProps) => <DetailsPage {...routerProps} />}
        />
      </Switch>
    </Router>
    
</div>

  );
  }
}