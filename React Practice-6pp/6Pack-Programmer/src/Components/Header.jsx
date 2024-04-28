import React from 'react'

import {Link} from "react-router-dom"

function Header() {
  return (
    <nav>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
    </nav>
  )
}

export default Header