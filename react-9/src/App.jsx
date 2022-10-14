import React, { Component } from 'react'
import Navbar from './NAVBAR/Navbar'
import ContactApp2 from './contact2/ContactApp2'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/contact" element={<ContactApp2 />} />
            
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App
