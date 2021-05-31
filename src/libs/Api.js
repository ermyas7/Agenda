import axios from 'axios';

export default function Api(url){
     async function get(){
        try {
          const res = await axios.get(url)
          const data = res.data;
          return {data, error: ''}  
        } catch (error) {
            return {error: error.message}
        }
    }

    async function patch(data){
        try {
          const res = await axios.patch(url, data)
          const update = res.data;
          return {data: update, error: ''}  
        } catch (error) {
            return {error: error.message}
        }
    }

    return {
        get,
        patch
    }
}