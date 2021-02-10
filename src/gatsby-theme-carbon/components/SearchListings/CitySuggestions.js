import React, { Component } from 'react'

function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

class CitySuggestion extends Component {
  render() {
    const options = this.props.results.map(r => (
      <li key={r["City Name"]} data-city={titleCase(r["City Name"])}>
          {titleCase(r["City Name"])}
      </li>
    ))
    return (
      <div>
        <p>Cities:</p>
        <ul onClick={this.props.handleClick} onKeyDown={this.props.handleClick}>{options}</ul>
      </div>
    )
  }
}

export default CitySuggestion