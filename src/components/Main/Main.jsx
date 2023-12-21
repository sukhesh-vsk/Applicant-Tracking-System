import React from 'react'
import { Grid } from '@mui/material'
import { Button } from '@mui/joy'
import { FaPlus } from "react-icons/fa6";

import './Main.css'

function Main() {
  return (
    <div>
        <Grid container className='main__container'>
            <div className='main__container-header'>
                <Grid item className='main__container__head' xs>
                    <h3>Today Activities</h3>
                    <p>Manage your habits, remainder, events, activities.</p>
                </Grid>
                <Grid item>
                    <Button>
                        <FaPlus/>Add Task
                    </Button>
                </Grid>
            </div>
            <Grid item>
                <Grid contanier className='task__container'>
                    <Grid item className='task__card'>
                        <h2>Task 1</h2>
                        <p>Descripion</p>
                    </Grid>
                    <Grid item className='task__card'>
                        <h2>Task 2</h2>
                        <p>Descripion</p>
                    </Grid>
                    <Grid item className='task__card'>
                        <h2>Task 3</h2>
                        <p>Descripion</p>
                    </Grid>
                    <Grid item className='task__card'>
                        <h2>Task 4</h2>
                        <p>Descripion</p>
                    </Grid>
                    <Grid item className='task__card'>
                        <h2>Task 5</h2>
                        <p>Descripion</p>
                    </Grid>
                    <Grid item className='task__card'>
                        <h2>Task 6</h2>
                        <p>Descripion</p>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
  )
}

export default Main