import React, { Component } from 'react';

class ChangePasswordModal extends Component {
    render() {
        return (
            <div className="modal fade" id="changePasswordModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Change Password</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label >Old Password</label>
                        <input type="password" className="form-control" id="OldPassword" />
                    </div>
                    <div className="form-group">
                        <label>New Password</label>
                        <input type="password" className="form-control" id="NewPassword"/>
                    </div>
                    <div className="form-group">
                        <label >Confirm New Password</label>
                        <input type="password" className="form-control" id="ConfirmNewPassword" />
                    </div>
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

export default ChangePasswordModal;