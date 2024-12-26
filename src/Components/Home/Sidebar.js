import {
    Typography,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    ListItemButton
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home'
import { Link } from "react-router-dom"
import PeopleIcon from '@mui/icons-material/People'
import PersonIcon from '@mui/icons-material/Person'

export default function Sidebar(props) {

    return (
        <Box
            sx={{
                width: 250,
                height: '100vh',
                backgroundColor: '#f4f4f4',
                marginTop: 8,
                overflowY: 'auto',
                boxShadow: '2px 0px 5px rgba(0,0,0,0.2)',
            }}
        >
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
        </Box>
    )
}