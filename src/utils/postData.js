import axios from 'axios'


async function postData(url,data,token){

    
    try{
        let res = await axios.post(url,data,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return res
        }
        catch (error) {
            throw error; 
            
        }
    

}
export default postData