import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './scss/main.scss';
import Splash from './components/Splash';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route path="/" exact component={Splash} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
