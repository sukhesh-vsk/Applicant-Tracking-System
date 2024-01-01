import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar__container p-3'>
        <h3>WORKSPACE</h3>
        <ul className='sidebar__contents p-2'>
          <li classname='sidebar__label'>
            <a>
              <div className='sidebar__items'>
                  Tasks
              </div>
            </a>
          </li>
          <li classname='sidebar__label'>
            <a>
            <div className='sidebar__items'>
                Notes
            </div>
            </a>
          </li>
          <li classname='sidebar__label'>
            <a>
            <div className='sidebar__items'>
                Remainder
            </div>
            </a>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar