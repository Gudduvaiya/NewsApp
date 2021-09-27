import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import './Components/Font.css'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class App extends Component {
  
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  apikey=process.env.REACT_APP_NEWS_API
  render() {
  
    return (
      <div>
      <Router>
      <LoadingBar
        color='green'
        progress={this.state.progress}
        height={5}
      />
      <Navbar/>
        {/* <h1>Hello</h1> */}
        
        <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} apikey={this.apikey} key="general" country="in" category="general"/></Route>
          <Route exact path="/ADP-Special"><News setProgress={this.setProgress} apikey={this.apikey} key="general" country="in" category="general"/></Route>
          <Route exact path="/Science"><News setProgress={this.setProgress} apikey={this.apikey} key="science" country="in" category="science"/></Route>
          <Route exact path="/Business"><News setProgress={this.setProgress} apikey={this.apikey} key="business" country="in" category="business"/></Route>
          <Route exact path="/Entertainment"><News setProgress={this.setProgress } apikey={this.apikey} key="entertainment" country="in" category="entertainment"/></Route>
          <Route exact path="/Health"><News setProgress={this.setProgress} apikey={this.apikey} key="health" country="in" category="health"/></Route>
          <Route exact path="/Sports"><News setProgress={this.setProgress} apikey={this.apikey} key="sports" country="in" category="sports"/></Route>
          <Route exact path="/Technology"><News setProgress={this.setProgress} apikey={this.apikey} key="technology" country="in" category="technology"/></Route>
          <Route exact path="/about"><News setProgress={this.setProgress} apikey={this.apikey} key="general" country="in" category="general"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

export default App
