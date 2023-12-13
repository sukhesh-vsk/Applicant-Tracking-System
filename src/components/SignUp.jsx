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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    
    form: {
        width: '100%',
    },

    
}));

const SignUpForm = () => {
    const classes = useStyles();
    
    const [formData, setFormData] = useState({
        fname : '',
        lname : '',
        email : '',
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
        alert('Successfully Created Account !!');
    };

    return (
        <ThemeProvider theme={darkTheme}>
        <Container component='main' maxWidth='xs' className={classes.root}>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    {/* <LockOutlinedIcon /> */}
                </Avatar>
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
                        type = 'password'
                        margin = 'normal'
                        variant = 'outlined'
                        fullWidth required autofocus
                        autoComplete = 'password'
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
                            <Link href='#' variant='body2' underline='hover'>
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
        </ThemeProvider>
    );
};

export default SignUpForm;