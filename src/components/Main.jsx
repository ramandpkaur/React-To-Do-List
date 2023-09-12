import './Main.css';
import React, { useEffect, useState } from 'react';
import Task from './Task'

const Main = () => { 
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const [tasks, setTasks] = useState(
    localStorage.getItem('tasks') 
    ? JSON.parse(localStorage.getItem('tasks')) 
    : []
  );

  useEffect(() => (
    localStorage.setItem('tasks', JSON.stringify(tasks))
  ), [tasks]);
  

  const submitHandler = (e) => {
    e.preventDefault();
    if(title==="" || desc==="") {
      alert('Please enter the title and Description of your Task.');
    } else {
      setTasks([...tasks, { title: title, desc: desc}]);
      setTitle('');
      setDesc('');
    }
  }

  const deleteTask = (index) => {
    const filteredArray = tasks.filter((val, i)=> {
      return i !== index;
    });
    setTasks(filteredArray);
  }

  return (
    <div className="container">
      <form onSubmit={submitHandler}>  

        <h3>Enter your Tasks</h3>

        <input type="text"
          name='title'
          value={title} 
          placeholder='Enter Task Title' 
          onChange={(e)=> setTitle(e.target.value)}
        />

        <textarea 
          name="description" 
          cols="15" rows="8" 
          value={desc} 
          placeholder='Enter the Task description' 
          onChange={(e)=> setDesc(e.target.value)} >
        </textarea>

        <button type='submit' >Add Task</button>

      </form>

      {tasks.map((item, index) => (
        <Task
          key={index} 
          title={item.title} 
          desc={item.desc} 
          deleteTask={deleteTask}
          index={index}
        />
      ))}

    </div>
  );
};

export default Main;