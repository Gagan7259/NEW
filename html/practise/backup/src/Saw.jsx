import React, { Component } from 'react'

export class Saw extends Component {
  render() {
    return (
      <div>
        <center>
            <form>
                <label>EMAIL</label>
                <input type="text" placeholder='enter ur email' /><br/><br/>
                <label>PASSWORD</label>
                <input type="text" placeholder='enter ur password' /><br/><br/>
                <input type="submit" value="login" />
            </form>
        </center>
      </div>
    )
  }
}

export default Saw