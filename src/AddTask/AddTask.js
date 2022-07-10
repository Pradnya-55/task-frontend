import React,{useState} from "react";

import axios from "axios";

import "./AddTask.css"

function AddTask() {
    const[id,setId]=useState('');
    const[title,setTitle]=useState('');
    const[description,setDescription]=useState('');
    const[priority,setPriority]=useState('');
    const[emoji,setEmoji]=useState('');

    function addTask(){
        axios.post('/tasks',
      {id:id,
       title:title,
       description:description,
       priority:priority,
       emoji,emoji}).then((res)=>{
        window.location="/"
       })


    }
        
    





    return (
        <div className="add-class-container">
            <h1 className="taska-container">AddTask</h1>
            <form className="form-container">
               ID: <input value={id} onChange={(e)=>{setId(e.target.value)}}/> <br/><br/>
               Title: <input value={title} onChange={(e)=>{setTitle(e.target.value)}}/> <br/> <br/>
               Description: <input value={description} onChange={(e)=>{setDescription(e.target.value)}}/> <br/> <br/>
               Priority: <input value={priority} onChange={(e)=>{setPriority(e.target.value)}}/> <br/><br/>
               Emoji: <input value={emoji} onChange={(e)=>{setEmoji(e.target.value)}}/> <br/><br/>
               

               <button type="button" onClick={addTask} className="btn">Add Task</button>
          
            </form>

        </div>
        
        
    )
}

export default AddTask