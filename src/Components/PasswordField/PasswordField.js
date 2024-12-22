import { Field, ErrorMessage } from 'formik'
import { useState } from 'react'
import {
    Typography,
    InputAdornment,
    IconButton,
    OutlinedInput,
    FormControl,
    InputLabel,
  } from '@mui/material';
  import Visibility from '@mui/icons-material/Visibility';
  import VisibilityOff from '@mui/icons-material/VisibilityOff';

function PasswordField(){

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    return(
        <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <Field
                name='password'
                as={OutlinedInput}
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? 'hide the password' : 'display the password'
                      }
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <Typography variant="body2" sx={{ ml: 2 }}><ErrorMessage name="password" >{(msg) => <div className='error-message'>{msg}</div>}</ErrorMessage></Typography>
            </FormControl>
    )
}
export default PasswordField