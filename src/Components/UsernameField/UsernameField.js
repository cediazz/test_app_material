import {TextField} from '@mui/material';


function UsernameField(props){

    return(
        <TextField
              name="username"
              type='text'
              label="Nombre de usuario"
              variant="outlined"
              fullWidth
              margin="normal"
              value={props.formik.values.username}
              onChange={props.formik.handleChange}
              onBlur={props.formik.handleBlur}
              error={props.formik.touched.username && Boolean(props.formik.errors.username)}
              helperText={props.formik.touched.username && props.formik.errors.username}
        />
    )
}
export default UsernameField