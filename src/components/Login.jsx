import React, { useState } from 'react';
import { Container, CssBaseline, Avatar, Typography, TextField, Button } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// const useStyles = makeStyles((theme) => ({
//     paper: {
//         marginTop: theme.spacing(8)
//     }
// }));


const LoginForm = () => {
    // const classes = useStyles();
    
    const [formData, setFormData] = useState({
        username : '',
        password : ''
    });

    const eventHandle = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] : value
        }
        );
    };

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div>
                <Avatar>
                    {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Typography component='h1' variant='h6'>Sign In</Typography>
                <form>
                    <TextField
                        name = 'username'
                        id = 'userField'
                        label = 'Username'
                        variant = 'outlined'
                        margin = 'normal'
                        autoComplete = 'username'
                        value = {formData.username}
                        fullWidth autoFocus required
                        onChange={eventHandle}
                    />
                    <TextField 
                        name = 'password'
                        id = 'pwdField'
                        label = 'Password'
                        type = 'password'
                        margin = 'normal'
                        variant = 'outlined'
                        fullWidth required
                        autoComplete = 'password'
                        value = {formData.password}
                        onChange = {eventHandle}
                    />
                    <Button 
                        type = 'submit'
                        color = 'primary'
                        variant = 'contained'
                        // className = 'classes.submit'
                        fullWidth
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default LoginForm;