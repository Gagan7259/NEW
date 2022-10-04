import React, { Component } from 'react'
 class Props1 extends Component {
  render() {
    return (
     <div>
        <h1>props1 Component</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <h1>name:{this.props.name}</h1>
        <h1>price:{this.props.price}</h1>
     </div>
    )
  }
}

export default Props1