import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Calculator from './components/Calculator';
import Login from './components/Login';

import './custom.css'
import { BrowserRouter } from 'react-router-dom';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <BrowserRouter>
          <Route exact path='/' component={Calculator} />
          <Route path="/login" component={Login}></Route>
        </BrowserRouter>
      </Layout>
    );
  }
}
