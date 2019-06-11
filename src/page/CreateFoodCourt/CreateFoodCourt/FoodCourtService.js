import api from '../../../utils/helpers/api'; //config api with axios

export const getListRoles = () => {
    return api({
        method: 'get',
        url: '/api/all-role'
    });
}
export const getListFoodCourt = () => {
    return api({
        method: 'get',
        url: '/api/all/food-court'
    });
}
export const createFoodCourt = data => {
    return api({
        method: 'post',
        url: '/api/auth/sign-up',
        data
    });
}