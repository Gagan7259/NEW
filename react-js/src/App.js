import React, { Component } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './NAVBAR/Navbar'
import ContactApp from './Contact app/ContactApp'
class App extends Component {
  render() {
    return (
      <div>
<Router>
  <Navbar/>
  <Routes>
    <Route path="/Contact" element={<ContactApp/>}></Route>
  </Routes>
</Router>
      </div>
    )
  }
}

export default App