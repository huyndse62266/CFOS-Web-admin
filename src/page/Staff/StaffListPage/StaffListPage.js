import React, { Component } from 'react';
import { Button, Table, Input, Tooltip, Icon, Modal, Pagination } from 'antd';
import StaffModal from './StaffModal';
import {
  getListUser,
  updateStatusUser,
  searchUser
} from './../../CreateFoodCourt/CreateFoodCourt/FoodCourtService';
import './Staff.scss';
import { isEmpty } from '../../../utils/helpers/helpers';
class StaffListPage extends Component {
  state = {
    visibleModal: false,
    userList: {}
  };

  openModal = () => this.setState({ visibleModal: true });
  handleCancel = () => this.setState({ visibleModal: false });
  componentDidMount() {
    this.fetchUser();
  }
  fetchUser = async params => {
    const res = await getListUser(params);
    this.setState({ userList: res.data });
  };
  handelUpdate = item => {
    Modal.confirm({
      title: 'Change Status?',
      content: (
        <span>
          Do you want change status from&nbsp;
          <span style={{ color: '#1890ff' }}>
            {item.active ? 'active' : 'inactive'}
          </span>
          &nbsp; to&nbsp;
          <span style={{ color: 'red' }}>
            {item.active ? 'inactive' : 'active'}
          </span>
          ?
        </span>
      ),
      onOk: async () => {
        try {
          await updateStatusUser({ ...item, active: !item.active });
          this.fetchUser();
        } catch (err) {}
      },
      onCancel() {}
    });
  };
  handleSearch = async value => {
    if (isEmpty(value.trim())) {
      this.fetchUser();
    } else {
      const res = await searchUser({ name: value });
      this.setState({ userList: res.data });
    }
  };
  changePagination = (page, pageSize) => {
    this.fetchUser({ page: page - 1 });
  };
  render() {
    const { visibleModal, userList } = this.state;
    const columns = [
      {
        title: 'STT',
        dataIndex: 'no',
        align: 'center',
        render: (text, record, index) => (
          <span>{userList.number * 5 + index + 1}</span>
        ),
        key: 'no'
      },
      {
        title: 'Username',
        dataIndex: 'username',
        key: 'username'
      },
      {
        title: 'Tên',
        dataIndex: 'fullname',
        key: 'fullname'
      },
      {
        title: 'Địa Chỉ',
        dataIndex: 'address',
        key: 'address'
      },
      {
        title: 'Ngày Sinh',
        dataIndex: 'birthday',
        key: 'birthday'
      },
      {
        title: 'Số Điện Thoại',
        dataIndex: 'phone',
        key: 'phone',
        align: 'center'
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
      },
      {
        title: 'Vai Trò',
        dataIndex: 'roleId',
        key: 'roleId',
        align: 'center'
      },
      {
        title: 'Status',
        dataIndex: 'active',
        render: (text, record) => (
          <span>
            {record.active ? (
              <span style={{ color: '#1890ff' }}>active</span>
            ) : (
              <span style={{ color: 'red' }}>inative</span>
            )}
          </span>
        ),
        align: 'center',
        key: 'active'
      },
      {
        title: 'Hành Động',
        dataIndex: 'action',
        render: (text, record) => (
          <Tooltip title="Chỉnh Sửa Thông Tin Nhân Viên">
            <Icon
              type="edit"
              className="edit-icon"
              onClick={() => this.handelUpdate(record)}
            />
          </Tooltip>
        ),
        align: 'center',
        key: 'action'
      }
    ];
    return (
      <div style={{ paddingLeft: '20%', paddingTop: '5%' }}>
        <div className="col-lg-12 header-page-container">
          <Button
            type="primary"
            className="create-btn"
            onClick={this.openModal}
          >
            Tạo Mới Account
          </Button>

          <Input.Search
            placeholder="Search"
            onSearch={this.handleSearch}
            enterButton
          />
        </div>
        <div className="card-body">
          <Table
            dataSource={userList.content || []}
            columns={columns}
            bordered
            pagination={false}
          />
          {!isEmpty(userList) && (
            <div className="pagination-container">
              <Pagination
                defaultCurrent={1}
                defaultPageSize={5}
                onChange={this.changePagination}
                total={userList.content ? userList.totalElements : 0}
              />
            </div>
          )}
        </div>

        {visibleModal && (
          <StaffModal
            visible={visibleModal}
            cancelModal={this.handleCancel}
            fetchData={this.fetchUser}
          />
        )}
      </div>
    );
  }
}
export default StaffListPage;
