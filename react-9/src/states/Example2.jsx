import React, { Component } from 'react'
import Eample1 from './Eample1' 
class Example2 extends Component {
  render() {
    return (
      <div>
<h2>state 3 example</h2>
<pre>{JSON.stringify(this.props)}</pre>
<h4>counter:{this.props.co}</h4>
      </div>
    )
  }
}

export default Example2