import api from '../../utils/helpers/api';
import * as constants from '../../utils/constants/actionType';

export const fetchAllProducts = params => async dispatch => {
  try {
    dispatch({ type: constants.PENDING });
    const { data } = await api({
      method: 'get',
      url: '/api/product',
      params
    });
    dispatch({
      type: constants.FETCH_ALL_PRODUCT + constants.SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({ type: constants.ERROR });
  }
};
