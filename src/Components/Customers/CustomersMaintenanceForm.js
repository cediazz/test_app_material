import {TextField} from '@mui/material';
import Grid from '@mui/material/Grid2'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Interest from '../Interest/Interest';

function CustomersMaintenanceForm(props) {



    const handleSubmit = (event) => {
        event.preventDefault()


    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ marginTop: 3 }}>
                <Grid item size={{ xs: 12, md: 4, lg: 4 }} >
                    <TextField
                        fullWidth
                        label="Identificación*"
                        name='identificacion'
                        variant="outlined"
                    />
                </Grid>
                <Grid item size={{ xs: 12, md: 4, lg: 4 }} >
                    <TextField
                        fullWidth
                        label="Nombre*"
                        name='nombre'
                        variant="outlined"
                    />
                </Grid>
                <Grid item size={{ xs: 12, md: 4, lg: 4 }} >
                    <TextField
                        fullWidth
                        label="Apellidos*"
                        name='apellidos'
                        variant="outlined"
                    />
                </Grid>
                <Grid item size={{ xs: 12, md: 4, lg: 4 }} >
                    <FormControl fullWidth>
                        <InputLabel id="selectGen">Género*</InputLabel>
                        <Select
                            labelId="selectGen"
                            fullWidth
                            label="Género*"
                            name='sexo'
                            variant="outlined"

                        >
                            <MenuItem value={'F'}>Femenino</MenuItem>
                            <MenuItem value={'M'}>Masculino</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item size={{ xs: 12, md: 4, lg: 4 }} >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker 
                            label="Fecha de nacimiento*" 
                            name='fNacimiento'
                            sx={{ width: '100%' }}
                        />
                    </LocalizationProvider>
               </Grid>
                <Grid item size={{ xs: 12, md: 4, lg: 4 }} >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker 
                            label="Fecha de afiliación*" 
                            name='fAfiliacion'
                            sx={{ width: '100%' }}
                        />
                    </LocalizationProvider>

                </Grid>
                <Grid item size={{ xs: 12, md: 4, lg: 4 }} >
                    <TextField
                        fullWidth
                        label="Teléfono celular*"
                        name='telefonoCelular'
                        variant="outlined"
/>
                </Grid>
                <Grid item size={{ xs: 12, md: 4, lg: 4 }} >
                    <TextField
                        fullWidth
                        label="Teléfono otro*"
                        name='otroTelefono'
                        variant="outlined"

                    />
                </Grid>
                <Grid item size={{ xs: 12, md: 4, lg: 4 }} >
                    <Interest />
                </Grid>
                <Grid item size={12} >
                    <TextField
                        fullWidth
                        label="Dirección"
                        name='direccion'
                        variant="outlined"
                    />
                </Grid>
                <Grid item size={12} >
                    <TextField
                        fullWidth
                        label="Reseña"
                        name='resenaPersonal'
                        variant="outlined"

                    />
                </Grid>
            </Grid>

        </form>
    )
}
export default CustomersMaintenanceForm