import api from '../../../utils/helpers/api';
export const createMember = data => {
    return api({
        method: 'post',
        url: '/api/auth/sign-up',
        data
    });
}