import {
    Button,
    Typography,

} from '@mui/material'
import Grid from '@mui/material/Grid2'
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom"
import CustomersSearch from './CustomersSearch';

const Customers = () => {

    return (
        <>
            <Grid container >
                <Grid size={{ xs: 12, md: 8, lg: 8 }} >
                    <Typography variant="h6" color='appbar'>
                        Consulta de CLientes
                    </Typography>

                </Grid>
                <Grid size={{ xs: 12, md: 4, lg: 4 }} >
                    <Stack spacing={1} direction="row">
                        <Link to="/customer-maintenance" >
                            <Button variant="outlined" color='appbar'><AddIcon /> Agregar</Button>
                        </Link>
                        <Link to="/" >
                            <Button variant="outlined" color='appbar'><ArrowBackIcon /> Regresar</Button>
                        </Link>
                    </Stack>
                </Grid>
            </Grid>
            <CustomersSearch />
        </>
    )
}
export default Customers