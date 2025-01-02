import { useState } from 'react'
import {
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
  FormHelperText
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

function PasswordField(props) {

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  return (
    <FormControl fullWidth sx={{ mt: 2 }}>
      {props.formik.touched.password && Boolean(props.formik.errors.password) ?
        <InputLabel htmlFor="outlined-adornment-password">
          <div style={{ color: '#D32F2F' }}>Password</div>
        </InputLabel> :
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      }
      <OutlinedInput
        name='password'
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        label="Password"
        variant="outlined"
        value={props.formik.values.password}
        onChange={props.formik.handleChange}
        onBlur={props.formik.handleBlur}
        error={props.formik.touched.password && Boolean(props.formik.errors.password)}
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
      />
      <FormHelperText sx={{ color: '#D32F2F' }}>
        {props.formik.touched.password && props.formik.errors.password}
      </FormHelperText>
    </FormControl>
  )
}
export default PasswordField