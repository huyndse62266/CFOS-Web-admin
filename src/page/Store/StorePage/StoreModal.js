import React, { Component } from 'react';
import { Modal, Form, Input, message, Radio } from 'antd';
import { createStore, updateStore } from './StoreService';
import { MODE } from '../../../utils/constants/constants';
class StoreModal extends Component {
  async componentDidMount() {}
  handleSubmit = e => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { mode, itemSelected } = this.props;
        try {
          if (mode === MODE.ADD) {
            await createStore(values);
            message.success('create success');
          } else {
            await updateStore({ ...itemSelected, ...values });
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
    const titleModal =
      visible.mode === MODE.ADD ? 'Tạo Mới Store' : 'Chỉnh Sửa Store';
    return (
      <Modal
        title={titleModal}
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
                  initialValue:
                    mode === MODE.EDIT ? itemSelected.storeName : '',
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
                  initialValue:
                    mode === MODE.EDIT ? itemSelected.storeDescription : '',
                  rules: [{ required: true, message: 'Chưa Nhập Mô Tả!' }]
                })(<Input placeholder="storeDescription" />)}
              </Form.Item>
            </div>
          </div>
          {mode === MODE.EDIT && (
            <div className="row">
              <div className="col-md-6">
                <span className="lab-text">Active</span>
                <Form.Item>
                  {getFieldDecorator('active', {
                    initialValue: itemSelected.active
                  })(
                    <Radio.Group>
                      <Radio value={true}>Active</Radio>
                      <Radio value={false}>Inactive</Radio>
                    </Radio.Group>
                  )}
                </Form.Item>
              </div>
            </div>
          )}
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(StoreModal);
