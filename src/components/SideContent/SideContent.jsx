import React from 'react'
import './SideContent.css';
import { Divider, Grid } from '@mui/material';

function SideContent() {
  return (
    <div className='side__container'>
      <div className='side__content-remainder'>
        <h2 className='remainder-title'>Remainder</h2>
        <Grid container className='all-remainders'>
          <Grid item className='remainder__container'>
            <h2>Remainder 1</h2>
            <p className='schedule-time'>17:30-18:00</p>
            <Divider/>
            <p className='remainder-desc'>Do this, do that, and this too.Do this, do that, and this too.</p>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default SideContent