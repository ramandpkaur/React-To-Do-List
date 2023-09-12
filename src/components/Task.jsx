import React from 'react';
import './Task.css';

const Task = ({title, desc, deleteTask, index}) => {
  return (
    <div className='task'>
      <div>
        <p>{title}</p>
        <span>{desc}</span>
      </div>
      <button type="button" onClick={()=>deleteTask(index)}>-</button>
    </div>
  )
}

export default Task;