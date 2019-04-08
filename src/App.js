import React, { Component } from 'react';
import './App.css';
import {Route,Router,Switch} from 'react-router-dom';
import { historyFV } from './helper/history';
import { ExplorerView } from './view/explorer.view';
import '../node_modules/ol/ol.css';

class App extends Component {
  render() {
    return (
      <Router history={historyFV}>
        <Switch>
          <Route exact path='/explorer' component={ExplorerView} />
        </Switch>
      </Router>
    );
  }
}

export default App;
