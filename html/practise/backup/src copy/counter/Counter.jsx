import React, { Component } from 'react'

class Counter extends Component {
  state = {
    product_Name: 'Apple iPhone 13 Pro (512GB) - Silver',
    price: 145000,
    image:
      'https://m.media-amazon.com/images/I/617FFRO3vcL._AC_UY327_FMwebp_QL65_.jpg',
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
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8">
              <table className="table tabl-hover">
                <thead className="bg-info">
                  <th>NAME</th>
                  <th>PRICE</th>
                  <th>IMAGE</th>
                  <th>QTY</th>
                  <th>TOTAL_PRICE</th>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.product_Name}</td>
                    <td>{this.state.price}</td>
                    <td>
                      <img src={this.state.image} height="40px" alt="" />
                    </td>
                    <td>
                      <i
                        className="fa fa-minus-circle"
                        onClick={this.decrHandler}
                      ></i>
                      {this.state.qty}
                      <i
                        className="fa fa-plus-circle"
                        onClick={this.incrHandler}
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

export default Counter
