import { useState,useEffect } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material';
import { Link } from "react-router-dom"
import * as Yup from 'yup';
import UsernameField from '../UsernameField/UsernameField'
import PasswordField from '../PasswordField/PasswordField'
import { useFormik } from 'formik';
import authenticate from '../../utils/authentication';

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false)
  const [username, setUsername] = useState(localStorage.getItem('usernameRemember') || '')

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
          /*localStorage.setItem('refresh', res.data.refresh)
          localStorage.setItem('access', res.data.access)
          localStorage.setItem('username', res.data.username)
          localStorage.setItem('image', res.data.image)
          localStorage.setItem('user_id', res.data.id)
          setUser({ 'username': res.data.username, 'image': res.data.image }) //update authenticated user
          setLoading(false)
          navigate("/");*/
      } else if (res.status == 401) {
         /* Swal.fire({
              icon: "error",
              title: "Oops...",
              text: res.response.data.detail,
              confirmButtonColor: '#F27474'
          });
          setLoading(false)*/
      }
  }
  catch (error) {
      /*Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
          confirmButtonColor: '#F27474'
      });
      setLoading(false)*/

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
      </Box>
  )
}

export default Login
