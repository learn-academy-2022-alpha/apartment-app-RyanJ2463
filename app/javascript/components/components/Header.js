import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
        <div className="header">
        <h1>Find your dream apartment</h1>
            <div className="nav-links">
                <ul>
                    <NavLink to="/" className="homeicon">🏠</NavLink> 
                </ul>
                <ul>
                    <NavLink to="/AptIndex">Find your apartment</NavLink>
                </ul>
            </div>
        </div>
    )
  }
}

export default Header