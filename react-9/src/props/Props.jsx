import React, { Component } from 'react'
import Props1 from './Props1'
class Props extends Component {
 name="iphone 12"
 price=4500000
   color="blue"
  render() {
    return (
      <div>
        <h1>props component</h1>
        <Props1 name={this.name} price={this.price} color={this.cplor} />
      </div>
    )
  }
}

export default Props
