"use client";
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submitHandler = (e)=>{
    e.preventDefault()
    if(!title){
      alert("Empty Task")
      setmainTask([...mainTask]);
    }else{
    setmainTask([...mainTask,{title,desc}]);
    settitle("")
    setdesc("")}
  }
  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }
  let renderTask = <h2 className='text-white font-bold'>No Task Available</h2>
  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return <li key={i} className='flex items-center justify-between mb-5'>
        <div className='flex items-center justify-between w-2/3'>
        <h5 className='text-2xl font-semibold text-gray-50'>{t.title}</h5>
        <h6 className='text-lg font-medium text-gray-400'>{t.desc}</h6>
        </div>
        <button className='bg-red-500 text-white px-4 py-2 rounded font-bold' onClick={()=>{deleteHandler(i)}}>Delete</button>
      </li>
    }) 
  }
  return (
    <>
    <h1 className='font-bold bg-[#1E3A8A] text-white p-6 text-4xl text-center mb-9'>Rish's TodoList</h1>
    <form onSubmit={submitHandler}>
      <input type='text' className='
      text-2xl border-2 m-6 px-4 py-2 bg-gray-800 text-gray-200 border-gray-600'
      placeholder='Enter Task' 
      value={title} 
      onChange={(e)=>{
        settitle(e.target.value)
        }}/>
      <input type='text' className=
      'text-2xl border-2 m-6 px-4 py-2  bg-gray-800 text-gray-200 border-gray-600' 
      placeholder='Enter Description'
      value={desc} 
      onChange={(e)=>{
        setdesc(e.target.value)
        }}/>
      <button className='bg-green-500 text-white px-4 py-3 text-2xl font-bold rounded m-6'>Add Task</button>
    </form>
    <div className='p-8'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page