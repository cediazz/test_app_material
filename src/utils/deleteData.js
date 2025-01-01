import axios from 'axios'


async function DeleteData(url,token){

    
    try{
        let res = await axios.delete(url,{
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
export default DeleteData