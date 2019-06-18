import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Form, Select, Input, message } from 'antd';
import { actionGetListFoodByCate } from '../productAction';
import { getCategoryFc, createFood, updateFood } from './CateFoodService';
import { isEmpty } from '../../../utils/helpers/helpers';
import { MODE } from '../../../utils/constants/constants';
class FoodModal extends Component {
  state = {
    cateFCList: [],
    subCate: []
  };

  // async để call api, await hoạt động
  async componentDidMount() {
    const res = await getCategoryFc();
    this.setState({ cateFCList: res.data, subCate: res.data.categoryVM || [] });
  }

  handleSubmit = e => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          const { foodModal } = this.props;
          if (foodModal.mode === MODE.ADD) {
            delete values.fcCategoryId;
            await createFood({
              ...values,
              storeCategoryId: foodModal.parent.categoryId
            });
            message.success('create success');
          } else {
            await updateFood({ ...foodModal.item, ...values });
            message.success('update success');
          }
          this.props.cancelModal();
          // this.props.fetchData();
          this.props.actionGetListFoodByCate(foodModal.parent.categoryId);
        } catch (err) {}
      }
    });
  };
  handleSelect = value => {
    const { cateFCList } = this.state;
    const temp = cateFCList.filter(item => item.fcCategoryId === value);
    this.setState({ subCate: !isEmpty(temp) ? temp[0].categoryVM : [] });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { foodModal } = this.props;
    const { cateFCList, subCate } = this.state;
    const titleModal =
      foodModal.mode === MODE.ADD ? 'Tạo Mới Món Ăn' : 'Chỉnh Sửa Món Ăn';
    return (
      <Modal
        title={titleModal}
        centered
        width={960}
        visible={foodModal.visible}
        onOk={this.handleSubmit}
        onCancel={() => this.props.cancelModal()}
      >
        <Form>
          <div className="row">
            <div className="col-md-6">
              <span className="lab-text">foodName</span>
              <Form.Item>
                {getFieldDecorator('foodName', {
                  initialValue:
                    foodModal.mode === MODE.EDIT ? foodModal.item.foodName : '',
                  rules: [
                    { required: true, message: 'Please input your foodName!' }
                  ]
                })(<Input placeholder="foodName" />)}
              </Form.Item>
            </div>
            <div className="col-md-6">
              <span className="lab-text">foodDescription</span>
              <Form.Item>
                {getFieldDecorator('foodDescription', {
                  initialValue:
                    foodModal.mode === MODE.EDIT
                      ? foodModal.item.foodDescription
                      : '',
                  rules: [
                    {
                      required: true,
                      message: 'Please input your foodDescription!'
                    }
                  ]
                })(<Input placeholder="foodDescription" />)}
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <span className="lab-text">foodImage</span>
              <Form.Item>
                {getFieldDecorator('foodImage', {
                  initialValue:
                    foodModal.mode === MODE.EDIT
                      ? foodModal.item.foodImage
                      : '',
                  rules: [{ required: true, message: 'hay nhap foodImage!' }]
                })(<Input placeholder="foodImage" />)}
              </Form.Item>
            </div>
            <div className="col-md-6">
              <span className="lab-text">foodUnit</span>
              <Form.Item>
                {getFieldDecorator('foodUnit', {
                  initialValue:
                    foodModal.mode === MODE.EDIT ? foodModal.item.foodUnit : '',
                  rules: [{ required: true, message: 'hay nhap foodUnit!' }]
                })(<Input placeholder="foodUnit" />)}
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <span className="lab-text">price</span>
              <Form.Item>
                {getFieldDecorator('price', {
                  initialValue:
                    foodModal.mode === MODE.EDIT ? foodModal.item.price : '',
                  rules: [{ required: true, message: 'hay nhap price!' }]
                })(<Input placeholder="price" />)}
              </Form.Item>
            </div>
            <div className="col-md-6">
              <span className="lab-text">quantity</span>
              <Form.Item>
                {getFieldDecorator('quantity', {
                  initialValue:
                    foodModal.mode === MODE.EDIT ? foodModal.item.quantity : '',
                  rules: [{ required: true, message: 'hay nhap quantity!' }]
                })(<Input placeholder="quantity" />)}
              </Form.Item>
            </div>
          </div>
          {foodModal.mode === MODE.ADD && (
            <div className="row">
              <div className="col-md-6">
                <span className="lab-text">Chọn Danh Mục Lớn</span>
                <Form.Item>
                  {getFieldDecorator('fcCategoryId', {
                    rules: [{ required: true, message: 'hay nhap Danh Mục!' }]
                  })(
                    <Select
                      style={{ width: '100%' }}
                      onSelect={this.handleSelect}
                    >
                      {!isEmpty(cateFCList) &&
                        cateFCList.map(el => (
                          <Select.Option
                            value={el.fcCategoryId}
                            key={el.fcCategoryId}
                          >
                            {el.fcCategoryName}
                          </Select.Option>
                        ))}
                    </Select>
                  )}
                </Form.Item>
              </div>
              <div className="col-md-6">
                <span className="lab-text">Chọn Danh Mục Nhỏ</span>
                <Form.Item>
                  {getFieldDecorator('fcSubCategoryId', {
                    rules: [{ required: true, message: 'hay nhap Danh Mục!' }]
                  })(
                    <Select style={{ width: '100%' }}>
                      {!isEmpty(subCate) &&
                        subCate.map(el => (
                          <Select.Option
                            value={el.categoryId}
                            key={el.categoryId}
                          >
                            {el.categoryName}
                          </Select.Option>
                        ))}
                    </Select>
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

export default connect(
  state => ({
    foodList: state.product.foodList
  }),
  {
    actionGetListFoodByCate
  }
)(Form.create()(FoodModal));
