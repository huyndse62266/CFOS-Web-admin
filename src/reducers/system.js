import * as Types from './../constants/ActionTypes'
// Kiểm tra các action
//Tạo ra các state mặc định cho thèn product vd: name,price,quantity....
var initialState = {
    roles: ''
};
// Mỗi lần duyệt qua sẽ nhận được product và index
const system = (state = initialState, action) => {
    switch (action.type) {
        // case gọi action get All và trả về 1 state cho component sử dụng
        // truyền vào các product và lưu vào store
        case Types.FETCH_ROLE:
            return {
                ...state,
                roles: action.payload
            };
        default: return {...state};

    }
}
export default system;