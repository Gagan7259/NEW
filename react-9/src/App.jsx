import React, { Component } from 'react'
import Navbar from './comonents/Navbar'
import Bind from './states/Bind'
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Bind/>
      </div>
    )
  }
}

export default App
