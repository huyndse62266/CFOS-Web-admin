import React, { Component } from "react";
import { Modal, Button } from 'antd';
class CreateFoodCourt extends Component {
  state = {
    modal2Visible: false,
  };

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }
  render() {
    return (
      <div style={{ paddingLeft: "20%", paddingTop: "5%" }}>
        <div className="col-lg-12" >
          <Button type="primary" onClick={() => this.setModal2Visible(true)}>
            Tạo Mới Account
        </Button>
          <Modal
            title="Tạo Mới Account"
            centered
            visible={this.state.modal2Visible}
            onOk={() => this.setModal2Visible(false)}
            onCancel={() => this.setModal2Visible(false)}
          >
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="bmd-label-floating">Username</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="bmd-label-floating">Họ Tên</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="bmd-label-floating">Địa chỉ</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="bmd-label-floating">Email</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="bmd-label-floating">Ngày Sinh</label>
                  <input type="date" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="bmd-label-floating">Số Điện Thoại</label>
                  <input type="number" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="bmd-label-floating">Vai Trò</label>
                  <select className="form-control">
                    <option>Select...</option>
                    <option>FoodCourt</option>

                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="bmd-label-floating">Cấp Quyền</label>
                  <div classname="form-check" style={{marginTop:"20px"}}>
                    <input classname="form-check-input" type="checkbox" style={{marginRight:"10px"}}/>
                    <label classname="form-check-label" htmlfor="exampleRadios1">
                      Active
                              </label>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
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
      </div>
    );
  }
}
export default CreateFoodCourt; 