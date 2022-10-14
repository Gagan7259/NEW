import React, { Component } from 'react'
import Axios from 'axios'
class User extends Component {
  state = {
    users:[],
  }
  UserHandler = () => {
    Axios.get('https://dummyjson.com/users')
      .then((response) => {
        this.setState({ users: response.data })
      })
      .catch((error) => {})
  }
  render() {
    return (
      <div>
        <h1>{this.state.users}</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <table className=" table table-hover">
          <thead>
            <th>id</th>
            <th>first name</th>
            <th>age</th>
          </thead>
          <tbody>
            {
              this.state.users.map((user)=>{
                return(
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default User
