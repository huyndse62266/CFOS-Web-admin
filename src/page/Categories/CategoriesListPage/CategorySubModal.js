import React, { Component } from 'react';
import { Modal, Form, Input, Radio } from 'antd';
import { updateCategoryFc, createCategoryFc } from './CategoryService';
import { MODE } from '../../../utils/constants/constants';

class CategorySubModal extends Component {
  handleSubmit = e => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          const { parent, mode, item } = this.props.subCategoryModal;
          if (mode === MODE.ADD) {
            // implemenet add function
            await createCategoryFc({
              categoryName: values.categoryName,
              parentId: parent.fcCategoryId
            });
          } else {
            await updateCategoryFc({
              active: values.active,
              categoryId: item.categoryId,
              categoryName: values.categoryName,
              parentId: parent.fcCategoryId
            });
          }

          this.props.cancelModal();
          this.props.fetchData();
        } catch (err) {}
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { subCategoryModal } = this.props;
    console.log('sub cate', subCategoryModal);
    const titleModal =
      subCategoryModal.mode === MODE.ADD
        ? 'Tạo Mới Danh Mục Con'
        : 'Chỉnh Sửa Danh Mục Con';
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
          {subCategoryModal.mode === MODE.EDIT && (
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
          )}
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(CategorySubModal);
