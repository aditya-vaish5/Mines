import React, { Component } from 'react';
import NavBar from './components/NavBar.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Rules from './components/Rules'
import Game from './components/Game'
import About from './components/About'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/game' component={Game} />
            <Route path='/rules' component={Rules} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
