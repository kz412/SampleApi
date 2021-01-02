import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';

import './custom.css'
import { BrowserRouter } from 'react-router-dom';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <BrowserRouter>
          <Route exact path='/' component={Home} />
        </BrowserRouter>
      </Layout>
    );
  }
}
