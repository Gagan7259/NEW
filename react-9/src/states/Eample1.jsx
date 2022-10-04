import React, { Component } from 'react'
import Example2 from './Example2'

class Eample1 extends Component {
    counter=1
  render() {
    return (
      <div>
<h1>react state</h1>
<pre>{JSON.stringify(this.props)}</pre>
<Example2 co={this.counter}/>
      </div>
    )
  }
}

export default Eample1