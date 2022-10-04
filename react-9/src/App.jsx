import React, { Component } from 'react'
import Navbar from './comonents/Navbar'
import Form from './form/Form'
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Form/>
      </div>
    )
  }
}

export default App
