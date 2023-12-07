import client from './client'

export const createUser = async (userInfo) => {
    try {
        const { data } = await client.post('/user/create', userInfo)
        return data;
    } catch (err) {
        const { response } = err;
        if (response?.data) return response.data;
        return { error: err.message || err }
    }
}

export const verifyUserEmail = async (userInfo) => {
    try {
        const { data } = await client.post('/user/verify-email', userInfo)
        return data;
    } catch (err) {
        const { response } = err;
        if (response?.data) return response.data;
        return { error: err.message || err }
    }
}

export const signInUser = async (userInfo) => {
    try {
        const { data } = await client.post('/user/sign-in', userInfo)
        return data;
    } catch (err) {
        const { response } = err;
        if (response?.data) return response.data;
        return { error: err.message || err }
    }
}

export const getIsAuth = async (token) => {
    try {
        const { data } = await client.get('/user/is-auth', {
            headers: {
                Authorization: 'Bearer ' + token,
                accept: 'application/json'
            }
        })
        return data;
    } catch (err) {
        const { response } = err;
        if (response?.data) return response.data;
        return { error: err.message || err }
    }
}
export const forgetPassword = async (email) => {
    try {
        const { data } = await client.post('/user/forget-password',{ email })
        return data;
    } catch (err) {
        const { response } = err;
        if (response?.data) return response.data;
        return { error: err.message || err }
    }
}