import React, { useState } from 'react';
import { Container, CssBaseline, Avatar, Typography, TextField, Button, FormControlLabel, Checkbox, Link, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import './login.css';
import asset from '../../assets/login.png';

const LoginForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const eventHandle = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        }
        );
    };

    const submitForm = (e) => {
        e.preventDefault()
        alert(`Hey! ${formData.username} \n\nLogin Successfull !!`);
        navigate('/home');
    };

    return (
        <div>
            <center><h2 className='header animate-slide'>Todo Hub</h2></center>
            <div className='login-cover'>
                <img src={asset} alt='login.png' className='animate-slide' />
                <Container component='main' maxWidth='xs' >
                <CssBaseline />
                <div
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar ></Avatar>
                    <Typography component='h1' variant='h6'>Sign In</Typography>
                    <form onSubmit={submitForm}
                        sx={{
                            width: '100%'
                        }}
                    >
                        <TextField
                            name='username'
                            id='userField'
                            label='Username'
                            variant='outlined'
                            margin='normal'
                            autoComplete='username'
                            value={formData.username}
                            fullWidth autoFocus required
                            onChange={eventHandle}
                        />
                        <TextField
                            name='password'
                            id='pwdField'
                            label='Password'
                            type='password'
                            margin='normal'
                            variant='outlined'
                            fullWidth required
                            autoComplete='password'
                            value={formData.password}
                            onChange={eventHandle}
                        />
                        <FormControlLabel
                            control={<Checkbox value='remember' color='primary' />}
                            label='Remember me'
                        />

                        <Button
                            type='submit'
                            color='primary'
                            variant='contained'
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
        </div>
    )
};

export default LoginForm;