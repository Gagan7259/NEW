import React, { Component } from 'react'

class Employee extends Component {
  id = 102
  name = 'gagan'
  image =
    'https://th.bing.com/th/id/OIP.pezNdQ9kxCrHYXGm64KPaQHaEK?pid=ImgDet&rs=1'
  render() {
    return (
      <div>
        <h1>Employee id:{this.id}</h1>
        <h1>Employee name:{this.name}</h1>
        <img src={this.image} />
      </div>
    )
  }
}

export default Employee
