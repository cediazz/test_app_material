import {
    Button,
    TextField,
    Fab
}
    from '@mui/material';
import Grid from '@mui/material/Grid2'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

function CustomersSearch(props) {

     const [name, setName] = useState()
     const [identification, setIDentification] = useState()
    
      const  handleSubmit =  (event) => {
        event.preventDefault()
        props.setFormData(prev => ({...prev, "identificacion": identification,"nombre": name}))
        
      }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ marginTop: 3 }}>
                <Grid item size={{ xs: 12, md: 5, lg: 5 }} >
                    <TextField 
                    fullWidth 
                    size="small" 
                    label="Nombre" 
                    name='nombre' 
                    variant="outlined" 
                    onChange={ e => setName(e.target.value)}
                   />
                </Grid>
                <Grid item size={{ xs: 12, md: 5, lg: 5 }} >
                    <TextField 
                    fullWidth 
                    size="small" 
                    label="Identificación" 
                    name='identificacion' 
                    variant="outlined" 
                    onChange={ e => setIDentification(e.target.value)}
                    />
                </Grid>
                <Grid item size={{ xs: 12, md: 2, lg: 2 }}>
                    <Fab size="small" color="appbar" type="submit" >
                        <SearchIcon />
                    </Fab>
                </Grid>
            </Grid>

        </form>
    )
}
export default CustomersSearch