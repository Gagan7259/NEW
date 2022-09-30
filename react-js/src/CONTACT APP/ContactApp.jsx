import React, { Component } from 'react'
import Contactlist from './Contactlist'

export class ContactApp extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <Contactlist/>
                </div>
                <div className="col-md-4">
                    <Contactdetails/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default ContactApp