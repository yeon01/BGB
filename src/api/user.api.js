import { BASE_URL } from '../config/constants'
import axios from 'axios'

// 연결 테스트 (?)
export const getTest = (id, password) => {
    return axios.post(`${BASE_URL}`, { id, password });
}

// 유저조회
export const getUser = (data) => {
    return axios.get(`${BASE_URL}/user`, data);
        // .then(res => console.log(res.data))
        // .catch(error => console.log(error))
}

// 회원가입
export const postUser = (data) => {
    return axios.post(`${BASE_URL}/users`, data);
}