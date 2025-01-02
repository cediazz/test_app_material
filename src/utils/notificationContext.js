import { createContext, useState } from 'react';
import SnackbarNotification from '../Components/SnackbarNotification/SnackbarNotification';

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
                setSnackbarMessage,
                setSnackbarSeverity,
                setSnackbarState

            }
        }>
            {children}
            <SnackbarNotification
                vertical={vertical}
                horizontal={horizontal}
                open={open}
                setSnackbarState={setSnackbarState}
                snackbarSeverity={snackbarSeverity}
                snackbarMessage={snackbarMessage}
            />
        </NotificationContext.Provider>

    );
};




