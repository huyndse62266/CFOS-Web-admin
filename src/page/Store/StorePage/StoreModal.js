import React, { Component } from 'react';
import { Modal, Form, Input, message } from 'antd';
import { createStore } from './StoreService';
class StoreModal extends Component {
  async componentDidMount() {}
  handleSubmit = e => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        await createStore(values);
        message.success('create success');
        this.props.cancelModal();
        this.props.fetchData();
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
        visible={visible}
        onOk={this.handleSubmit}
        onCancel={() => this.props.cancelModal()}
      >
        <Form>
          <div className="row">
            <div className="col-md-12">
              <span className="lab-text">Tên Cửa Hàng</span>
              <Form.Item>
                {getFieldDecorator('storeName', {
                  rules: [{ required: true, message: 'Chưa Nhập Tên Store!' }]
                })(<Input placeholder="storeName" />)}
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <span className="lab-text">Mô tả</span>
              <Form.Item>
                {getFieldDecorator('storeDescription', {
                  rules: [{ required: true, message: 'Chưa Nhập Mô Tả!' }]
                })(<Input placeholder="storeDescription" />)}
              </Form.Item>
            </div>
          </div>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(StoreModal);
