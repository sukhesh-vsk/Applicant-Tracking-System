import React from 'react'
import { Grid } from '@mui/material'
import { Button } from '@mui/joy'
import { FaPlus } from "react-icons/fa6";

import Task from '../Task/Task';
import './Main.css'

function Main() {
    const tasks = [
        { title: 'Task 1', description: 'This is task 1' },
        { title: 'Task 2', description: 'This is task 2' },
        { title: 'Task 3', description: 'This is task 3' },
        { title: 'Task 4', description: 'This is task 4' },
        { title: 'Task 5', description: 'This is task 5' },
        { title: 'Task 6', description: 'This is task 6' }
        ];

    return (
    <div>
        <Grid container className='main__container d-flex flex-column p-4'>
        <div className='main__container-header d-flex'>
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
        <Grid container spacing={3}>
            {tasks.map((task, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
                <Task task={task} /> 
            </Grid>
            ))}
        </Grid>
        </Grid>
    </div>
    )
}

export default Main