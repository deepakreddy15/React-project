import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';

ReactDOM.render(<Router history={hashHistory}>
	<Route path="/" component={App}>
		<IndexRoute component={App}></IndexRoute>
		<Route path="/header" component={Header}></Route>
		<Route path="/footer" component={Footer}></Route>
		<Route path="/body" component={Body}></Route>
	</Route>

	</Router>
  ,
  document.getElementById('root')
);
