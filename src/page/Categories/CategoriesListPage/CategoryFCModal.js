import React, { Component } from 'react';
import { Modal, Form, Input, message, Radio } from 'antd';
import { createCategoryFc, updateCategoryFc } from './CategoryService';
import { MODE } from '../../../utils/constants/constants';

class CategoryFCModal extends Component {
  handleSubmit = e => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          const { categoryModal } = this.props;
          if (categoryModal.mode === MODE.ADD) {
            await createCategoryFc({ ...values, active: true });
            message.success('create success');
          } else {
            console.log('edit', { ...categoryModal.item, ...values }, values);
            // await updateCategoryFc({ ...categoryModal.item, ...values });
            await updateCategoryFc({
              ...values,
              categoryId: categoryModal.item.fcCategoryId
            });
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
    const { categoryModal } = this.props;
    const titleModal =
      categoryModal.mode === MODE.ADD
        ? 'Tạo Mới Danh Mục'
        : 'Chỉnh Sửa Danh Mục';
    return (
      <Modal
        title={titleModal}
        centered
        visible={categoryModal.visible}
        onOk={this.handleSubmit}
        onCancel={() => this.props.cancelModal()}
      >
        <Form>
          <div className="row">
            <div className="col-md-6">
              <span className="lab-text">Foodcourt Category</span>
              <Form.Item>
                {getFieldDecorator('categoryName', {
                  initialValue:
                    categoryModal.mode === MODE.EDIT
                      ? categoryModal.item.fcCategoryName
                      : '',
                  rules: [
                    {
                      required: true,
                      message: 'Please input Foodcourt Category!'
                    }
                  ]
                })(<Input placeholder="fcCategoryName" />)}
              </Form.Item>
            </div>
          </div>
          {categoryModal.mode === MODE.EDIT && (
            <div className="row">
              <div className="col-md-6">
                <span className="lab-text">Active</span>
                <Form.Item>
                  {getFieldDecorator('active', {
                    initialValue: categoryModal.item.active
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

export default Form.create()(CategoryFCModal);
