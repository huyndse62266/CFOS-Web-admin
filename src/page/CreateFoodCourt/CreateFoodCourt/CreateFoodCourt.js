import React, { Component } from "react";
import { Modal, Button } from 'antd';
import FoodCourtModal from './FoodCourtModal';

class CreateFoodCourt extends Component {
  state = {
    visibleModal: false,
    roleList: []
  };
  openModal = () => this.setState({ visibleModal: true });
  handleCancel = () => this.setState({ visibleModal: false });
  componentDidMount() {

  }

  render() {
    const { visibleModal } = this.state;
    return (
      <div style={{ paddingLeft: "20%", paddingTop: "5%" }}>
        <div className="col-lg-12" >
          <Button type="primary" onClick={this.openModal}>
            Tạo Mới Account
          </Button>          
          <div className="card">
            <div className="d-flex flex-row-reverse input-group card-header col-md-12">
              <div className="d-flex flex-row-reverse col-md-4">
                <span className="input-group-btn">
                  <button
                    className="btn btn-default btn-fab btn-fab-mini btn-round"
                    type="button"
                  >
                    <i className="material-icons">search</i>
                  </button>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div className="card-body">
              <table className="table table-responsive-sm table-striped">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Username</th>
                    <th>Tên</th>
                    <th>Địa Chỉ</th>
                    <th>Ngày Sinh</th>
                    <th>Số Điện Thoại</th>
                    <th>Email</th>
                    <th>Ngày Khởi Tạo</th>
                    <th>Vai Trò</th>
                    <th>Hành Động</th>
                  </tr>
                </thead>
                <tbody>
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
                      <span className="badge badge-warning">System Admin</span>
                    </td>
                    <td>
                      <button className="btn btn-success btn-sm">Active</button>
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
        {visibleModal &&
          <FoodCourtModal visible={visibleModal} cancelModal={this.handleCancel} />
        }        
      </div>
    );
  }
}
export default CreateFoodCourt; 