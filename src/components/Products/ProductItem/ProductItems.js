import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Chứa các item trong product
class ProductItems extends Component {
    render() {
        // Gọi thèn props ra và đặt các tên biến
        var { product, index } = this.props;
        var statusName = product.status ? 'Sẵn Sàng' : 'Hết Món';
        var statusClass = product.status ? 'warning' : 'default'
        return (
            <tr>
                {/* <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.image}</td>
                <td>{product.type}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.quantity}</td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusName}
                    </span>
                </td> */}
                <td>Yiorgos Avraamu</td>
                <td>2012/01/01</td>
                <td>Member</td>
                <td>Member</td>
                <td>Member</td>
                <td>Member</td>
                <td>Member</td>
                <td>Member</td>
                <td>
                    <span className="badge badge-success">Active</span>
                </td>
                <td className="td-actions ">
                    <button type="button" rel="tooltip" className="btn btn-success" style={{ marginRight: "10px" }}>
                        <i className="material-icons">edit</i>
                    </button>
                    <button type="button" rel="tooltip" className="btn btn-danger">
                        <i className="material-icons">close</i>
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItems;