import {
    Typography,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    ListItemButton,
    Drawer,
   
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import { Link } from "react-router-dom"
import PeopleIcon from '@mui/icons-material/People'
import PersonIcon from '@mui/icons-material/Person'


const Sidebar = (props) => {
    
    const sidebarContent = (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '16px' }}>
                <PersonIcon sx={{ marginBottom: 1, marginTop: 1, width: 77, height: 77, backgroundColor: '#1F1F1F', borderRadius: '50%', color: 'white' }} />
                <Typography variant="h6" align="center">{props.userName}</Typography>
            </Box>
            <Divider />
            <List>
                <ListItem sx={{ justifyContent: 'center' }}>
                    <Typography variant="h5" >Menú</Typography>
                </ListItem>
                <Divider />
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItemButton >
                        <ListItemIcon sx={{ color: '#2E3440' }}><HomeIcon /></ListItemIcon>
                        <ListItemText primary="Inicio" />
                    </ListItemButton>
                </Link>
                <Link to="/customers" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItemButton >
                        <ListItemIcon sx={{ color: '#2E3440' }}><PeopleIcon /></ListItemIcon>
                        <ListItemText primary="Consulta Clientes" />
                    </ListItemButton>
                </Link></List>
        </>
    );

    return (
        <Box sx={{ display: 'flex' }}>
           
           {/* Drawer para dispositivos pequeños */}
            <Drawer
                anchor="left"
                open={props.drawerOpen}
                onClose={props.toggleDrawer(false)}
                sx={{display: { xs: 'block', md: 'none' }}}
            >
                {sidebarContent}
            </Drawer>

            {/* Sidebar fijo para dispositivos grandes */}
            <Box
                sx={{
                    width: 250,
                    backgroundColor: '#f4f4f4',
                    height: '100vh',
                    overflowY: 'auto',
                    marginTop: 8,
                    boxShadow: '2px 0px 5px rgba(0,0,0,0.2)',
                    position: { xs: 'fixed', md: 'static' }, // Fijo en móviles y estático en pantallas grandes
                    top: { xs: 64, md: 0 }, // Espacio para la AppBar en móviles
                    left: 0,
                    display: { xs: 'none', md: 'block' } // Ocultar en móviles
                }}
            >
                {sidebarContent}
            </Box>

           
        </Box>
    );
}
export default Sidebar;