import React, { Component } from "react";
import { Modal, Button, Form, Select, Input, message } from "antd";
import {
    createMember
} from "./MemberService";

class MemberModal extends Component {
  
  // async để call api, await hoạt động
  async componentDidMount() {
    // const res = await getListRoles();
    // const { data } = await getListFoodCourt();
    // const store = await getListStore();
   
   }
  handleSubmit = e => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        await createMember(values);
        message.success("create success");
        this.props.cancelModal();
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { visible } = this.props;
   
    return (
      <Modal
        title="Tạo Mới Account"
        centered
        width={960}
        visible={visible}
        onOk={this.handleSubmit}
        onCancel={() => this.props.cancelModal()}
      >
        <Form>
          <div className="row">
            <div className="col-md-6">
              <span className="lab-text">Username</span>
              <Form.Item>
                {getFieldDecorator("username", {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })(<Input placeholder="Username" />)}
              </Form.Item>
            </div>
            <div className="col-md-6">
              <span className="lab-text">Họ Tên</span>
              <Form.Item>
                {getFieldDecorator("fullname", {
                  rules: [
                    { required: true, message: "Please input your fullname!" }
                  ]
                })(<Input placeholder="fullname" />)}
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <span className="lab-text">Số Điện Thoại</span>
              <Form.Item>
                {getFieldDecorator("phone", {
                  rules: [{ required: true, message: "hay nhap phone!" }]
                })(<Input placeholder="phone" />)}
              </Form.Item>
            </div>
            <div className="col-md-6">
              <span className="lab-text">Email</span>
              <Form.Item>
                {getFieldDecorator("email", {
                  rules: [{ required: true, message: "Hãy Nhập Email!" }]
                })(<Input placeholder="abc@gmail.com" />)}
              </Form.Item>
            </div>
          </div>
          <div className="row">
          <div className="col-md-6">
              <span className="lab-text">Mã thẻ</span>
              <Form.Item>
                {getFieldDecorator("cardId", {
                  rules: [{ required: true, message: "Hãy Nhập Mã Thẻ!" }]
                })(<Input placeholder="01235" />)}
              </Form.Item>
            </div>
          </div>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(MemberModal);
