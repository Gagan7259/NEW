import Axios from 'axios'
import React, { Component } from 'react'

class Routing extends Component {
  state = {
    products: [],
  }

  componentDidMount = () => {
    Axios.get('https://dummyjson.com/products')
      .catch((response) => {
        this.setState({ products: response.data })
      })
      .then((err) => {})
  }
  render() {
    return (
      <div>
        <div className="container">
          <pre>{JSON.stringify(this.state.products)}</pre>
          <div className="row">
            <div className="col-md-12">
              <table className="table table-hover">
                <thead>
                  <th>ID</th>
                  <th>TITLE</th>
                  <th>DESCIPTION</th>
                  <th>PRICE</th>
                  <th>RATING</th>
                  <th>BRAND</th>
                  <th>THUMNAIL</th>
                  <th>CATEGORY</th>
                </thead>
                <tbody>
                  {
                  this.state.products.length > 0 ? (
                    <>
                      {
                      this.state.products.map((product) => {
                        return (
                          <tr>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.rating}</td>
                            <td>{product.brand}</td>
                          </tr>
                        )
                      })}
                    </>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Routing
