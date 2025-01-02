import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import { FormHelperText } from '@mui/material'
import Select from '@mui/material/Select'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import getData from '../../utils/getData'


function Interest(props) {

    const [interest, setInterest] = useState([])
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

    useEffect(() => {
        getinterest()
    }, [])

    return (
        <FormControl fullWidth>
            {props.formik.touched.interesFK && Boolean(props.formik.errors.interesFK) ?
                <InputLabel id="selectInterest">
                    <div style={{ color: '#D32F2F' }}>Interes*</div>
                </InputLabel> :
                <InputLabel id="selectInterest">Interes*</InputLabel>
            }
            <Select
                labelId="selectInterest"
                label="Interes*"
                name='interesFK'
                variant="outlined"
                value={props.formik.values.interesFK}
                onChange={props.formik.handleChange}
                onBlur={props.formik.handleBlur}
                error={props.formik.touched.interesFK && Boolean(props.formik.errors.interesFK)}
                helperText={props.formik.touched.interesFK && props.formik.errors.interesFK}
            >
                <MenuItem value={'Seleccione'} disabled={true}>Seleccione</MenuItem>
                {interest.map(value => (
                    <MenuItem value={value.id}>{value.descripcion}</MenuItem>
                ))}
            </Select>
            <FormHelperText sx={{ color: '#D32F2F' }}>
                {props.formik.touched.interesFK && props.formik.errors.interesFK}
            </FormHelperText>
        </FormControl>
    )
}
export default Interest