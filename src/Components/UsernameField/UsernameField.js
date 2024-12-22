import {TextField} from '@mui/material';
import { Field, ErrorMessage } from 'formik';

function UsernameField(){

    return(
        <Field
              name="username"
              as={TextField}
              type='text'
              label="Nombre"
              variant="outlined"
              fullWidth
              margin="normal"
              helperText={<ErrorMessage name="username" >{(msg) => <div className='error-message'>{msg}</div>}</ErrorMessage>}
        />
    )
}
export default UsernameField