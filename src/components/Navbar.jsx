import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul>
            <li>
                <NavLink to='/flights' className='nav-link'>
                   <div>
                     <img alt='ixigo flights' src='https://edge.ixigo.com/st/vimaan/_next/static/media/flight.f515b25a.svg'/>
                   </div>
                   <p>Flights</p>
                </NavLink>
            </li>
            <li>
                <NavLink to='/hotels' className='nav-link'>
                   <div>
                     <img alt='ixigo hotels' src='https://edge.ixigo.com/st/vimaan/_next/static/media/hotel.4b63222d.svg'/>
                   </div>
                   <p>Hotels</p>
                </NavLink>
            </li>
            <li>
                <NavLink to='/trains' className='nav-link'>
                   <div>
                     <img alt='ixigo trains' src='https://edge.ixigo.com/st/vimaan/_next/static/media/train.d3e3d1e5.svg'/>
                   </div>
                   <p>Trains</p>
                </NavLink>
            </li>
            <li>
                <NavLink to='/buses' className='nav-link'>
                   <div>
                     <img alt='ixigo buses' src='https://edge.ixigo.com/st/vimaan/_next/static/media/bus.1942c5dd.svg'/>
                   </div>
                   <p>Buses</p>
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar