import React from 'react'
import DatePicker from "react-datepicker";
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


function EditExercise() {
    const [date, setDate] = useState(new Date());
    const [username,setUsername] = useState('');
    const [description,setDescription] = useState('');
    const [duration,setDuration] = useState(0);
    const [users,setUsers] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
     axios.get(`https://exercise-mern-api.onrender.com/exercises/${id}`)
     .then(resp =>{
     setUsername(resp.data.username);
     setDescription(resp.data.description);
     setDuration(resp.data.duration);
     setDate(new Date(resp.data.date))
     })
     .catch(err=>console.log(err))

      axios.get('http://localhost:5000/users/')
     .then(resp =>{
      console.log(resp);
      if(resp.data.length>0){
        setUsers(
          resp.data.map(user=>user.username)
        )
       
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
  axios.post(`http://localhost:5000/exercises/update/${id}`,exercise)
  .then(res=>console.log(res.data))
  .catch(err=>console.log(err))

    window.location='/';
   
}
   
  return (
    <div className='container '>
        <div className="row w-50">
      <h3>Update Exercise Log</h3>
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
      <button type="submit" className="btn btn-primary">Edit Exercise Log</button>
    </div>
  </div>
</form>
        </div>
    </div>
  )
}

export default EditExercise
