import React from 'react'
import DatePicker from "react-datepicker";
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { useEffect } from 'react';


function CreateExercise() {
    const [date, setDate] = useState(new Date());
    const [username,setUsername] = useState('');
    const [description,setDescription] = useState('');
    const [duration,setDuration] = useState(0);
    const [users,setUsers] = useState([]);

    useEffect(()=>{
     axios.get('https://exercise-mern-app.onrender.com/users/')
     .then(resp =>{
      console.log(resp);
      if(resp.data.length>0){
        setUsers(
          resp.data.map(user=>user.username)
        )
        setUsername(resp.data[0].username)
      }
     })

    },[]);

  

const handleSubmit=(e)=>{
    e.preventDefault();
    const exercise={
        username:username,
        description:description,
        duration:duration,
        date:date
    }
    console.log(exercise);
  axios.post('http://exercise-mern-app.onrender.com/exercises/add',exercise)
  .then(res=>console.log(res.data))
  .catch(err=>console.log(err))

    window.location='/';
    setUsername('');
    setDescription('');
    setDuration(0);
    setDate(new Date());
}
   
  return (
    <div className='container '>
        <div className="row w-50">
      <h3>Create New Exercise Log</h3>
<form onSubmit={handleSubmit}>

 <div className="form-group">
   <label >Username :</label>
   <select className="form-control" required value={username} onChange={(e)=>setUsername(e.target.value)} >
   
  {
    users.map((user)=>{
        return <option
        key={user}
        value={user}>
        {user}
        </option>
    })
  }

  </select>
</div>

<br />
 <div className="form-group">
    <label >Description :</label>
    <input type="text" value={description} required onChange={(e)=>setDescription(e.target.value)} className="form-control" id="Description"  />
  </div>
<br />
 <div className="form-group">
    <label>Duration(in minutes) :</label>
    <input type="text" required value={duration} onChange={(e)=>setDuration(e.target.value)} className="form-control" id="Duration"  />
  </div>
  <br />

<div className="form-group">
    <label > Date : </label>
    <div className='cursor-pointer' >
     <DatePicker selected={date} onChange={(date) => setDate(date)} />
    </div>
</div>

<br />
  <div className="form-group ">
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary">Create Exercise Log</button>
    </div>
  </div>
</form>
        </div>
    </div>
  )
}

export default CreateExercise
