import Axios from "axios";
import * as constants from './constants';

export const login = (account, password) => {
    return (dispatch) => {
        Axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
            const result = res.data.data;
            if (result) {
                dispatch(changeLogin());
            } else {
                alert('登录失败');
            }
            console.log(res.data);
        })
    }
}

export const logout=()=>({
  type:constants.LOGOUT,
  value:false
})

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})