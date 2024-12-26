import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,

} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from "react-router-dom"

export default function MyAppBar(props) {


    const LogOut = () => {
        localStorage.clear()
    }

    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#2e3440' }}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={props.toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Compañía Prueba
                </Typography>
                <Typography variant="body1" sx={{ marginRight: 2 }}>
                    {props.userName}
                </Typography>
                <Link to='login' onClick={LogOut} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button color="inherit" startIcon={<ExitToAppIcon />}>
                        Salir
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}