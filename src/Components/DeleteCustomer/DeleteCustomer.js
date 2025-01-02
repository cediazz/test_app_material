import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import DeleteData from '../../utils/deleteData';
import { useContext } from 'react';
import { NotificationContext } from '../../utils/notificationContext';

export default function DeleteCustomer(props) {

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const accessToken = localStorage.getItem('access')
    const deleteUrl = `https://pruebareactjs.test-class.com/Api/api/Cliente/Eliminar/${props.customer.id}`
    const { setSnackbarMessage,setSnackbarSeverity,setSnackbarState} = useContext(NotificationContext)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = async () => {
        try {

            let res = await DeleteData(deleteUrl, accessToken)
            console.log(res)
            if (res.status === 200) {
                //confirmar eliminación del usuario
            }


        }
        catch (error) {
            setSnackbarMessage('Ocurrió algún error en la operación')
            setSnackbarSeverity('error')
            setSnackbarState(prev => ({ ...prev, open: true }))
            setOpen(false)
        }

    }


    return (
        <React.Fragment>
            <IconButton aria-label="edit" onClick={handleClickOpen}>
                <DeleteIcon />
            </IconButton>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Eliminar cliente"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Esta seguro de eliminar al cliente {props.customer.nombre} {props.customer.apellidos}?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button onClick={handleDelete} autoFocus>
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
