import React, { Component } from 'react'

export class Blas extends Component {
  render() {
    return (
      <div>
        <h3>class component</h3>
        <pre>{JSON.stringify(this.props)}</pre>
        <h1>name:{this.props.nam}</h1>
        <h1>award:{this.props.awar}</h1>
        <h1>debute:{this.props.deb}</h1>
      </div>
    )
  }
}

export default Blas