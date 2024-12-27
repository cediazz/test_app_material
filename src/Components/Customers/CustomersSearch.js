import { 
    Button,
    TextField ,
    Fab
} 
from '@mui/material';
import Grid from '@mui/material/Grid2'
import SearchIcon from '@mui/icons-material/Search'

function CustomersSearch() {

    return (
        <form>
            <Grid container spacing={2} sx={{marginTop:3}}>
            <Grid item size={5}>
                <TextField fullWidth size="small"  label="Nombre" variant="outlined" />
                </Grid>
                <Grid item size={5}>
                <TextField fullWidth size="small"  label="Identificación" variant="outlined" />
                </Grid>
                <Grid item size={2}>
                <Fab  size="small"  color="appbar" type="submit" >
                 <SearchIcon /> 
              </Fab>
                </Grid>
                </Grid>
            
        </form>
    )
}
export default CustomersSearch