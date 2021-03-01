import React from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';

function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

function getSuggestionValue(suggestion) {
    return suggestion["City Name"];
  }
  
  function renderSuggestion(suggestion) {
    return (
      <span>{titleCase(suggestion["City Name"])}</span>
    );
  }

  function renderSectionTitle(section) {
    return (
      <strong>{section.title}</strong>
    );
  }
  
  function getSectionSuggestions(section) {
    return section.languages;
  }
  

class SimpleSearch extends React.Component {
    constructor() {
      super()
      this.state = { value: '', suggestions: [], cities: []}
    }
  
    onChange = (event, { newValue, method }) => {
      this.setState({ value: newValue });
    }
    
    onSuggestionsFetchRequested = ({ value }) => {

        axios.post(process.env.GATSBY_LIGHTSPOKE_URL, {
            login_token: process.env.GATSBY_LIGHTSPOKE_KEY,
            doc: '8649094',
            'runtime.q0': value
        })
        .then(({ data }) => {
           this.setState({
             cities: data.RecordList
           })
           axios.post(process.env.GATSBY_LIGHTSPOKE_URL, {
            login_token: process.env.GATSBY_LIGHTSPOKE_KEY,
            doc: '10708761',
            'runtime.q3': value
            })
            .then(({ data }) => {
            this.setState({
                suggestions: [{ 
                                title: 'Cities',
                                results: this.state.cities
                               },
                               {
                                title: 'Attractions',
                                results: data.RecordList
                               }
                            ]
            })
            })
            .catch(function(error) {
                console.log(error);
            })
         })
         .catch(function(error) {
             console.log(error);
         })
    }
  
    onSuggestionsClearRequested = () => {
      this.setState({ suggestions: [] });
    };
  
    render() {
      const { value, suggestions } = this.state;
      const inputProps = {
        placeholder: "Search a City",
        value,
        onChange: this.onChange
      };
  
      return (
        <Autosuggest 
          multiSection={true}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          renderSectionTitle={renderSectionTitle}
          getSectionSuggestions={getSectionSuggestions}
          inputProps={inputProps} />
      );
    }
  }

  export default SimpleSearch