import React from 'react'
import { NavLink } from 'react-router-dom';





const Header =() =>{
<div>
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Brand</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><NavLink to="/">Create post</NavLink></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Sign in</a></li>
      </ul>
    </div>
  </div>
</nav>
</div>
}

export default Header;