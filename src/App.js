import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import CreateExercise from "./Components/CreateExercise";
import CreateUser from "./Components/CreateUser";
import ExerciseList from "./Components/ExerciseList";
import EditExercise from "./Components/EditExercise";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <BrowserRouter>
 <Navbar />
 <br />
 <div className="container">
      <Routes>
        <Route path="/" element={<ExerciseList />} />
        <Route path="/edit/:id" element={<EditExercise />} />
        <Route path="/create" element={<CreateExercise/>} />
        <Route path="/user" element={<CreateUser />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
