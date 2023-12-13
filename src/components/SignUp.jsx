import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, CssBaseline, Avatar, Typography, TextField, Button, Link, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../styles/signup.css';
import asset from '../assets/login.png';

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

const SignUpForm = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    
    const [formData, setFormData] = useState({
        fname : '',
        lname : '',
        email : '',
        username : '',
        password : '',
        confirmpwd : ''
    });

    const [passwordsMatch, setPasswordsMatch] = useState(true);
    
    const eventHandle = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] : value
        }
        );
        setPasswordsMatch(true);
    };

    const submitForm = (e) => {
        e.preventDefault()
        if(formData.password === formData.confirmpwd) {
            alert('Successfully Created Account !!');
            navigate('/login');
        }
        else {
            setFormData({
                ...formData,
                confirmpwd : ''
            });
            setPasswordsMatch(false);
            alert('Password and Confirm Password must match.');
        }
    };

    return (
        <ThemeProvider theme={darkTheme}>
        <div className='login-cover'>
            <img src={asset} alt='login.png'/>   
            <Container component='main' maxWidth='xs' className={classes.root}>
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}></Avatar>
                    <Typography component='h1' variant='h6'>Sign up</Typography>
                    <form className={classes.form} onSubmit = {submitForm}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                            <TextField
                                name = 'fname'
                                id = 'fname'
                                label = 'Firstname'
                                variant = 'outlined'
                                margin = 'normal'
                                autoComplete = 'fname'
                                value = {formData.fname}
                                autoFocus required
                                onChange={eventHandle}
                            />
                            </Grid>
                            <Grid item xs={6}>
                            <TextField
                                name = 'lname'
                                id = 'lname'
                                label = 'Lastname'
                                variant = 'outlined'
                                margin = 'normal'
                                autoComplete = 'lname'
                                value = {formData.lname}
                                onChange={eventHandle}
                            />
                            </Grid>
                        </Grid>
                        <TextField
                            name = 'username'
                            id = 'userField'
                            label = 'Username'
                            variant = 'outlined'
                            margin = 'normal'
                            autoComplete = 'username'
                            value = {formData.username}
                            fullWidth required
                            onChange={eventHandle}
                        />
                        <TextField
                            name = 'mail'
                            id = 'mail'
                            label = 'Email Address'
                            variant = 'outlined'
                            margin = 'normal'
                            autoComplete = 'mail'
                            value = {formData.mail}
                            fullWidth required
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
                        <TextField 
                            label = 'Confirm Password'
                            name = 'confirmpwd'
                            type = 'password'
                            margin = 'normal'
                            variant = 'outlined'
                            fullWidth required autofocus
                            value = {formData.confirmpwd}
                            onChange={eventHandle}
                            error={!passwordsMatch}
                            helperText={!passwordsMatch && 'Password and Confirm Password must match.'}
                        />
                        
                        <Button 
                            type = 'submit'
                            color = 'primary'
                            variant = 'contained'
                            className = {classes.submit}
                            fullWidth
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Create Account
                        </Button>

                        <Grid container>
                            <Grid item xs>
                            </Grid>
                            <Grid item>
                                <Link href='/login' variant='body2' underline='hover'>
                                    <Typography variant='body2' color='textPrimary' display='inline'>
                                        Already have an account?
                                    </Typography>
                                    <Typography variant='body2' color='primary' display='inline'>
                                        &nbsp;Sign In
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

export default SignUpForm;