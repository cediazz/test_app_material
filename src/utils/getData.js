import axios from 'axios'


async function getData(url,token){

    
    try{
        let res = await axios.get(url,{
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
export default getData