import React from 'react'
 import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='Navbr'>
    <div className="left"><div className="logo">Assesment</div></div>
    <div className="right">
      
        <Link className="navbrlink"to="/Adduser">Insert Data</Link>
        <Link className="navbrlink"to ="/">View All Data</Link>
        <Link className="navbrlink"to = "/edit">Delete & Update</Link>
        <Link className="navbrlink"to = "/rank">Rank</Link>
     
    </div>
    </div>
  )
}
