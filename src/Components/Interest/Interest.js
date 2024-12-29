import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import getData from '../../utils/getData';

function Interest(props) {

    const [interest,setInterest] = useState([])
    const navigate = useNavigate()
    const accessToken = localStorage.getItem('access')
    const url = 'https://pruebareactjs.test-class.com/Api/api/Intereses/Listado'

    const getinterest = async () => {

        try {

            let res = await getData(url, accessToken)
            if (res.status == 200)
                setInterest(res.data)
            }
        catch (error) {
            if (error.status == 401)
                navigate('/login')
            else
                navigate('/error404')

        }

    }

    useEffect(()=>{
        getinterest()
    },[])

    return (
        <FormControl fullWidth>
            <InputLabel id="selectInterest">Interes*</InputLabel>
            <Select
                labelId="selectInterest"
                fullWidth
                label="Interes*"
                name='interesFK'
                variant="outlined"
                >
                {interest.map(value => (
                    <MenuItem value={value.id}>{value.descripcion}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
export default Interest