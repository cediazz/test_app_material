import {
    Typography,
    IconButton,
    Avatar
} from '@mui/material'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp'

export default function ImageCustomersField(props) {

    const handleFileChange = (event) => {
        const file = event.currentTarget.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                props.formik.setFieldValue('imagen', reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <Typography variant="h6" color='appbar' sx={{
            display: 'flex',
            alignItems: 'center',

        }}>
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="avatar-upload"
                type="file"
                onChange={handleFileChange}
            />
            <label htmlFor="avatar-upload">
                <IconButton aria-label="upload picture" component="span">
                    {
                        props.formik.values.imagen ?
                            <Avatar src={props.formik.values.imagen} sx={{ width: 50, height: 50 }} />
                            :
                            <Avatar>
                                <AccountCircleSharpIcon color='appbar' sx={{ width: 50, height: 50 }} />
                            </Avatar>}
                </IconButton>
            </label>
            Mantenimiento de clientes
        </Typography>
    )
}
