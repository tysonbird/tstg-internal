import React from "react"

function Hero(props) {
    const heroStyle = {
        backgroundImage: `url(${props.image})`,
    }    
    return (
      <div className="tstg-hero" style={heroStyle}>
          <div className="tstg-hero-text">
            <p>From the publishers of Texas Highways Magazine</p>
            <h1>Texas State <br/>Travel Guide</h1>
            <a href="https://traveltexas.com"><img src={props.logo} alt="Let's Texas"></img></a>
            <p><a href="https://traveltexas.com">TravelTexas.com</a></p>
        </div>
      </div>
    )
  }

  export default Hero