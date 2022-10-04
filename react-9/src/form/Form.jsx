import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <form >
                <div className='form-group '>
                  <label>EMAIL:</label>
                  <input type="text" className='form-control' />
                </div>
                <div className='form-group'>
                  <label>PASSWORD</label>
                  <input type="password" className='form-control' />
                </div>
                <input type="submit" value="LOGIN" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Form
