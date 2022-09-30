import React, { Component } from 'react';
  class Users1 extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        username: "",
        email: "",
        password: "",
        gender: ""
      },
      users: []
    }
  }


  updateHandler = (event) => {
    // console.log(event);
    // console.log(event.target)

    let newuser = { ...this.state.user }
    newuser[event.target.name] = event.target.value
    console.log(newuser);
    this.setState({ user: newuser })

  }

  loginHandler = (event) => {
    // let newUser={...this.state.user}

    // console.log(newUser)

    event.preventDefault()
    console.log(this.state);
    this.clearForm()

  }
  clearForm = () => {

    this.setState({
      user: {
        username: "",
        email: "",
        password: "",
        gender: ""
      }
    })



  }
  render() {

    return (
      <div>
        <h1>Login Form</h1>
        <pre>{JSON.stringify(this.state)}</pre>

        <div className="container ">
          <div className="row">
            <div className="col-4 m-auto">
              <div className="card ">
                <div className="card-header bg-dark text-white"><h3>Registration Form</h3> </div>

                <div className="card-body">


                  <form>

                    <div className="mb-3">
                      <label className="form-label">username</label>
                      <input type="text" className="form-control" onChange={this.updateHandler} name="username" value={this.state.user.username} />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">email</label>
                      <input type="email" className="form-control" onChange={this.updateHandler} name="email" value={this.state.user.email} />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input type="text" className="form-control" onChange={this.updateHandler} name="password" value={this.state.user.password} />
                    </div>


                    <div className="mb-3">
                      <label >gender</label> <br />
                      <input type="radio" name="gender" onChange={this.updateHandler} value="male" className='mt-3 mx-3' />Male
                      <input type="radio" name="gender" onChange={this.updateHandler} value="female" className='mx-3' />Female

                    </div>
                    <button className='btn btn-primary' onClick={this.loginHandler}>click</button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* 
         <table className='table'>
          <thead>
            <tr>
              <th>username</th>
              <th>email</th>
              <th>password</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, i) => {
              return <tr key={i}>
                <td>{user.username}</td>
              </tr>
            })}
          </tbody>
        </table>  */}
      </div>
    );
  }
}
export default Users1