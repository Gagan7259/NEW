import React, { Component } from 'react'

class Form extends Component {
  state={
    email:"",
    password:""
  }
 updateHandler=(event)=>{
  this.setState({[event.target.name]:event.target.value})
 }

  
  submitHandler=(event)=>{
    event.preventDefault();
    console.log(this.state)
    }
  render() {
    return (
      <div>
        <div className="container">
          <pre>{JSON.stringify(this.state)}</pre>
          <div className="row">
            <div className="col-md-2">
              <form  onSubmit={this.submitHandler}>
                <div className='form-group '>
                  <label>EMAIL:</label>
                  <input type="text" onChange={this.updateHandler} name="email" className='form-control' />
                </div>
                <div className='form-group'>
                  <label>PASSWORD</label>
                  <input type="password" onChange={this.updateHandler} name="password" className='form-control' />
                </div>
                <input type="submit" className='btn btn-success' value="LOGIN" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Form
