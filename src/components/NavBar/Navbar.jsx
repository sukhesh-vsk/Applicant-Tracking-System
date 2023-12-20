import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='sidebar__container'>
        <h2>WORKSPACE</h2>
        <ul>
          <div className='sidebar__items'>
            <a>
              <li>Tasks</li>
            </a>
          </div>
          <div className='sidebar__items'>
            <a>
              <li>Notes</li>
            </a>
          </div>
          <div className='sidebar__items'>
            <a>
              <li>Remainder</li>
            </a>
          </div>
        </ul>
    </div>
  )
}

export default Navbar