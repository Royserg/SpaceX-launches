import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className='nav nav-pills nav-justified mb-3'>
      <NavLink exact to='/' className='nav-link' activeClassName='active'>Launches</NavLink>
      <NavLink exact to='/rockets' className='nav-link' activeClassName='active'>Rockets</NavLink>
    </nav>
  )
}
