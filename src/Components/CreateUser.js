import React from 'react'
import { useState } from 'react'
import axios from 'axios';

function CreateUser() {

    const [username,setUsername] = useState('');

    const handleSubmit=(e)=>{
    e.preventDefault();

    const user={
        username:username,
       
    }
    console.log(user);

      axios.post('https://exercise-mern-app.onrender.com/users/add',user)
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err));
  
     setUsername('');
  
}
  return (
   <div className='container '>
        <div className="row w-50">
      <h3>Create New User</h3>
<form onSubmit={handleSubmit}>

 <div className="form-group">

   <label >Username :</label>

   <input type="text"
   required
   className='form-control'
   value={username} 
   onChange={(e)=>setUsername(e.target.value)}
   />

</div>

<br />

  <div className="form-group ">
   <input type="submit" value="Create User" className='btn btn-primary' />
  </div>

</form>
        </div>
    </div>
  )
}

export default CreateUser
