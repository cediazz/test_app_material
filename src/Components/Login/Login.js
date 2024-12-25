import { useState,useEffect } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Snackbar,
  Alert
} from '@mui/material';
import { Link } from "react-router-dom"
import * as Yup from 'yup';
import UsernameField from '../UsernameField/UsernameField'
import PasswordField from '../PasswordField/PasswordField'
import { useFormik } from 'formik';
import authenticate from '../../utils/authentication';
import { useNavigate } from "react-router-dom";

const Login = () => {
  
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = snackbarState
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [username, setUsername] = useState(localStorage.getItem('usernameRemember') || '')
  const navigate = useNavigate();

  useEffect(() => {
    const savedUsername = localStorage.getItem('usernameRemember')
    if (savedUsername) {
      setUsername(savedUsername);
      setRememberMe(true);
    }
  }, [])

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Se requiere nombre de usuario'),
    password: Yup.string().required('Se requiere password'),
  })

  const formik = useFormik({
    initialValues: { username: username , password: '' },
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values)
  })

  const  handleSubmit = async  (values) => {
    if (rememberMe) {
      localStorage.setItem('usernameRemember', values.username);
    } else {
      localStorage.removeItem('usernameRemember');
    }
    try {
      let res = await authenticate(values)
      console.log(res)
      if (res.status == 200) {
        localStorage.setItem('access', res.data.token)
        localStorage.setItem('username', res.data.username)
        localStorage.setItem('user_id', res.data.userid)
        navigate("/");
      } else if (res.status == 401) {
        setSnackbarMessage('Error en la autenticación')
        setSnackbarState(prev => ({ ...prev, open: true }))
      }
  }
  catch (error) {
    setSnackbarMessage('Error')
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
        Iniciar Sesión
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
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => {
                      setRememberMe(e.target.checked);
                      }}
                    color="primary"
                  />
                }
                label="Recuérdame"
              />
              <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
                Iniciar Sesión
              </Button>
              <Typography variant="body2" sx={{ mt: 2 }}>
                <Link to="/Register">
                  ¿No tiene una cuenta? Regístrese
                </Link>
              </Typography>
            </Box>
          </form>
          {/* Snackbar for notifications */}
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={open}  >
        <Alert sx={{ width: '100%' }} severity={'error'}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
      </Box>
  )
}

export default Login
