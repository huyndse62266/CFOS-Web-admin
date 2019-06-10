import * as constants from '../../utils/constants/actionType';

const initialState = {
  isLoading: false,
  productList: {}
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case constants.PENDING:
      return { ...state, isLoading: true };
    case constants.FETCH_ALL_PRODUCT + constants.SUCCESS:
      return {
        ...state,
        isLoading: false,
        productList: action.payload
      };
    case constants.ERROR:
      return { ...initialState, isLoading: false };
    default:
      return state;
  }
};

export default product;
