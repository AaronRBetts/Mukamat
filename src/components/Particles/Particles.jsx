import React from 'react';
import Particles from "react-tsparticles";


const Particles = () => {

    return(
        <Particles
          id="tsparticles"
          url="./Particles.json"
          init={this.particlesInit}
          loaded={this.particlesLoaded}
        />        
    )
}

export default Particles;