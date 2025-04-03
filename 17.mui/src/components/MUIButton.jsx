import React from 'react';
import { Button } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';

function MUIButton() {
    return (
        <div>
            <div style={{ marginBottom: '50px' }}>
                <Button variant='text'>Kaydol</Button>
                <Button variant='contained'>Kaydol</Button>
                <Button variant='outlined'>Kaydol</Button>
            </div>
            <div style={{ marginBottom: '50px' }}>
                <Button color='secondary'>Giriş Yap</Button>
                <Button color='success'>Giriş Yap</Button>
                <Button color='danger'>Giriş Yap</Button>
            </div>
            <div style={{ marginBottom: '50px' }}>
                <Button size='small' variant='contained' color='warning'>Geri Dön</Button>
                <Button size='medium' variant='contained' color='warning'>Geri Dön</Button>
                <Button size='large' variant='contained' color='warning'>Geri Dön</Button>
            </div>
            <div style={{ marginBottom: '50px' }}>
                <Button size='small'
                    variant='contained'
                    color='warning'
                    startIcon={<AddCircleIcon />}
                >Geri Dön</Button>
                <Button onClick={() => alert("Button çalıştı")} size='small'
                    variant='contained'
                    color='warning'
                    endIcon={<AddCircleIcon />}
                >Geri Dön</Button>
            </div>
        </div>
    )
}

export default MUIButton
