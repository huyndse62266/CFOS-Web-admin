import React, { Component } from 'react';

class ProfileModal extends Component {
    render() {
        return (         
                 <div className="modal fade" id="profileModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Profile</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="bmd-label-floating">Username</label>
                          <input type="text" className="form-control"  disabled value="HuyND62266"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="bmd-label-floating">
                            Email address
                          </label>
                          <input type="email" className="form-control"disabled value="huyndse62266@fpt.edu.vn"/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="bmd-label-floating">
                            Fist Name
                          </label>
                          <input type="text" className="form-control" disabled value="Huy"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="bmd-label-floating">
                            Last Name
                          </label>
                          <input type="text" className="form-control" disabled value="Nguyễn Đức"/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="bmd-label-floating">Adress</label>
                          <input type="text" className="form-control" disabled value="Quận Bình Tân, TP HCM"/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="bmd-label-floating">Birthday</label>
                          <input type="text" className="form-control" disabled value="1/1/1997"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="bmd-label-floating">Phone</label>
                          <input type="text" className="form-control" disabled value="0932082096"/>
                        </div>
                      </div>
                      
                    </div>
                   
                    <div className="clearfix" />
                  </form>
                        </div>
                        <div className="modal-footer">
                           
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
         
        );
    }
}

export default ProfileModal;