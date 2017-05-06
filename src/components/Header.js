import React from 'react'
import { NavLink } from 'react-router-dom';


const divStyle = {
  
  'border-radius' :'0px',
};


const Header =() =>(
<div>
<nav className="navbar navbar-default" style={divStyle}>
  <div className="container-fluid">
    <div className="navbar-header">
    <NavLink className="navbar-brand" to="/">My Site</NavLink>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><NavLink to="/content">Post</NavLink></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Sign in</a></li>
      </ul>
    </div>
  </div>
</nav>
</div>
)

export default Header;