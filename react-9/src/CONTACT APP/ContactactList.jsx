import React, { Component } from 'react'

class ContactactList extends Component {
  render() {
    return <div>
        <h1>Contact List</h1>
        <pre>{JSON.stringify(this.props.contact)}</pre>
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className='table table-hover'>
                        <thead className='bg-info text-white'>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>AGE</th>
                                <th>CITY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.props.contacts.map((contact)=>{
                                return <tr>
                                    <td>{contact.login.uuid}</td>
                                </tr>
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  }
}

export default ContactactList
