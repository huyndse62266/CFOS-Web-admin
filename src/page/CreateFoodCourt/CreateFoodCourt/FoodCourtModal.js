import React, { Component } from "react";
import { Modal, Button, Form, Select, Input, DatePicker } from 'antd';
import { getListRoles ,getListFoodCourt,createFoodCourt} from './FoodCourtService';
import {isEmpty} from '../../../utils/helpers/helpers';
class FoodCourtModal extends Component {
  state = {
    roleList: [],
    fcList: []
  };

  // async để call api, await hoạt động
  async componentDidMount() {
    const res = await getListRoles();    
    const { data } = await getListFoodCourt();
    this.setState({ roleList: res.data, fcList: data})
  }

  handleSubmit = e => {
    this.props.form.validateFields(async (err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
            await createFoodCourt(values);
        }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { visible } = this.props;
    const { roleList , fcList} = this.state;
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
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input placeholder="Username" />
                            )}
                        </Form.Item>
                    </div>
                    <div className="col-md-6">
                        <span className="lab-text">Họ Tên</span>
                        <Form.Item>
                            {getFieldDecorator('fullname', {
                                rules: [{ required: true, message: 'Please input your fullname!' }],
                            })(
                                <Input placeholder="fullname" />
                            )}
                        </Form.Item>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <span className="lab-text">Địa chỉ</span>
                        <Form.Item>
                            {getFieldDecorator('address', {
                                rules: [{ required: true, message: 'hay nhap Địa chỉ!' }],
                            })(
                                <Input placeholder="address" />
                            )}
                        </Form.Item>
                    </div>
                    <div className="col-md-6">
                        <span className="lab-text">Email</span>
                        <Form.Item>
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'hay nhap Địa chỉ!' }],
                            })(
                                <Input placeholder="address" />
                            )}
                        </Form.Item>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <span className="lab-text">Ngày Sinh</span>
                        <Form.Item>
                            {getFieldDecorator('birthday', {
                                rules: [{ required: true, message: 'hay nhap birthday!' }],
                            })(
                                <DatePicker />
                            )}
                        </Form.Item>
                    </div>
                    <div className="col-md-6">
                        <span className="lab-text">Số Điện Thoại</span>
                        <Form.Item>
                            {getFieldDecorator('phone', {
                                rules: [{ required: true, message: 'hay nhap phone!' }],
                            })(
                                <Input placeholder="phone" />
                            )}
                        </Form.Item>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <span className="lab-text">Vai Trò</span>
                        <Form.Item>
                            {getFieldDecorator('roleId', {
                                rules: [{ required: true, message: 'hay nhap Role!' }],
                            })(
                                <Select style={{ width: '100%' }}>
                                    {!isEmpty(roleList) && roleList.map(el => (
                                        <Select.Option value={el.roleId} key={el.roleId}>{el.roleName}</Select.Option>
                                    ) )}                                    
                                </Select>
                            )}
                        </Form.Item>
                    </div>
                    <div className="col-md-6">
                    <span className="lab-text">Food Court</span>
                        <Form.Item>
                            {getFieldDecorator('fcId', {
                                rules: [{ required: true, message: 'hay nhap fcId!' }],
                            })(
                                <Select style={{ width: '100%' }}>
                                    {!isEmpty(fcList) && fcList.map(el => (
                                        <Select.Option value={el.fcId} key={el.fcId}>{el.fcName}</Select.Option>
                                    ) )}                                    
                                </Select>
                            )}
                        </Form.Item>
                    </div>                
                </div>
            </Form>
        </Modal>
    );
  }
}
export default Form.create()(FoodCourtModal); 