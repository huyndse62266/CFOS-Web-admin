import React, { Component } from 'react'

export default class ProductListPage extends Component {
    render() {
        return (
            <div className="col-lg-6">
        <div className="card">
          <div className="card-header">
            <i className="fa fa-align-justify" /> Striped Table</div>
          <div className="card-body">
            <table className="table table-responsive-sm table-striped">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Date registered</th>
                  <th>Role</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Yiorgos Avraamu</td>
                  <td>2012/01/01</td>
                  <td>Member</td>
                  <td>
                    <span className="badge badge-success">Active</span>
                  </td>
                </tr>
                <tr>
                  <td>Avram Tarasios</td>
                  <td>2012/02/01</td>
                  <td>Staff</td>
                  <td>
                    <span className="badge badge-danger">Banned</span>
                  </td>
                </tr>
                <tr>
                  <td>Quintin Ed</td>
                  <td>2012/02/01</td>
                  <td>Admin</td>
                  <td>
                    <span className="badge badge-secondary">Inactive</span>
                  </td>
                </tr>
                <tr>
                  <td>Enéas Kwadwo</td>
                  <td>2012/03/01</td>
                  <td>Member</td>
                  <td>
                    <span className="badge badge-warning">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>Agapetus Tadeáš</td>
                  <td>2012/01/21</td>
                  <td>Staff</td>
                  <td>
                    <span className="badge badge-success">Active</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">Prev</a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">4</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
        )
    }
}
