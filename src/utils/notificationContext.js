import { createContext, useState } from 'react';
import {
    Box,
    Button,
    Typography,
    Snackbar,
    Alert
} from '@mui/material'
import { Link } from "react-router-dom"

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {

    const [snackbarState, setSnackbarState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    })
    const { vertical, horizontal, open } = snackbarState
    const [snackbarMessage, setSnackbarMessage] = useState('')
    const [snackbarSeverity, setSnackbarSeverity] = useState('success')

    return (
        <NotificationContext.Provider value={
            {
                snackbarMessage,
                setSnackbarMessage,
                snackbarSeverity,
                setSnackbarSeverity,
                snackbarState,
                setSnackbarState

            }
        }>
            {children}
            <Snackbar anchorOrigin={{ vertical, horizontal }} open={open}  >
                <Alert sx={{ width: '100%' }} severity={snackbarSeverity}>
                    {snackbarMessage}
                    {snackbarSeverity === 'success' &&
                        <Link to="/login" style={{ marginLeft: '2px' }}>
                            Ya puede autenticarse
                        </Link>}
                </Alert>
            </Snackbar>
        </NotificationContext.Provider>

    );
};




