import React, { Component } from 'react';
import './App.css';
import {Route,Router,Switch} from 'react-router-dom';
import { historyFV } from './helper/history';
import { ExplorerView } from './view/explorer.view';
import '../node_modules/ol/ol.css';
import {TestView} from './view/test'
import {Test2View} from './view/test2'
import { SelectOptionsView } from './view/selectOptions';

class App extends Component {
  render() {
    return (
      <Router history={historyFV}>
        <Switch>
          <Route exact path='/' component={SelectOptionsView} />
          <Route path='/explorer' component={ExplorerView} />
          <Route path='/test' component={TestView} />
          <Route path='/test2' component={Test2View} />
        </Switch>
      </Router>
    );
  }
}

export default App;
