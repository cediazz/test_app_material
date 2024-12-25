import { useState, useEffect } from 'react';
import {
    Typography,
    Box,
    CssBaseline,
} from '@mui/material';
import MyAppBar from './AppBar'
import Sidebar from './Sidebar';
import { useNavigate } from "react-router-dom"

const Home = () => {

    const [sidebarOpen, setSidebarOpen] = useState(true)
    const userName = localStorage.getItem('username')
    const navigate = useNavigate()

    useEffect(() => {
        if (userName === null)
            navigate('/login')

    }, [])


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <MyAppBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} userName={userName} />
            {sidebarOpen && <Sidebar userName={userName} />}

            {/* Contenido Principal */}
            <Box
                component="main"
                sx={{
                    display: 'flex',
                    height: '60vh',
                    flexGrow: 1,
                    marginLeft: sidebarOpen ? '250px' : '0', transition: 'margin-left 0.3s',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Typography variant="h2">Bienvenido</Typography>
            </Box>
        </Box>
    );
};

export default Home;
