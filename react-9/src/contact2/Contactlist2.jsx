import React, { Component } from 'react'
 class Contactlist2 extends Component {
  render() {
    return (
      <div>
        <h1>CONTACT LIST</h1>
        <div className="container">
          <pre>{JSON.stringify(this.props)}</pre>
          <div className="row">
            <div className="col">
              <table className='table table-hover'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>FIRSTNAME</th>
                    <th>AGE</th>
                    <th>GENDER</th>
                    <th>EMAIL</th>
                  </tr>
                </thead>
                <tbody>
                   {
                     Array.isArray (this.props.data) && this.props.data.map((user)=>{
                      return <tr>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contactlist2