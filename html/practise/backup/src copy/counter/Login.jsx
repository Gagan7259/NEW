import React, { Component } from 'react'
class Login extends Component {
  state = {
    isLogin: false,
    msg: '',
  }
  loginHandler=()=>{
    this.setState({islogin:true,msg:"welcome"})
  }
  logoutHandler=()=>{
    this.setState({islogin:true,msg:"run"})
  }
  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">LOGIN EXAMPLE</div>
                <div className="card-body">
                  {this.state.islogin}
                   <button onClick={this.loginHandler}>login</button> ?(
                </div>
                :
                {' '}
                <div>
                  <button onClick={this.logoutHandler}>logout</button>
                   )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
