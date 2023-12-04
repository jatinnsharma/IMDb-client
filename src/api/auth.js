import client from './client'

export const createUser = async(userInfo) =>{
    try{
       const {data} = await client.post('/user/create',userInfo)
       return data;
    }catch(err){
        const {response} = err;
        if(response?.data) return response.data;
        return {error:err.message || err}
    }
}

export const verifyUserEmail = async(userInfo) =>{
    try{
       const {data} = await client.post('/user/verify-email',userInfo)
       return data;
    }catch(err){
        const {response} = err;
        if(response?.data) return response.data;
        return {error:err.message || err}
    }
}