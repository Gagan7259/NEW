import React, { Component } from 'react'
class Handler extends Component {
  state = {
    conter: 2
  }
  buttonHandler = () => {
    this.setState({ conter: 2000 })
  }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state.conter)}</pre>
        <button className="btn btn-danger" onClick={this.buttonHandler}>
          click it
        </button>
      </div>
    )
  }
}

export default Handler
