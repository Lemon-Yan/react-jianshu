import Axios from "axios";
import * as constants from './constants';

export const getDetail = (id) => {
    return (dispatch) => {
        Axios.get('/api/detail.json?id=' + id).then((res) => {
            let result = res.data.data;
            dispatch(changleDetail(result.title, result.content));
        }).catch(()=>{
            console.log('请求失败');
        })
    }
}

const changleDetail = (title, content) => ({
    type: constants.CHANGE_DETAIL,
    title,
    content
})