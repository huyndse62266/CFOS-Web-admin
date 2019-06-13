import React, { Component } from 'react';
import { Modal, Form, Input, message, Radio } from 'antd';
import { updateCategoryFc } from './CategoryService';
import { MODE } from '../../../utils/constants/constants';

class CategorySubModal extends Component {
  handleSubmit = e => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          const { categoryModal } = this.props;

          let categoryVMTemp = categoryModal.parent.categoryVM;
          categoryVMTemp.push({
            categoryName: values.categoryName,
            active: values.active
          });
          await updateCategoryFc({
            ...categoryModal.parent,
            categoryVM: [...categoryVMTemp]
          });
          this.props.cancelModal();
          this.props.fetchData();
        } catch (err) {}
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { subCategoryModal } = this.props;
    const titleModal =
      subCategoryModal.mode === MODE.ADD
        ? 'Tao moi subcategory'
        : 'Update subcategory';
    return (
      <Modal
        title={titleModal}
        centered
        visible={subCategoryModal.visible}
        onOk={this.handleSubmit}
        onCancel={() => this.props.cancelModal()}
      >
        <Form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <span className="lab-text">Category</span>
              <Form.Item>
                {getFieldDecorator('fcCategoryName', {
                  initialValue: subCategoryModal.parent.fcCategoryName
                })(<Input disabled />)}
              </Form.Item>
            </div>
            <div className="col-md-12">
              <span className="lab-text">Sub Category</span>
              <Form.Item>
                {getFieldDecorator('categoryName', {
                  initialValue: subCategoryModal.item.categoryName,
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
          <div className="row">
            <div className="col-md-12">
              <span className="lab-text">Active</span>
              <Form.Item>
                {getFieldDecorator('active', {
                  initialValue: subCategoryModal.item.active
                })(
                  <Radio.Group>
                    <Radio value={true}>Active</Radio>
                    <Radio value={false}>Inactive</Radio>
                  </Radio.Group>
                )}
              </Form.Item>
            </div>
          </div>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(CategorySubModal);
