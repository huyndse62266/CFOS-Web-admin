import React, { Component } from 'react';
import { Modal, Form, Input, message } from "antd";
import {
    deposit
} from "./MemberService";
class DepositModal extends Component {
    handleSubmit = e => {
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                await deposit(values);
                message.success("Nộp tiền thành công!");
                this.props.cancelDepositModal();
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const { depositModal } = this.props;
        console.log("deposit",deposit.item);
        return (
            <Modal
                title="Nộp Tiền Cho Khách Hàng"
                centered
                visible={depositModal.visibleDepositMember}
                onOk={this.handleSubmit}
                onCancel={() => this.props.cancelDepositModal()}
            >
                <Form>
                    <div className="row">
                        <div className="col-md-12">
                            <span className="lab-text">Tên Khách Hàng</span>
                            <Form.Item>
                                {getFieldDecorator("customerId", {
                                    initialValue: depositModal.item.fullname
                                })(<Input disabled />)}
                            </Form.Item>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <span className="lab-text">Nhập Số Tiền</span>
                            <Form.Item>
                                {getFieldDecorator("tranTotal", {
                                    rules: [
                                        { required: true, message: "Nhập Số Tiền" }
                                    ]
                                })(<Input placeholder="Tên Khách hàng" />)}
                            </Form.Item>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <span className="lab-text">Mô Tả Giao Dịch</span>
                            <Form.Item>
                                {getFieldDecorator("tranDescription", {
                                    rules: [
                                        { required: true, message: "Nhập Mô Tả Giao Dịch" }
                                    ]
                                })(<Input placeholder="Tên Khách hàng" />)}
                            </Form.Item>
                        </div>

                    </div>
                </Form>
            </Modal>

        );
    }
}

export default Form.create()(DepositModal);