import { Grid } from '@mui/material'
import React from 'react'

import './Main.css'
function Main() {
  return (
    <div>
        <Grid container className='main__container'>
            <Grid item className='main__container__head'>
                <h3>Today Activities</h3>
                <p>Manage your habits, remainder, events, activities.</p>
            </Grid>
            <Grid item>
                <Grid contanier className='task__container'>
                    <Grid item className='task__card'>
                        <h1>Task 1</h1>
                    </Grid>
                    <Grid item className='task__card'>
                        Task 2
                    </Grid>
                    <Grid item className='task__card'>
                        Task 3
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
  )
}

export default Main