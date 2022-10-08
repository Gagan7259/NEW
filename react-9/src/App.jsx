import React, { Component } from 'react'
import Navbar from './NAVBAR/Navbar'
import Routing from './Userdata/Routing'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/user" element={<Routing />} />
            
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App
