import api from '../../../utils/helpers/api';

export const getListStore = () => {
  return api({
    method: 'get',
    url: '/api/all-store'
  });
};
export const createStore = data => {
  return api({
    method: 'post',
    url: '/api/stores',
    data
  });
};
export const updateStore = data => {
  return api({
    method: 'put',
    url: '/api/stores',
    data
  });
};
