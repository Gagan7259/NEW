import React, { Component } from 'react'

class Bind extends Component {
  state = {
    salary: 30000,
  }
  buttonHandler = (value) => {
    this.setState({ salary: 30000 + value })
  }
  render() {
    return (
      <div>
        <h3>hike:{this.state.salary}</h3>
        <br/><button className='btn btn-info' onClick={this.buttonHandler.bind(this, 50000)}>hike 50k</button><br/><br/><br/>
        <br/><button className='btn btn-success' onClick={this.buttonHandler.bind(this, 100000)}>
          hike 100k
          </button><br/>
          <br/><br/><button className='btn btn-danger' onClick={this.buttonHandler.bind(this, 0)}>hike 0k</button>
      </div>
    )
  }
}

export default Bind
