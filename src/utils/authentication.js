import axios from 'axios'

async function authenticate(credentials){
    try{
        
        let response = await axios.post('https://pruebareactjs.test-class.com/Api/api/Authenticate/login',credentials)
        return response
    }
    catch(error){
        return error
    }

}
export default authenticate