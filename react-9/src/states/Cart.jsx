import React, { Component } from 'react'

class Cart extends Component {
  state = {
    name: 'Kawasaki ninja h2r',
    image:
      'https://m.media-amazon.com/images/I/71cAl0LbHgL._AC_UL480_FMwebp_QL65_.jpg',
    price: 4500000,
    qty: 1,
  }
  incrHandler = () => {
    this.setState({ qty: this.state.qty + 1 })
  }
  decrHandler = () => {
    this.setState({ qty: this.state.qty - 1 })
  }
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div className="col-md-4">
              <table className="table table-hover">
                <thead className="table">
                  <th>name</th>
                  <th>image</th>
                  <th>price</th>
                  <th>qty</th>
                  <th>total</th>
                </thead>
                <tbody>
                  <tr>
                    <td> {this.state.name} </td>
                    <td>
                      {' '}
                      <img src={this.state.image} height="40px" />
                    </td>
                    <td>{this.state.price}</td>
                    <td>
                      {' '}
                      <i
                        onClick={this.decrHandler}
                        className="fa fa-minus-circle
                    rcle"
                      ></i>
                      {this.state.qty}
                      <i
                        onClick={this.incrHandler}
                        className="fa fa-plus-circle"
                      ></i>
                    </td>

                    <td>{this.state.price * this.state.qty}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cart
