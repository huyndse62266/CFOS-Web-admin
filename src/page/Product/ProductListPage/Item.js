import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Icon, Tooltip } from 'antd';
import { actionGetListFoodByCate } from '../productAction';
import { isEmpty } from '../../../utils/helpers/helpers';

class Item extends Component {
  // async để call api, await hoạt động
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.props.actionGetListFoodByCate(this.props.categoryId);
  };
  openEdit = (e, record) => {
    this.props.editFoodModal(record);
    e.stopPropagation();
  };
  render() {
    const { foodList } = this.props;
    const columns = [
      {
        title: 'Tên món ăn',
        dataIndex: 'foodName',
        key: 'foodName'
      },
      // {
      //   title: 'Ảnh',
      //   dataIndex: 'foodImage',
      //   key: 'foodImage'
      // },
      {
        title: 'Ảnh',
        dataIndex: 'foodImage',
        render: (text, record) => (
          <div>
            <img className="image" src={record.foodImage} />
          </div>
        ),
        key: 'foodImage',
        align: 'center'
      },
      {
        title: 'Mô tả',
        dataIndex: 'foodDescription',
        key: 'foodDescription'     
      },
      {
        title: 'Đơn vị',
        dataIndex: 'foodUnit',
        key: 'foodUnit',
        align: 'center'
      },
      {
        title: 'Giá',
        dataIndex: 'price',
        key: 'price',
        align: 'center'
      },
      {
        title: 'Số Lượng',
        dataIndex: 'quantity',
        key: 'quantity',
        align: 'center'
      },
      {
        title: 'Status',
        dataIndex: 'active',
        render: (text, record) => (
          <span>{record.active ? 'active' : 'inactive'}</span>
        ),
        key: 'active',
        align: 'center'
      },
      {
        title: 'Action',
        dataIndex: 'action',
        render: (text, record) => (
          <Tooltip title="Chỉnh Sửa Món Ăn">
            <Icon type="edit" onClick={e => this.openEdit(e, record)} />
          </Tooltip>
        ),
        key: 'action',
        align: 'center'
      }
    ];

    if (isEmpty(foodList)) return '';
    return (
      <Table
        dataSource={foodList}
        columns={columns}
        pagination={false}
        bordered
      />
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
)(Item);
