import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import './Components/Font.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <Navbar/>
        {/* <h1>Hello</h1> */}
        
        <Switch>
          <Route exact path="/"><News key="general" country="in" category="general"/></Route>
          <Route exact path="/ADP-Special"><News key="general" country="in" category="general"/></Route>
          <Route exact path="/Science"><News key="science" country="in" category="science"/></Route>
          <Route exact path="/Business"><News key="business" country="in" category="business"/></Route>
          <Route exact path="/Entertainment"><News key="entertainment" country="in" category="entertainment"/></Route>
          <Route exact path="/Health"><News key="health" country="in" category="health"/></Route>
          <Route exact path="/Sports"><News key="sports" country="in" category="sports"/></Route>
          <Route exact path="/Technology"><News key="technology" country="in" category="technology"/></Route>
          <Route exact path="/about"><News key="general" country="in" category="general"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

export default App
