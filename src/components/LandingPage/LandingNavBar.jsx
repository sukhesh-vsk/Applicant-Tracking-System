import { Grid } from '@mui/material'
import React from 'react'

import './styles/LandingNavBar.css'

function LandingNavBar() {
    return (
        <div>
            <Grid container className='navbar__container'>
                <Grid item xs className='navbar__logo'>
                    <a><h3>Todo Hub</h3></a>
                </Grid>
                <Grid item>
                    <ul className='navbar__right'>
                        <a href='#' className='nav-label'>
                            <li className="nav_text">
                                What is Todo?
                            </li>
                        </a>
                        <a href='#' className='nav-label'>
                            <li className="nav_text">
                                Features
                            </li>
                        </a>
                        <a href='#' className='nav-label'>
                            <li className="nav_text">
                                About
                            </li>
                        </a>
                        <span class='divider'></span>
                        <a href='/login' className='nav-label'>
                            <li className="nav_text">
                                Log in
                            </li>
                        </a>
                        <a href='/signup' className='nav-label'>
                            <li className="nav_text get-started">
                                <span>Start for free</span>
                            </li>
                        </a>
                    </ul>
                </Grid>
            </Grid>
        </div>
    )
}

export default LandingNavBar