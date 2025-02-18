import {
  Box,
  Button,
  Typography,
} from '@mui/material'
import * as Yup from 'yup'
import UsernameField from '../UsernameField/UsernameField'
import PasswordField from '../PasswordField/PasswordField'
import { useFormik } from 'formik';
import EmailField from '../EmailField/EmailField'
import axios from 'axios'
import { Link } from "react-router-dom"
import { useContext, useState } from 'react'
import { NotificationContext } from '../../utils/notificationContext'
import Loading from '../Loading/Loading'

const Register = () => {


  const { setSnackbarMessage, setSnackbarSeverity, setSnackbarState } = useContext(NotificationContext)
  const [loading, setLoading] = useState(false)

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Se requiere nombre de usuario'),
    password: Yup.string()
      .required('Se requiere password')
      .min(8, 'El password debe tener al menos 8 caracteres')
      .max(20, 'El password debe ser menor o igual a 20 caracteres')
      .matches(/[A-Za-z]/, 'La contraseña debe contener al menos una letra')
      .matches(/\d/, 'La contraseña debe contener al menos un número')
      .matches(/[A-ZÁÉÍÓÚÜÑ]/, 'La contraseña debe contener al menos una mayúscula')
      .matches(/[a-záéíóúüñ]/, 'La contraseña debe contener al menos una minúscula'),
    email: Yup.string().email('Inserte un email válido').required('Se requiere email'),
  })

  const formik = useFormik({
    initialValues: { username: '', password: '', email: '' },
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values)
  })

  const handleSubmit = async (values) => {
    setLoading(true)
    try {
      let res = await axios.post('https://pruebareactjs.test-class.com/Api/api/Authenticate/register', values)
      if (res.status === 200) {
        setSnackbarMessage(res.data.message)
        setSnackbarSeverity('success');
        setSnackbarState(prev => ({ ...prev, open: true }))
        setLoading(false)
      }
    }
    catch (error) {
      setSnackbarMessage('Error en el registro. Inténtalo de nuevo.')
      setSnackbarSeverity('error')
      setSnackbarState(prev => ({ ...prev, open: true }))
      setLoading(false)
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        bgcolor: '#f5f5f5',
        p: 2,
      }}
    >
      {loading ? <Loading /> :
        <>
          <Typography variant="h4" gutterBottom>
            Registro
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '300px',
                bgcolor: 'white',
                borderRadius: '8px',
                boxShadow: 3,
                p: 3,
              }}
            >
              <UsernameField formik={formik} />
              <PasswordField formik={formik} />
              <EmailField formik={formik} />
              <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
                Registrarme
              </Button>
              <Typography variant="body2" sx={{ mt: 2 }}>
                <Link to="/login">
                  ¿Ya tiene una cuenta? autentíquese aquí
                </Link>
              </Typography>
            </Box>
          </form>
        </>
      }
    </Box>

  )
}

export default Register