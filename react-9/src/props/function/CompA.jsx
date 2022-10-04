import React from 'react'
import ComB from './ComB'
function CompA() {
    let a=100
    let b=200
    let names=["gagan" ,"lokesh","praveen"]
  return (
    <div>
        <h1>CompA</h1>
        <ComB one={a} value={b} name={names}/>

    </div>
  )
}

export default CompA