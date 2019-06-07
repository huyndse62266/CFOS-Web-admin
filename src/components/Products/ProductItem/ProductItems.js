import React, { Component } from 'react';

class ProductItems extends Component {
    render() {
        return (
            <tr>
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