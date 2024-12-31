import {
    Button,
    Snackbar,
    Alert,
   
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import postData from '../../utils/postData';
import Container from '@mui/material/Container';
import SaveIcon from '@mui/icons-material/Save';
import CustomersMaintenanceForm from './CustomersMaintenanceForm';
import * as Yup from 'yup';
import { useFormik } from 'formik'
import ImageCustomersField from '../ImageCustomersField/ImageCustomersField';

const CustomersMaintenance = () => {

    const navigate = useNavigate()
    const accessToken = localStorage.getItem('access')
    const userId = localStorage.getItem('user_id')
    const url = 'https://pruebareactjs.test-class.com/Api/api/Cliente/Crear'
    const [snackbarState, setSnackbarState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    })
    const { vertical, horizontal, open } = snackbarState
    const [snackbarMessage, setSnackbarMessage] = useState('')
    const [snackbarSeverity, setSnackbarSeverity] = useState('success')

    const validationSchema = Yup.object().shape({
        identificacion: Yup.string().required('La identificación es obligatoria'),
        nombre: Yup.string().required('El nombre es obligatorio'),
        apellidos: Yup.string().required('Los apellidos son obligatorios'),
        sexo: Yup.string().notOneOf(['Seleccione'], 'Por favor, seleccione un género'),
        fNacimiento: Yup.date().required('La fecha de nacimiento es obligatoria'),
        fAfiliacion: Yup.date().required('La fecha de afiliación es obligatoria'),
        celular: Yup.string().required('El teléfono celular es obligatorio'),
        otroTelefono: Yup.string().required('El teléfono es obligatorio'),
        direccion: Yup.string().required('La dirección es obligatoria'),
        resennaPersonal: Yup.string().required('La reseña es obligatoria'),
        interesFK: Yup.string().notOneOf(['Seleccione'], 'Por favor, seleccione un interés')
    });

    const formik = useFormik({
        initialValues: {
            identificacion: '',
            nombre: '',
            apellidos: '',
            sexo: 'Seleccione',
            fNacimiento: null,
            fAfiliacion: null,
            celular: '',
            otroTelefono: '',
            direccion: '',
            resennaPersonal: '',
            interesFK: 'Seleccione',
            imagen: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => addcustomer(values)
    });


    const addcustomer = async (values) => {

        values['usuarioId'] = userId
        try {

            let res = await postData(url, values, accessToken)
            if (res.status === 200) {
                setSnackbarMessage("Cliente agregado")
                setSnackbarSeverity('success');
                setSnackbarState(prev => ({ ...prev, open: true }))
            }


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
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={1} >

                    <Grid size={{ xs: 12, md: 8, lg: 8 }} >
                    <ImageCustomersField formik={formik}/>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4, lg: 4 }} >

                        <Stack spacing={1} direction="row">
                            <Button variant="outlined" color='appbar' type='submit'><SaveIcon /> Guardar</Button>
                            <Link to="/" >
                                <Button variant="outlined" color='appbar'><ArrowBackIcon /> Regresar</Button>
                            </Link>
                        </Stack>

                    </Grid>
                </Grid>
                <CustomersMaintenanceForm formik={formik} />
            </form>
            <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={4000}  >
                <Alert sx={{ width: '100%' }} severity={snackbarSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Container>
    )
}
export default CustomersMaintenance