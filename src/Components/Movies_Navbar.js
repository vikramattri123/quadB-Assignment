import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Css/Navbar.module.css';

const Movies_Navbar = () => {


  
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{padding:'10px'}}>
  <NavLink class="navbar-brand" to="/" style={{textDecoration:'none',color:'white',padding:'15px'}}>Movies.com</NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <NavLink class="nav-link" to="/" style={{textDecoration:'none',color:'white'}}>Home</NavLink>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Movies_Navbar