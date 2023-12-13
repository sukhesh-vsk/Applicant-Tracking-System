import React, { useState } from 'react';
import { Container, CssBaseline, Avatar, Typography, TextField, Button, FormControlLabel, Checkbox, Link, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './styles/login.css';

const darkTheme = createTheme({
    palette: {
      mode: 'light',
    },
});

const useStyles = makeStyles((darkTheme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
        <ThemeProvider theme={darkTheme}>
        <h2 className='header'>Applicant Tracking System</h2>
        <div className='login-cover'>
            <img src="./login.png" alt='login.png'/>   
            <Container component='main' maxWidth='xs' className={classes.root}>
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}></Avatar>
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
                        <FormControlLabel 
                            control = {<Checkbox value = 'remember' color = 'primary'/>}
                            label = 'Remember me'
                        />
                        
                        <Button 
                            type = 'submit'
                            color = 'primary'
                            variant = 'contained'
                            className = {classes.submit}
                            fullWidth
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>

                        <Grid container>
                            <Grid item xs>
                                <Link href='#' variant='body2'>
                                    Forget password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href='/signup' variant='body2' underline='hover'>
                                    <Typography variant='body2' color='textPrimary' display='inline'>
                                        Don't have account?
                                    </Typography>
                                    <Typography variant='body2' color='primary' display='inline'>
                                        &nbsp;Sign Up
                                    </Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
        </ThemeProvider>
    );
};

export default LoginForm;