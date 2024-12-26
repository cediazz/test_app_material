import { useState, useEffect } from 'react';
import {
    Box,
    CssBaseline,
} from '@mui/material';
import MyAppBar from './AppBar'
import Sidebar from './Sidebar';
import { useNavigate } from "react-router-dom"

const Home = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };
    const userName = localStorage.getItem('username')
    const navigate = useNavigate()

    useEffect(() => {
        if (userName === null)
            navigate('/login')

    }, [])


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <MyAppBar toggleDrawer={toggleDrawer} userName={userName}/>
            <Sidebar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} userName={userName} />
        </Box>
    );
};

export default Home;
