import React, { Component } from 'react';
import { Collapse, Icon, Button } from 'antd';
import './CategoryFC.scss';
import { getCategoryFc } from './CategoryService';
import { isEmpty } from '../../../utils/helpers/helpers';
import { MODE } from '../../../utils/constants/constants';
import CategoryFCModal from './CategoryFCModal';
import CategorySubModal from './CategorySubModal';

const Panel = Collapse.Panel;

class CategoriesListPage extends Component {
  state = {
    listCategoryFC: {},
    categoryModal: { visible: false, mode: MODE.ADD, item: {} },
    subCategoryModal: { visible: false, mode: MODE.ADD, item: {}, parent: {} }
  };
  componentDidMount() {
    this.fetchCategory();
  }
  fetchCategory = async () => {
    try {
      const res = await getCategoryFc();
      this.setState({ listCategoryFC: res.data });
    } catch (err) {}
  };

  // category modal
  createCategoryModal = () => {
    const temp = { visible: true, mode: MODE.ADD, item: {} };
    this.setState({ categoryModal: temp });
  };
  editCategoryModal = element => {
    const temp = { visible: true, mode: MODE.EDIT, item: element };
    this.setState({ categoryModal: temp });
  };
  cancelCategoryModal = () => {
    const temp = { visible: false, mode: MODE.ADD, item: {} };
    this.setState({ categoryModal: temp });
  };

  // sub category modal
  createSubCategoryModal = el => {
    const temp = { visible: true, mode: MODE.ADD, item: {}, parent: el };
    this.setState({ subCategoryModal: temp });
  };
  editSubCategoryModal = (element, parentElement) => {
    const temp = {
      visible: true,
      mode: MODE.EDIT,
      item: element,
      parent: parentElement
    };
    this.setState({ subCategoryModal: temp });
  };
  cancelSubCategoryModal = () => {
    const temp = { visible: false, mode: MODE.ADD, item: {}, parent: {} };
    this.setState({ subCategoryModal: temp });
  };

  render() {
    const { listCategoryFC, categoryModal, subCategoryModal } = this.state;
    console.log('test', subCategoryModal);
    return (
      <div className="category-container">
        <div className="col-lg-10">
          <div className="card">
            <div className="header-wrapper">
              <p className="header-page">Category Foodcourt</p>
              <Button type="primary" onClick={this.createCategoryModal}>
                Create Category
              </Button>
            </div>

            <div className="card-body">
              <Collapse
                bordered={false}
                expandIcon={({ isActive }) => (
                  <Icon type="caret-right" rotate={isActive ? 90 : 0} />
                )}
              >
                {!isEmpty(listCategoryFC) &&
                  listCategoryFC.map(el => (
                    <Panel
                      header={el.fcCategoryName}
                      key={el.fcCategoryId}
                      className="panel-item"
                      extra={
                        <span>
                          <Icon
                            type="plus-circle"
                            onClick={e => {
                              this.createSubCategoryModal(el);
                              e.stopPropagation();
                            }}
                          />
                          &nbsp;
                          <Icon
                            type="edit"
                            onClick={e => {
                              this.editCategoryModal(el);
                              e.stopPropagation();
                            }}
                          />
                        </span>
                      }
                    >
                      {!isEmpty(el.categoryVM) &&
                        el.categoryVM.map(item => (
                          <div className="sub-cate-item" key={item.categoryId}>
                            <p className="text-item">{item.categoryName}</p>
                            <Icon
                              type="edit"
                              onClick={e => {
                                this.editSubCategoryModal(item, el);
                                e.stopPropagation();
                              }}
                            />
                          </div>
                        ))}
                    </Panel>
                  ))}
              </Collapse>
            </div>
          </div>
        </div>
        {categoryModal.visible && (
          <CategoryFCModal
            categoryModal={categoryModal}
            cancelModal={this.cancelCategoryModal}
            fetchData={this.fetchCategory}
          />
        )}
        {subCategoryModal.visible && (
          <CategorySubModal
            subCategoryModal={subCategoryModal}
            cancelModal={this.cancelSubCategoryModal}
            fetchData={this.fetchCategory}
          />
        )}
      </div>
    );
  }
}
export default CategoriesListPage;
