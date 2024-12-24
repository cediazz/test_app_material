import {TextField} from '@mui/material';


function EmailField(props){

    return(
        <TextField
              id="email"
              name="email"
              type='email'
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={props.formik.values.email}
              onChange={props.formik.handleChange}
              onBlur={props.formik.handleBlur}
              error={props.formik.touched.email && Boolean(props.formik.errors.email)}
              helperText={props.formik.touched.email && props.formik.errors.email}
        />
    )
}
export default EmailField