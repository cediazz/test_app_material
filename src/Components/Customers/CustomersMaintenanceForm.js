import { TextField, FormHelperText } from '@mui/material';
import Grid from '@mui/material/Grid2'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Interest from '../Interest/Interest';


function CustomersMaintenanceForm(props) {



    return (

        <Grid container spacing={2} sx={{ marginTop: 3 }}>
            <Grid item size={{ xs: 12, md: 4, lg: 4 }} >
                <TextField
                    fullWidth
                    label="Identificación*"
                    name='identificacion'
                    variant="outlined"
                    value={props.formik.values.identificacion}
                    onChange={props.formik.handleChange}
                    onBlur={props.formik.handleBlur}
                    error={props.formik.touched.identificacion && Boolean(props.formik.errors.identificacion)}
                    helperText={props.formik.touched.identificacion && props.formik.errors.identificacion}
                />
            </Grid>
            <Grid item size={{ xs: 12, md: 4, lg: 4 }} >
                <TextField
                    fullWidth
                    label="Nombre*"
                    name='nombre'
                    variant="outlined"
                    value={props.formik.values.nombre}
                    onChange={props.formik.handleChange}
                    onBlur={props.formik.handleBlur}
                    error={props.formik.touched.nombre && Boolean(props.formik.errors.nombre)}
                    helperText={props.formik.touched.nombre && props.formik.errors.nombre}
                />
            </Grid>
            <Grid item size={{ xs: 12, md: 4, lg: 4 }} >
                <TextField
                    fullWidth
                    label="Apellidos*"
                    name='apellidos'
                    variant="outlined"
                    value={props.formik.values.apellidos}
                    onChange={props.formik.handleChange}
                    onBlur={props.formik.handleBlur}
                    error={props.formik.touched.apellidos && Boolean(props.formik.errors.apellidos)}
                    helperText={props.formik.touched.apellidos && props.formik.errors.apellidos}
                />
            </Grid>
            <Grid item size={{ xs: 12, md: 4, lg: 4 }} >
                <FormControl fullWidth>
                    {props.formik.touched.sexo && Boolean(props.formik.errors.sexo) ?
                        <InputLabel id="selectGen">
                            <div style={{ color: '#D32F2F' }}>Género*</div>
                        </InputLabel> :
                        <InputLabel id="selectGen">Género*</InputLabel>
                    }
                    <Select
                        labelId="selectGen"
                        label="Género*"
                        name='sexo'
                        variant="outlined"
                        value={props.formik.values.sexo}
                        onChange={props.formik.handleChange}
                        onBlur={props.formik.handleBlur}
                        error={props.formik.touched.sexo && Boolean(props.formik.errors.sexo)}
                        helperText={props.formik.touched.sexo && props.formik.errors.sexo}

                    >
                        <MenuItem value={'Seleccione'} disabled={true}>Seleccione</MenuItem>
                        <MenuItem value={'F'}>Femenino</MenuItem>
                        <MenuItem value={'M'}>Masculino</MenuItem>
                    </Select>
                    <FormHelperText sx={{ color: '#D32F2F' }}>
                        {props.formik.touched.sexo && props.formik.errors.sexo}
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item size={{ xs: 12, md: 4, lg: 4 }} >
                <TextField
                    fullWidth
                    type='date'
                    label="Fecha de nacimiento*"
                    name="fNacimiento"
                    value={props.formik.values.fNacimiento}
                    onChange={props.formik.handleChange}
                    onBlur={props.formik.handleBlur}
                    error={props.formik.touched.fNacimiento && Boolean(props.formik.errors.fNacimiento)}
                    helperText={props.formik.touched.fNacimiento && props.formik.errors.fNacimiento}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item size={{ xs: 12, md: 4, lg: 4 }} >
                <TextField
                    fullWidth
                    type='date'
                    label="Fecha de afiliación*"
                    name="fAfiliacion"
                    value={props.formik.values.fAfiliacion}
                    onChange={props.formik.handleChange}
                    onBlur={props.formik.handleBlur}
                    error={props.formik.touched.fAfiliacion && Boolean(props.formik.errors.fAfiliacion)}
                    helperText={props.formik.touched.fAfiliacion && props.formik.errors.fAfiliacion}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

            </Grid>
            <Grid item size={{ xs: 12, md: 4, lg: 4 }} >
                <TextField
                    fullWidth
                    label="Teléfono celular*"
                    name='telefonoCelular'
                    variant="outlined"
                    value={props.formik.values.telefonoCelular}
                    onChange={props.formik.handleChange}
                    onBlur={props.formik.handleBlur}
                    error={props.formik.touched.telefonoCelular && Boolean(props.formik.errors.telefonoCelular)}
                    helperText={props.formik.touched.telefonoCelular && props.formik.errors.telefonoCelular}
                />
            </Grid>
            <Grid item size={{ xs: 12, md: 4, lg: 4 }} >
                <TextField
                    fullWidth
                    label="Teléfono otro*"
                    name='otroTelefono'
                    variant="outlined"
                    value={props.formik.values.otroTelefono}
                    onChange={props.formik.handleChange}
                    onBlur={props.formik.handleBlur}
                    error={props.formik.touched.otroTelefono && Boolean(props.formik.errors.otroTelefono)}
                    helperText={props.formik.touched.otroTelefono && props.formik.errors.otroTelefono}

                />
            </Grid>
            <Grid item size={{ xs: 12, md: 4, lg: 4 }} >
                <Interest formik={props.formik} />
            </Grid>
            <Grid item size={12} >
                <TextField
                    fullWidth
                    label="Dirección"
                    name='direccion'
                    variant="outlined"
                    value={props.formik.values.direccion}
                    onChange={props.formik.handleChange}
                    onBlur={props.formik.handleBlur}
                    error={props.formik.touched.direccion && Boolean(props.formik.errors.direccion)}
                    helperText={props.formik.touched.direccion && props.formik.errors.direccion}
                />
            </Grid>
            <Grid item size={12} >
                <TextField
                    fullWidth
                    label="Reseña"
                    name='resenaPersonal'
                    variant="outlined"
                    value={props.formik.values.resenaPersonal}
                    onChange={props.formik.handleChange}
                    onBlur={props.formik.handleBlur}
                    error={props.formik.touched.resenaPersonal && Boolean(props.formik.errors.resenaPersonal)}
                    helperText={props.formik.touched.resenaPersonal && props.formik.errors.resenaPersonal}

                />
            </Grid>
        </Grid>
    )
}
export default CustomersMaintenanceForm