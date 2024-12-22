import { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material';
import { Link } from "react-router-dom"
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import UsernameField from '../UsernameField/UsernameField';
import PasswordField from '../PasswordField/PasswordField';

const Login = () => {
  
  const [rememberMe, setRememberMe] = useState(false);
  
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('se requiere nombre de usuario'),
    password: Yup.string().required('se requiere password'),

  })

  const handleSubmit = (values) => {
   console.log(values)
    };

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
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
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
            <UsernameField />
            <PasswordField />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  color="primary"
                />
              }
              label="Recuérdame"
            />
            <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
              Iniciar Sesión
            </Button>
            <Typography variant="body2" sx={{ mt: 2 }}>
              <Link to="/register">
                ¿No tiene una cuenta? Regístrese
              </Link>
            </Typography>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};

export default Login;
