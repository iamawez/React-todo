import React from 'react'

const Task = ({title, description , Deletetask, index}) => {
  return (
    <div className='task'>

    <div>
        <p>{title}</p>
        <span>{description}</span>
    </div>

    <button onClick={()=>Deletetask(index)}>-</button>
    </div>
  )
}

export default Task