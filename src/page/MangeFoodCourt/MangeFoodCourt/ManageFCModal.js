import React, { Component } from 'react';
import { Modal, Form, Input, message } from 'antd';
import { createFoodCourt, updateFoodCourt } from './ManageFCService';
import { MODE } from '../../../utils/constants/constants';
class ManageFCModal extends Component {
  async componentDidMount() {}

  handleSubmit = e => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { mode, itemSelected } = this.props;
        try {
          if (mode === MODE.ADD) {
            await createFoodCourt(values);
            message.success('create success');
          } else {
            await updateFoodCourt({ ...itemSelected, ...values });
            message.success('update success');
          }
          this.props.cancelModal();
          this.props.fetchData();
        } catch (err) {}
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { visible, mode, itemSelected } = this.props;
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
              <span className="lab-text">Tên Foodcourt</span>
              <Form.Item>
                {getFieldDecorator('fcName', {
                  initialValue: mode === MODE.EDIT ? itemSelected.fcName : '',
                  rules: [
                    { required: true, message: 'Chưa Nhập Tên Foodcourt!' }
                  ]
                })(<Input placeholder="fcName" />)}
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <span className="lab-text">Địa Điểm Foodcourt</span>
              <Form.Item>
                {getFieldDecorator('fcLocation', {
                  initialValue:
                    mode === MODE.EDIT ? itemSelected.fcLocation : '',
                  rules: [
                    { required: true, message: 'Chưa Nhập Tên Foodcourt!' }
                  ]
                })(<Input placeholder="fcLocation" />)}
              </Form.Item>
            </div>
          </div>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(ManageFCModal);
