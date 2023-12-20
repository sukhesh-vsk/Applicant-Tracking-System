import React from 'react'

import LandingNavBar from './LandingNavBar'
import LandingFooter from './LandingFooter'

function LandingPage() {
  return (
    <div>
      <div>
        <LandingNavBar />
      </div>
    <hr/>
      <div>
        <LandingFooter />
      </div>
    </div>
  )
}

export default LandingPage