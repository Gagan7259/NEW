import React, { Component } from 'react'

class Message extends Component {
  state = {
    message: 'hello good morning',
  
  }
  /*  gmHandler=()=>{
      this.setState({message:"good morning" })
    } 
    gaHandler=()=>{
this.setState({message:"good afternoon"})
    }
     gnHandler=()=>{
      this.setState({message:"good night"})
     } */
  updateHandler = (value) => {
    this.setState({ message: value, })
  }
  render() {
    return (
      <div>
        <h3>message:{this.state.message}</h3>
        <button
          onClick={this.updateHandler.bind(this, 'rty')}
          className="btn btn-success"
        >
          GM
        </button>{' '}
        <br />
        <br />{' '}
        <button
          onClick={this.updateHandler.bind(this, 456 )}
          className="btn btn-danger"
        >
          GA
        </button>
        <br />
        <br />{' '}
        <button
          onClick={this.updateHandler.bind(this, 345 )}
          className="btn btn-info"
        >
          GN
        </button>
        <br />
      </div>
    )
  }
}

export default Message
