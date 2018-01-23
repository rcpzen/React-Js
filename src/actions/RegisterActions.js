import { axios } from 'axios';

export function userRegisterRequest(userdata){
    return dispatch => {
        return axios.post('/api/users', userdata);
    }
}