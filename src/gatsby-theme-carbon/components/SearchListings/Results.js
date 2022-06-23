import React, { Component } from 'react'
import { results, resultsbox } from '../ComponentStyles/SearchResults.module.scss';
import { Launch32 } from '@carbon/icons-react';
import AdGroup from '../Ad/AdGroup.js'

// function titleCase(str) {
//     return str.toLowerCase().split(' ').map(function(word) {
//       return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ');
// }

class Results extends Component {
  render() {
    const options = this.props.listings.map((r, index) => {
      if (this.props.ads !== undefined && index % 7 === 0 && index !== 0) {
        return (
          <>
          <AdGroup id={this.props.ads} key={index}/>
          <div key={r["AttractionId"]} className={resultsbox}>
            <h3>{r["Attraction Title"]}</h3>
            <p><span>{r["City"]}</span>
            {r["Description for TravelTex.com"]}</p>
            {r["Hours"] && <p><span>Hours: </span>{r["Hours"]}</p>}
            {r["Address"] && <p><span>Address: </span>{r["Address"]}</p>}
            {r["Website"] && <p><a rel="noopener noreferrer" target="_blank" href={'http://' + r["Website"]}>Website</a> <i><Launch32/></i></p>}
            {r["Phone"] && <p><span>Phone: </span>{r["Phone"]}</p>}
          </div>
          </>
        )
      }
      else {
        return(
          r["Description for TravelTex.com"] && 
            <div key={r["AttractionId"]} className={resultsbox}>
            <h3>{r["Attraction Title"]}</h3>
            <p><span>{r["City"]}</span>
            {r["Description for TravelTex.com"]}</p>
            {r["Hours"] && <p><span>Hours: </span>{r["Hours"]}</p>}
            {r["Address"] && <p><span>Address: </span>{r["Address"]}</p>}
            {r["Website"] && <p><a rel="noopener noreferrer" target="_blank" href={'http://' + r["Website"]}>Website</a> <i><Launch32/></i></p>}
            {r["Phone"] && <p><span>Phone: </span>{r["Phone"]}</p>}
          </div>
        )
      }
  })
    return (
      <div className={results}>{options}</div>
    )
  }
}

export default Results