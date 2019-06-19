import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Form, Select, Input, message } from 'antd';
import { actionGetListFoodByCate } from '../productAction';
import { getCategoryFc, createFood, updateFood } from './CateFoodService';
import { isEmpty } from '../../../utils/helpers/helpers';
import { MODE } from '../../../utils/constants/constants';
import UploadFirebase from '../../../components/uploadFirebase/UploadFirebase';
class FoodModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cateFCList: [],
      subCate: [],
      urlImage: props.foodModal.item.foodImage || ''
    };
  }

  // async để call api, await hoạt động
  async componentDidMount() {
    const res = await getCategoryFc();
    this.setState({ cateFCList: res.data, subCate: res.data.categoryVM || [] });
  }
  handleChangeUpload = url => {
    this.setState({ urlImage: url });
  };

  handleSubmit = e => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          const { foodModal } = this.props;
          const { urlImage } = this.state;
          if (foodModal.mode === MODE.ADD) {
            delete values.fcCategoryId;
            await createFood({
              ...values,
              foodImage: urlImage,
              storeCategoryId: foodModal.parent.categoryId
            });
            message.success('create success');
          } else {
            await updateFood({
              ...foodModal.item,
              ...values,
              foodImage: urlImage
            });
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
    const { cateFCList, subCate, urlImage } = this.state;
    console.log('abc', urlImage);
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
              <span className="lab-text">Tên Món Ăn</span>
              <Form.Item>
                {getFieldDecorator('foodName', {
                  initialValue:
                    foodModal.mode === MODE.EDIT ? foodModal.item.foodName : '',
                  rules: [{ required: true, message: 'Nhập Tên Món Ăn!' }]
                })(<Input placeholder="foodName" />)}
              </Form.Item>
            </div>
            <div className="col-md-6">
              <span className="lab-text">Mô Tả</span>
              <Form.Item>
                {getFieldDecorator('foodDescription', {
                  initialValue:
                    foodModal.mode === MODE.EDIT
                      ? foodModal.item.foodDescription
                      : '',
                  rules: [
                    {
                      required: true,
                      message: 'Nhập Mô Tả!'
                    }
                  ]
                })(<Input placeholder="foodDescription" />)}
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <span className="lab-text">Hình Ảnh</span>
              <div>
                <UploadFirebase
                  handleChangeUpload={this.handleChangeUpload}
                  imageUrl={urlImage}
                />
              </div>
            </div>
            <div className="col-md-6">
              <span className="lab-text">Đơn Vị Món Ăn</span>
              <Form.Item>
                {getFieldDecorator('foodUnit', {
                  initialValue:
                    foodModal.mode === MODE.EDIT ? foodModal.item.foodUnit : '',
                  rules: [{ required: true, message: 'Nhập Đơn Vị' }]
                })(<Input placeholder="foodUnit" />)}
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <span className="lab-text">Giá</span>
              <Form.Item>
                {getFieldDecorator('price', {
                  initialValue:
                    foodModal.mode === MODE.EDIT ? foodModal.item.price : '',
                  rules: [{ required: true, message: 'Nhập Giá!' }]
                })(<Input type="number" placeholder="price" />)}
              </Form.Item>
            </div>
            <div className="col-md-6">
              <span className="lab-text">Số Lượng</span>
              <Form.Item>
                {getFieldDecorator('quantity', {
                  initialValue:
                    foodModal.mode === MODE.EDIT ? foodModal.item.quantity : '',
                  rules: [{ required: true, message: 'Nhập Số Lượng' }]
                })(<Input type="number" placeholder="quantity" />)}
              </Form.Item>
            </div>
          </div>
          {foodModal.mode === MODE.ADD && (
            <div className="row">
              <div className="col-md-6">
                <span className="lab-text">Chọn Danh Mục Lớn</span>
                <Form.Item>
                  {getFieldDecorator('fcCategoryId', {
                    rules: [{ required: true, message: 'Chọn Danh Mục!' }]
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
                    rules: [{ required: true, message: 'Nhập Danh Mục Nhỏ!' }]
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
