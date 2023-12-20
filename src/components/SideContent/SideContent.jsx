import React from 'react'
import './SideContent.css';
import { Divider, Grid } from '@mui/material';

function SideContent() {
  return (
    <div className='side__container'>
      <div className='side__content-remainder'>
        <Grid container className='all-remainders'>
          <Grid item className='remainder__container'>
            {/* <h2>Remainder</h2> */}
            <p>11:00-12:00</p>
            <Divider/>
            <p>Do this, do that, and this too.</p>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default SideContent