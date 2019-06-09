import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ProductList from '../../../components/Products/ProductList/ProductList';
import ProductItems from '../../../components/Products/ProductItem/ProductItems';
import { connect } from 'react-redux'; //thông qua thèn này lấy được các state của thèn mặc định trên store Product
import { actFetchProductsRequest } from './../../../actions/action'; //đây là action get all product thông quay mapDispatchToProps
class ProductListPage extends Component {
  componentDidMount() {
    this.props.fetchAllProducts();
    // // Thay vì mình gọi API ở đây thì mình gọi bên actions rồi lấy qua sử dụng dễ quản lý
    //  callApi('products', 'GET', null).then(res => { // Chỉ cần truyền url,method,data vào rồi response trả về thôi
    //      this.props.fetchAllProducts(res.data); // gọi action get products từ mapDispatchToProps lên và truyền dữ liệu từ server về
    //     // this.setState({
    // //     //     products: res.data
    // //     // })
    //  })
}
  render() {
    var { products, roles } = this.props; // Sau khi mapStateToProps thì dữ liệu từ store đẩy về props mình chỉ cần gọi ra
    console.log('test redux', roles)
    return (
      <div className="justify-content-end align-items-center" style={{ paddingLeft: '14%', paddingTop: '8%', height: "100%" }}>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
          <Link to="/add" className="btn btn-info">
            Thêm sản phẩm
          </Link>
          {/* Truyền vào cho nó 1 cái props (children) */}
          <ProductList>
            {this.showProducts(products)}
          </ProductList>
        </div>
      </div>

    )
  }
  showProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => { //Nhận được 1 cái product và index (props) để bên trong ProductItem nhận lại hiển thị product đó
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
  }
}
const mapStateToProps = state => { //state.products bởi vì mình combine nó thành tên là product trong appReducer
  return {
    products: state.products,
    roles: state.system.roles
  }
}
// Lấy action từ store dispatch thành props để cho component sử dụng và lưu lên store
const mapDispatchToProps = (dispatch, props) => {
  return {
    //Get All
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
