import React, { useState } from 'react';
import { Container, CssBaseline, Avatar, Typography, TextField, Button, createTheme } from '@mui/material';
import { makeStyles, ThemeProvider  } from '@mui/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { withTheme } from '@emotion/react';

const theme = new createTheme();

const useStyles = makeStyles((theme) => ({
    paper: {
        paddingTop: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    
    form: {
        width: '100%',
    },

    
}));

const LoginForm = () => {
    const classes = useStyles();
    
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

    const submitForm = (e) => {
        e.preventDefault()
        alert(`Hey! ${formData.username} \n\nLogin Successfull !!`);
    };

    return (
        <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Typography component='h1' variant='h6'>Sign In</Typography>
                <form className={classes.form} onSubmit = {submitForm}>
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
                        fullWidth required autofocus
                        autoComplete = 'password'
                        value = {formData.password}
                        onChange = {eventHandle}
                    />
                    <Button 
                        type = 'submit'
                        color = 'primary'
                        variant = 'contained'
                        className = {classes.submit}
                        fullWidth
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
        </ThemeProvider>
    );
};

export default LoginForm;