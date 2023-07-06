import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Exercise=({exercise,deleteExercise,key})=>{
  return <>
  <tr>
    <td>{exercise.username}</td>
    <td>{exercise.description}</td>
    <td>{exercise.duration}</td>
    <td>{exercise.date.substring(0,10)}</td>
  <td>
    <Link to={`/edit/${exercise._id}`}  >edit</Link> | <a href="#" onClick={()=> {deleteExercise(exercise._id)}}>delete</a>
  </td>
  </tr>
  </>
}

function ExerciseList() {
  // const [deleteExercise,setDeleteExercise] = useState();
  const [exercise,setExercise] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/exercises/')
    .then(res => setExercise(res.data))
    .catch(err => console.log(err))
  },[])

  const deleteExercise=(id)=>{
    axios.delete(`http://localhost:5000/exercises/${id}`)
    .then(res=> console.log(res.data))

    setExercise(exercise.filter(el => el._id!==id));
  }

  console.log(exercise);

  return (
    <div>
    <h3>Logged Exercises</h3>
    <br />
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th>Username</th>
          <th>Description</th>
          <th>Duration</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          exercise.map(currExercise =>{
            return <Exercise exercise={currExercise} deleteExercise={deleteExercise} key={currExercise._id} />
          })
        }

      </tbody>


    </table>
    </div>
  )
}

export default ExerciseList
