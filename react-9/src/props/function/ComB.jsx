import React from 'react'

function ComB(props) {
  return (
    <div>
        <h1>ComB</h1>
        <pre>{JSON.stringify(props)}</pre>
        <h1> value:{props.one}</h1>
    </div>
  )
}

export default ComB