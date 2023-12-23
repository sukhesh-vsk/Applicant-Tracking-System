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
                        <li className="nav_text">
                            <a href='#' className='nav-label'>What is Todo?</a>
                        </li>
                        <li className="nav_text">
                            <a href='#' className='nav-label'>Features</a>
                        </li>
                        <li className="nav_text">
                            <a href='#' className='nav-label'>About</a>
                        </li>
                        <span class='divider'></span>
                        <li className="nav_text">
                            <a href='/login' className='nav-label'>Log in</a>
                        </li>
                        <li className="nav_text get-started">
                            <a href='/signup' className='nav-label'><span>Start for free</span></a>
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </div>
    )
}

export default LandingNavBar