import React from 'react';
import './Task.css';

function Task({ task }) {
  return (
    <div className='task__container d-flex flex-column p-2'>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
    </div>
  );
}

export default Task;