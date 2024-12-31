import {
    Button,
    Typography,

} from '@mui/material'
import Grid from '@mui/material/Grid2'
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom"
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import postData from '../../utils/postData';
import Container from '@mui/material/Container';
import SaveIcon from '@mui/icons-material/Save';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import CustomersMaintenanceForm from './CustomersMaintenanceForm';
import * as Yup from 'yup';
import { useFormik } from 'formik'

const CustomersMaintenance = () => {

    const navigate = useNavigate()
    const accessToken = localStorage.getItem('access')
    const url = 'https://pruebareactjs.test-class.com/Api/api/Cliente/Listado'

    const validationSchema = Yup.object().shape({
        identificacion: Yup.string().required('La identificación es obligatoria'),
        nombre: Yup.string().required('El nombre es obligatorio'),
        apellidos: Yup.string().required('Los apellidos son obligatorios'),
        sexo: Yup.string().notOneOf(['Seleccione'], 'Por favor, seleccione un género'),
        fNacimiento: Yup.date().required('La fecha de nacimiento es obligatoria'),
        fAfiliacion: Yup.date().required('La fecha de afiliación es obligatoria'),
        telefonoCelular: Yup.string().required('El teléfono celular es obligatorio'),
        otroTelefono: Yup.string().required('El teléfono es obligatorio'),
        direccion: Yup.string().required('La dirección es obligatoria'),
        resenaPersonal: Yup.string().required('La reseña es obligatoria'),
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
          telefonoCelular: '',
          otroTelefono: '',
          direccion: '',
          resenaPersonal: '',
          interesFK : 'Seleccione'
        },
        validationSchema: validationSchema,
        onSubmit: (values) => addcustomer(values)
      });


    const addcustomer = async (values) => {

        console.log(values)
        /*try {

            let res = await postData(url, values, accessToken)
            console.log(res)


        }
        catch (error) {
            if (error.status == 401)
                navigate('/login')
            else
                navigate('/error404')

        }*/

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
                        <Typography variant="h6" color='appbar' sx={{
                            display: 'flex',
                            alignItems: 'center',

                        }}>
                            <AccountCircleSharpIcon sx={{ width: 50, height: 50 }} />
                            Mantenimiento de clientes
                        </Typography>
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
        </Container>
    )
}
export default CustomersMaintenance