import { Grid } from '@mui/material'
import React from 'react'

import './styles/LandingNavBar.css'

function LandingNavBar() {
    return (
        <div>
            <Grid container className='navbar__container'>
                <Grid item xs>
                    <a className='navbar__logo'><h3>Todo Hub</h3></a>
                </Grid>
                <Grid item>
                    <ul className='navbar__right'>
                        <li className="nav_text">
                            <a href='#' className='label'>What is Todo?</a>
                        </li>
                        <li className="nav_text">
                            <a href='#' className='label'>Features</a>
                        </li>
                        <li className="nav_text">
                            <a href='#' className='label'>About</a>
                        </li>
                        <p>|</p>&nbsp;
                        <li className="nav_text">
                            <a href='#' className='label'>Log in</a>
                        </li>
                        <li className="nav_text">
                            <a href='#' className='label'>Start for free</a>
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </div>
    )
}

export default LandingNavBar