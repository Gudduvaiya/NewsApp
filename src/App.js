import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'

export class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
        {/* <h1>Hello</h1> */}
        <News/>
      </div>
    )
  }
}

export default App
