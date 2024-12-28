import {
    Button,
    Typography,

} from '@mui/material'
import Grid from '@mui/material/Grid2'
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom"
import CustomersSearch from './CustomersSearch';
import CustomersTable from './CustomersTable'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import postData from '../../utils/postData';
import Container from '@mui/material/Container';

const Customers = () => {

    const [customers, setCustomers] = useState([])
    const navigate = useNavigate()
    const accessToken = localStorage.getItem('access')
    const [formData, setFormData] = useState({
        "usuarioId": localStorage.getItem('user_id'),
        "identificacion": "",
        "nombre": ""
    })
    const url = 'https://pruebareactjs.test-class.com/Api/api/Cliente/Listado'


    const getcustomers = async () => {

        try {

            let res = await postData(url, formData, accessToken)
            console.log(res)
            if (res.status == 401) {
                navigate('/login')
            }
            else if (res.status == 200)
                setCustomers(res.data)
        }
        catch (error) {
            navigate('/error404')

        }

    }

    useEffect(() => {
        if (!localStorage.getItem('username'))
            navigate("/login")
        else {
            getcustomers()

        }

    }, [])

    return (
        <Container fixed
            sx={{
                bgcolor: 'white',
                borderRadius: '8px',
                boxShadow: 3,
                p: 3,
                marginTop: 3,
                width: {
                    xs: '350px',
                    sm: '360px',
                    md: '850px',
                    lg: '1000px',
                    xl: '1000px'
                },
                mx: 'auto'
            }}
        >
            <Grid container >
                <Grid size={{ xs: 12, md: 8, lg: 8 }} >
                    <Typography variant="h6" color='appbar'>
                        Consulta de CLientes
                    </Typography>

                </Grid>
                <Grid size={{ xs: 12, md: 4, lg: 4 }} >
                    <Stack spacing={1} direction="row">
                        <Link to="/customer-maintenance/" >
                            <Button variant="outlined" color='appbar'><AddIcon /> Agregar</Button>
                        </Link>
                        <Link to="/" >
                            <Button variant="outlined" color='appbar'><ArrowBackIcon /> Regresar</Button>
                        </Link>
                    </Stack>
                </Grid>
            </Grid>

            <CustomersSearch />
            <CustomersTable customers={customers} />
        </Container>
    )
}
export default Customers