import React, { Component } from 'react'
import Navbar from './NAVBAR/Navbar'
import User from './Userdata/User'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/user" element={<User />} />
            
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App
