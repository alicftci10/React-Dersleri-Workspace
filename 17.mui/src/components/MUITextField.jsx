import React from 'react'
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

function MUITextField() {
    return (

        <div>
            <div style={{ marginBottom: '50px' }}>
                <TextField label="İsim" variant='outlined' />
                <TextField label="İsim" variant='filled' />
                <TextField label="İsim" variant='standard' />
            </div>

            <div style={{ marginBottom: '50px' }}>
                <TextField label="İsim" variant='outlined' color='error' />
            </div>

            <div style={{ marginBottom: '50px' }}>
                <TextField label="İsim" variant='outlined' color='warning' helperText="İsminizi Giriniz" />
            </div>

            <div style={{ marginBottom: '50px' }}>
                <TextField label="Kimlik No" disabled variant='outlined' color='warning' />
            </div>

            <div style={{ marginBottom: '50px' }}>
                <TextField label="isim" InputProps={{ startAdornment: <InputAdornment position='start'><PersonIcon /></InputAdornment> }} variant='outlined' />
            </div>

            <div style={{ marginBottom: '50px' }}>
                <TextField label="isim" InputProps={{ endAdornment: <InputAdornment position='end'><PersonIcon /></InputAdornment> }} variant='outlined' />
            </div>
        </div>
    )
}

export default MUITextField
