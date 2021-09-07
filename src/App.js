// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    
    return (
      <div>
        <Router>
        <Navbar />
          <Switch>
            <Route exact path="/"> <News key="general" title='mytitle' category="general" /></Route>
            <Route exact path="/Business"> <News key="business" title='mytitle' category="business" /></Route>
            <Route exact path="/entertainment"> <News key="entertainment" title='mytitle' category="entertainment" /></Route>
            <Route exact path="/health"> <News key="health" title='mytitle' category="health" /></Route>
            <Route exact path="/science"> <News key="science" title='mytitle' category="science" /></Route>
            <Route exact path="/sports"> <News key="sports" title='mytitle' category="sports" /></Route>
            <Route exact path="/technology"> <News key="technology" title='mytitle' category="technology" /></Route>
            <Route exact path="/science"> <News key="science" title='mytitle' category="science" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
