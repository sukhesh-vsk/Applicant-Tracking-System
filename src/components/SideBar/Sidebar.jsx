import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar__container'>
        <h3>WORKSPACE</h3>
        <ul className='sidebar__contents'>
          <li>
            <div className='sidebar__items'>
              <a>
                Tasks
              </a>
            </div>
          </li>
          <li>
            <div className='sidebar__items'>
              <a>
                Notes
              </a>
            </div>
          </li>
          <li>
            <div className='sidebar__items'>
              <a>
                Remainder
              </a>
            </div>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar