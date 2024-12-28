import {
    Typography,
    Box,
} from '@mui/material'
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Grid from '@mui/material/Grid2'
import Stack from '@mui/material/Stack'

const Page404 = () => {

    return (
        <Box
            component="main"
            sx={{
                display: 'flex',
                height: '60vh',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}
                >
            <Grid container spacing={1} >
                <Grid size={12}>
                    <Typography variant="h1" color='primary' sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <ReportProblemIcon sx={{ width: 130, height: 130 }} />
                        404
                    </Typography>

                </Grid>
                <Grid size={12} >
                    <Typography variant="h4">Oops...Page not found!</Typography>
                </Grid>
            </Grid>

        </Box>
    )

}
export default Page404

