import React from 'react'

import './styles/LandingContent.css'

function LandingContent() {
  return (
    <div>
        <section className='landing'>
            <div className='landing__content__1'>
                <h1>Organize your work and life, finally.</h1>
                <p>Become focused, organized, and calm with Todoist. The world’s #1 task manager and to-do list app.</p>
                <a href='/signup' className='label get-started'><span>Start for free</span></a>
            </div>
        </section>
    </div>
  )
}

export default LandingContent