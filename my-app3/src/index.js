import { Router, Route, browserHistory, IndexRoute  } from 'react-router'

import ReactDOM from 'react-dom';

import  component1 from './components/component1';
import  component2 from './components/component2';
import  component3 from './components/component3';
import App from './App';
import React, { Component } from 'react';

ReactDOM.render((
  <Router history={browserHistory}>
      <Route path="/" component = {App}>
         <IndexRoute component = {component1} />
         <Route path = "home" component = {component1} />
         <Route path = "about" component = {component2} />
         <Route path = "contact" component = {component3} />
      </Route>
   </Router>),
  document.getElementById('root')
);
