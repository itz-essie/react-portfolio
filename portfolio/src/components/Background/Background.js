import React, { Component } from 'react'

import ParticlesBg from 'particles-bg'

class Background extends Component {
  render () {
    return (
      <>
        <div>...</div>
        <ParticlesBg num={200} type="circle" bg={true} />
      </>
    )
  }
}

export default Background