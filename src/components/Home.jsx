import React, { useEffect, useState } from 'react'
import Task from './Task'

const Home = () => {
  let initialarray = [];

  try {
    const storedData = localStorage.getItem("tasks");
    if (storedData) {
      initialarray = JSON.parse(storedData);
    }
  } catch (error) {
    console.error("Error parsing JSON:", error);
    // Handle the error as needed
  }
  
  const [tasks, setTasks] = useState(initialarray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const submithandler=(e)=>{
    e.preventDefault();

    setTasks([
      ...tasks,{title, description}]);
      setTitle("");
      setDescription("");
  }

const Deletetask = (index) =>{
  const filteredArr = tasks.filter((val, i)=>{
    return i !==index;
  });

  // console.log(filteredArr);
  setTasks(filteredArr);
}

useEffect(()=>{
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);


  return (
    <div className='container'>
        <h1>Daily Goals</h1>

        <form onSubmit={submithandler}>
            <input
             type="text" 
             placeholder='Title' 
             value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <textarea placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>

            <button type='submit'>ADD</button>
        </form>
      
        {tasks.map((item, index)=>(
           <Task 
           key={index} 
           title={item.title} 
           description={item.description}
           Deletetask={Deletetask}
           index={index}/>
        ))}
    </div>
  )
}

export default Home

