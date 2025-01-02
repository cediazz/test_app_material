import { useState, useEffect } from 'react'
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
import { useFormik } from 'formik'
import authenticate from '../../utils/authentication'
import { useNavigate } from "react-router-dom";
import { useContext } from 'react'
import { NotificationContext } from '../../utils/notificationContext'
import Loading from '../Loading/Loading'
import { UserContext } from '../../utils/userContext'

const Login = () => {

  const { setSnackbarMessage, setSnackbarSeverity, setSnackbarState } = useContext(NotificationContext)
  const { user, setUser } = useContext(UserContext)
  const [rememberMe, setRememberMe] = useState(false)
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    if (user) {
      setRememberMe(true)
    }
  }, [])

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Se requiere nombre de usuario'),
    password: Yup.string().required('Se requiere password'),
  })

  const formik = useFormik({
    initialValues: { username: user, password: '' },
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values)
  })

  const handleSubmit = async (values) => {
    setLoading(true)
    if (rememberMe) {
      setUser(values.username)
    } else {
      setUser('')
    }
    try {
      let res = await authenticate(values)
      if (res.status == 200) {
        localStorage.setItem('access', res.data.token)
        localStorage.setItem('username', res.data.username)
        localStorage.setItem('user_id', res.data.userid)
        setLoading(false)
        navigate("/")
      } else if (res.status == 401) {
        setSnackbarMessage('Error en la autenticación')
        setSnackbarSeverity('error')
        setSnackbarState(prev => ({ ...prev, open: true }))
        setLoading(false)
      }
    }
    catch (error) {
      setSnackbarMessage('Error')
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
                  setRememberMe(e.target.checked)
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
      </>
      }
    </Box>
  )
}

export default Login
