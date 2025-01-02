import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material'


export default function SnackbarNotification(
    { vertical, horizontal, open, snackbarSeverity, snackbarMessage, setSnackbarState }) {


    const handleClose = () => {
        setSnackbarState(prev => ({ ...prev, open: false }))
    };

    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}


            >
                <Alert
                    onClose={handleClose}
                    severity={snackbarSeverity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>

        </div>
    );
}
