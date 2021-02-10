import React, { Component } from 'react'

// onClick={this.props.handleClick} onKeyDown={this.props.handleClick}>

class AttractionSuggestion extends Component {
  render() {
    const options = this.props.attractions.map(r => (
      <li key={r["AttractionId"]} data-attraction={r["AttractionId"]} data-name={r["Attraction Title"]}>
          {r["Attraction Title"]}
      </li>
    ))
    return (
      <div>
        <p>Attractions:</p>
        <ul onClick={this.props.handleClick} onKeyDown={this.props.handleClick}>{options}</ul>
      </div>
    )
  }
}

export default AttractionSuggestion