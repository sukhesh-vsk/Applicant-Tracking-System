import React from 'react'

import LandingNavBar from './LandingNavBar'
import LandingFooter from './LandingFooter'
import LandingContent from './LandingContent'

function LandingPage() {
  return (
    <div>
      <div>
        <LandingNavBar />
      </div>
      <div>
        <LandingContent />
      </div>
    <hr/>
      <div>
        <LandingFooter />
      </div>
    </div>
  )
}

export default LandingPage