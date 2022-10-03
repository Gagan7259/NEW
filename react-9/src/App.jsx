import React, { Component } from 'react'
import Navbar from './comonents/Navbar'
import User from './comonents/User'
 class App extends Component {
  constructor(props){
    super(props)
  }


  render() {
    return (
      <div>
        <Navbar/>
<User/>
      </div>
    )
  }
}

export default App