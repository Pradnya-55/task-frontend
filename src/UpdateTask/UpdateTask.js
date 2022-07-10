import React,{useState,useEffect} from "react"
import "./UpdateTask.css"

import { useParams } from "react-router-dom"

import axios from "axios"

function UpdateTask(){

    const{id} = useParams()

    const [title,setTitle] =useState('');
    const [description,setDescription]=useState('');
    const [priority,setPriority]=useState('');
    const [emoji,setEmoji]=useState('');

    useEffect(()=>{
      axios.post('/get_task',{id: id}).then((res)=>{
        setTitle(res.data.data.title);
        setDescription(res.data.data.description);
        setPriority(res.data.data.priority);
        setEmoji(res.data.data.emoji);


      })

    },[id])

    function updateTask(){
        axios.post("/update_tasks",{
            id: id, 
            title: title, 
            description:description, 
            priority: priority, 
            emoji: emoji
        }).then((res)=>{
            alert('Task Updated Successfully!')
            window.location="/"
        })

    }
    return (
        <div className="update-task-container1">
            <h1>Update Task:{id}</h1>
            <form className="form-container1">
                Title: <input value={title} type="text" onChange={(e)=>{setTitle(e.target.value)}}/> <br/><br/>

                Description: <input value={description} type="text"onChange={(e)=>{setDescription(e.target.value)}}/><br/> <br/>

                Priority: <input value={priority} type="text"onChange={(e)=>{setPriority(e.target.value)}}/><br/> <br/>

                Emoji: <input value={emoji} type="text"onChange={(e)=>{setEmoji(e.target.value)}}/><br/> <br/>

                <button type="button" onclick={updateTask} className="btn">Update Now</button>
            </form>
        </div>
    )
}

export default UpdateTask