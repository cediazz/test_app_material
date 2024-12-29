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
import PersonIcon from '@mui/icons-material/Person'
import SaveIcon from '@mui/icons-material/Save';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

const CustomersMaintenance = () => {

    const navigate = useNavigate()
    const accessToken = localStorage.getItem('access')
    const url = 'https://pruebareactjs.test-class.com/Api/api/Cliente/Listado'


    const addcustomer = async (values) => {

        try {

            let res = await postData(url, values, accessToken)
            console.log(res)


        }
        catch (error) {
            if (error.status == 401)
                navigate('/login')
            else
                navigate('/error404')

        }

    }

    useEffect(() => {
        if (!localStorage.getItem('username'))
            navigate("/login")
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
            <Grid container spacing={1} >
                <Grid size={{ xs: 12, md: 8, lg: 8 }} >
                    <Typography variant="h6" color='appbar' sx={{
                        display: 'flex',
                        alignItems: 'center',

                    }}>
                        <AccountCircleSharpIcon sx={{ width: 50, height: 50 }} />
                        Mantenimiento de clientes
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 4, lg: 4 }} >
                    <form>
                        <Stack spacing={1} direction="row">
                            <Link to="/customer-maintenance/" >
                                <Button variant="outlined" color='appbar' type='submit'><SaveIcon /> Guardar</Button>
                            </Link>
                            <Link to="/" >
                                <Button variant="outlined" color='appbar'><ArrowBackIcon /> Regresar</Button>
                            </Link>
                        </Stack>
                    </form>
                </Grid>
            </Grid>


        </Container>
    )
}
export default CustomersMaintenance