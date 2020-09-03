import axios from 'axios';

const get = url => {
    return axios.get(url)
        .then(res => {
            return res
        }
        )
}

const post = (url, data) => {
    return axios.post(url, data)
        .then(res => {
            return res
        })
}


const put = (url, data) => {
    return axios.put(url, data)
        .then(res => {
            return res
        })
}

const deleteData = (url, id) => {
    return axios.delete(url, id)
        .then(res => {
            return res
        })
}
export const userService = {
    get,
    post,
    put,
    deleteData
};