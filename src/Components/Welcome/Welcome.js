import {
    Typography,
    Box,
} from '@mui/material'

const Welcome = () => {

    return (
        <Box
            component="main"
            sx={{
                display: 'flex',
                height: '60vh',
                //flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Typography variant="h2">Bienvenido</Typography>
        </Box>
    )

}
export default Welcome