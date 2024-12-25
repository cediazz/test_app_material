import {
  Box,
  Button,
  Typography,
  Snackbar,
  Alert
} from '@mui/material';
import * as Yup from 'yup';
import UsernameField from '../UsernameField/UsernameField'
import PasswordField from '../PasswordField/PasswordField'
import { useFormik } from 'formik';
import EmailField from '../EmailField/EmailField';
import axios from 'axios'
import { useState } from 'react'
import { Link } from "react-router-dom"

const Register = () => {


  const [snackbarState, setSnackbarState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = snackbarState
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarSeverity, setSnackbarSeverity] = useState('success')

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

    try {
      let res = await axios.post('https://pruebareactjs.test-class.com/Api/api/Authenticate/register', values)
      console.log(res)
      if (res.status === 200) {
        setSnackbarMessage(res.data.message)
        setSnackbarSeverity('success');
        setSnackbarState(prev => ({ ...prev, open: true }))
      }
    }
    catch (error) {
      setSnackbarMessage('Error en el registro. Inténtalo de nuevo.')
      setSnackbarSeverity('error')
      setSnackbarState(prev => ({ ...prev, open: true }))
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
        </Box>
      </form>
      {/* Snackbar for notifications */}
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={open}  >
        <Alert sx={{ width: '100%' }} severity={snackbarSeverity}>
          {snackbarMessage}
          {snackbarSeverity === 'success' &&
            <Link to="/login" style={{ marginLeft: '2px' }}>
              Ya puede autenticarse
            </Link>}
        </Alert>
      </Snackbar>
    </Box>

  )
}

export default Register