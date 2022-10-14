import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="/" className="navbar-brand">
            React Routing Example
          </Link>
          <div className="ml-auto">
            <ul className="navbar-nav">
              <li className="nav-list">
                <Link className="nav-link" to="/contact">
                  ContactApp
                </Link>
              </li>
              
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
