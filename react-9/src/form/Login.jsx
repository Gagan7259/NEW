import React, { Component } from 'react'
 class Login extends Component {
    state={
        email:"",
    password:""
    }
    

  render() {
    return (
      <div>
        <form>
            <label htmlFor="">Email</label>
            <input type="text" placeholder='EMAIL' /><br/>
            <label htmlFor="">Password</label>
            <input type="password" /><br/>
            <input type="submit" value={login} />
        </form>
      </div>
    )
  }
}

export default Login