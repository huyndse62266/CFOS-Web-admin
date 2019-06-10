import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; //thông qua thèn này lấy được các state của thèn mặc định trên store Product

import ProductList from '../../../components/Products/ProductList/ProductList';
import ProductItems from '../../../components/Products/ProductItem/ProductItems';
import { fetchAllProducts } from '../ProductAction';

class ProductListPage extends Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }
  showProducts = products => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        //Nhận được 1 cái product và index (props) để bên trong ProductItem nhận lại hiển thị product đó
        return (
          <ProductItems
            key={index}
            product={product}
            index={index} // Số thứ tự của sản phẩm
          />
        );
      });
    }
    return result;
  };
  render() {
    var { productList } = this.props; // Sau khi mapStateToProps thì dữ liệu từ store đẩy về props mình chỉ cần gọi ra

    return (
      <div
        className="justify-content-end align-items-center"
        style={{ paddingLeft: '14%', paddingTop: '8%', height: '100%' }}
      >
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Link to="/add" className="btn btn-info">
            Thêm sản phẩm
          </Link>
          <ProductList>{this.showProducts(productList)}</ProductList>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    productList: state.product.productList
  }),
  {
    fetchAllProducts
  }
)(ProductListPage);
