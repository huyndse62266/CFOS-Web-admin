import * as Types from './../constants/ActionTypes';
import callApi from '../utils/ApiCaller';
// Khai báo các action
// Tham so o day la cac products
// Thay vì gọi từng action bên component thì mình gọp nó ở đây bên kia chỉ việc gọi ra sử dụng
// Không gọi trực tiếp trong component mà liên kết đến store

// Sau khi khai báo các action thì mình truyền qua reducer
// Phải có dữ liệu mới dispatch action được
export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data))

        });
    }
}
// Lưu products lên store
export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}