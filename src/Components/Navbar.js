import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (<div>
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" href="#">ExerTracker</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" href="#">Exercises</Link>
        </li>
        <li className="nav-item">
          <Link to='/create' className="nav-link " href="#">Create Exercise Log</Link>
        </li>
        
        <li className="nav-item">
          <Link to="/user" className="nav-link " href="#">Create User</Link>
        </li>
       
        
      </ul>
     
    </div>
  </div>
</nav>


</div>
  )
}

export default Navbar
