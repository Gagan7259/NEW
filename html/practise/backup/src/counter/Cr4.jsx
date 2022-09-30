import React, { Component } from 'react'
class Cr4 extends Component {
  state = {
    emp_sal: 30000,
  }
  buttonHandler = (value) => {
    this.setState({ emp_sal: 30000 + value })
  }
  render() {
    return (
      <div>
        <h1>employee sal:{this.state.emp_sal}</h1>
        <button onClick={this.buttonHandler.bind(this, 50000)}>hike 50k</button>
        <button onClick={this.buttonHandler.bind(this, 100000)}>
          hike 100k
        </button>
        <button onClick={this.buttonHandler.bind(this, 0)}>hikek</button>
      </div>
    )
  }
}

export default Cr4
