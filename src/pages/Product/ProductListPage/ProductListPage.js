import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ProductList from '../../../components/Products/ProductList/ProductList';
export default class ProductListPage extends Component {
  render() {
    return (

      <div style={{ paddingLeft: "20%", paddingTop: "5%" }}>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
          <Link to="/add" className="btn btn-info">
            Thêm sản phẩm
          </Link>
          <ProductList/>
        </div>
      </div>

    )
  }
}
