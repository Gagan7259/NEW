import React, { Component } from 'react'
import Axios from 'axios'
import Contactlist2 from './Contactlist2'
import Contactdetails2 from './Contactdetails2'
class ContactApp2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: {},
    }
  }
  componentDidMount = () => {
    Axios.get('https://dummyjson.com/users')
      .then((response) => {
        this.setState({ users: response.data })
      })
      .catch((err) => {})
  }
  render() {
    return (
      <div>
        <h1>contact app</h1>
        <div className="container">
          <pre>{JSON.stringify(this.state.users)}</pre>
          <div className="row">
            <div className="col-md-8">
              <Contactlist2 users={this.state.users}/>
            </div>
            <div className="col-md-4">
              <Contactdetails2 />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactApp2
