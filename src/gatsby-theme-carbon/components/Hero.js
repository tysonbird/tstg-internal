import React from "react"

function Hero(props) {
    const heroStyle = {
        backgroundImage: `url(${props.image})`,
    }    
    return (
      <div className="tstg-hero" style={heroStyle}>
          <div className="tstg-hero-text">
            <p>From the publishers of Texas Highways Magazine</p>
            <div className="tstg-hero-logo">
              <img src={props.headlineLogo} alt="Texas State Travel Guide"></img>
            </div>
            <a href="https://traveltexas.com"><img src={props.logo} alt="Let's Texas"></img></a>
            <p><a href="https://traveltexas.com">TravelTexas.com</a></p>
            <a href="https://txdot.gov"><img src={props.txdotlogo} alt="Texas Department of Transportation"></img></a>
        </div>
      </div>
    )
  }

  export default Hero