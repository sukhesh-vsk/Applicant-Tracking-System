import React, { useState } from 'react';
import { Container, CssBaseline, Avatar, Typography, TextField, Button, FormControlLabel, Checkbox, Link, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const darkTheme = createTheme({
    palette: {
      mode: 'light',
    },
});

const useStyles = makeStyles((darkTheme) => ({
    paper: {
        paddingTop: '100px',
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
        <Container component='main' maxWidth='xs' className={classes.root}>
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
                            <Link href='#' variant='body2'>
                                Don't have account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
        </ThemeProvider>
    );
};

export default LoginForm;