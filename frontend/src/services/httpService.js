import Axios from 'axios';
// import router from '../router';

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/'
    : 'http://localhost:3000/' ;



var axios = Axios.create({
    withCredentials:true
})

export default{
    get(endpoint,data){
        return ajax(endpoint,'GET',data);
    },
    post(endpoint,data){
        return ajax(endpoint,'POST',data)
    },
    put(endpoint,data){
        return ajax(endpoint,'PUT',data)
    },
    remove(endpoint,data){
        return ajax(endpoint,'DELETE',data)
    }
}

async function ajax(endpoint,method,data=null){
    try{
        var res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data
        })
        return res.data;
    }
    catch(err){
        if(err.response.status === 401){
            // console.log('Error Status!')
            // router.push('/')
        }
    }
}