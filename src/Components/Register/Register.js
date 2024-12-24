import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import * as Yup from 'yup';
import UsernameField from '../UsernameField/UsernameField'
import PasswordField from '../PasswordField/PasswordField'
import { useFormik } from 'formik';
import EmailField from '../EmailField/EmailField';

const Register = () => {
  
  
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Se requiere nombre de usuario'),
    password: Yup.string().required('Se requiere password'),
    email : Yup.string().email('Inserte un email válido').required('Se requiere email'),
  })

  const formik = useFormik({
    initialValues: { username: '' , password: '' , email:''},
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values)
  })

  const  handleSubmit = async  (values) => {
    
    try {
      
     
      
  }
  catch (error) {
     

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
      </Box>
  )
}

export default Register