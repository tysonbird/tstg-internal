import React from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import { Search, InlineLoading } from 'carbon-components-react';
import Results from './Results.js';
import { Launch32 } from '@carbon/icons-react';
import { resultsbox } from '../ComponentStyles/Search.module.scss';

function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

function getSuggestions(value) {
  
  if (value === []) {
    return 'No results found. Please try another search.';
  }

  else {
    return value
    .map(section => {
      return {
        title: section.title,
        results: section.results
      };
    })
    .filter(section => section.results.length > 0);
  }
}

function getSuggestionValue(suggestion) {
    if (suggestion["City Name"] !== undefined) {
      return (
        titleCase(suggestion["City Name"])
      );
    }
    else {
      return (
        suggestion["Attraction Title"]
      )
    }
  }

  function shouldRenderSuggestions(value) {
    return value.trim().length > 2;
  } 
  
  function renderSuggestion(suggestion) {    
    if (suggestion["City Name"] !== undefined) {
      return (
        <span>{titleCase(suggestion["City Name"])}</span>
      );
    }
    else {
      return (
        <span>{suggestion["Attraction Title"]}</span>
      )
    }
  }

  function renderSectionTitle(section) {
    return (
      <p>{section.title}</p>
    );
  }
  
  function getSectionSuggestions(section) {
    return section.results;
  }
  

class SimpleSearch extends React.Component {
    constructor() {
      super()
      this.state = { 
        value: '', 
        suggestions: [], 
        cities: [], 
        renderResults: [], 
        loading: false,
        noResults: false,
        cityInfo: '',
        cityName: '',
      }
    }

    onSuggestionSelected = (event, {suggestion}) => {

      if (suggestion["City Name"] !== undefined) {
        axios.post(process.env.GATSBY_LIGHTSPOKE_URL, {
          login_token: process.env.GATSBY_LIGHTSPOKE_KEY,
          doc: '10708761',
          'runtime.q2': suggestion["City Name"]
          })
          .then(({ data }) => {
            this.setState({
                cityInfo: {
                            'name': suggestion["City Name"],
                            'description': suggestion["Description"],
                            'visitorName': suggestion["Name"],
                            'hours': suggestion["Hours"],
                            'phone': suggestion["Phone 1"],
                            'website': suggestion["Website 1"]
                          },
                renderResults: [data.RecordList][0]
            })
          })
          .catch(function(error) {
              console.log(error);
          })
      }

      this.setState({
        renderResults: [suggestion]
      })
    }
  
    onChange = (event, { newValue, method }) => {
      this.setState({ value: newValue, noResults: false });
    }
    
    onSuggestionsFetchRequested = ({ value }) => {

      if (value.trim().length > 2) {

        value = value.replace(/ /g, ' +')

        this.setState({
          loading: true,
          noResults: false,
          cityInfo: '',
        })

        axios.post(process.env.GATSBY_LIGHTSPOKE_URL, {
            login_token: process.env.GATSBY_LIGHTSPOKE_KEY,
            doc: '10723078',
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
            if (data.RecordList.length < 1 && this.state.cities.length < 1) {
              this.setState({
                suggestions: getSuggestions([]),
                loading: false,
                noResults: true
              })
            }
            else {
              const dataReturn = [{ 
                title: 'Cities',
                results: this.state.cities
              },
              {
                title: 'Attractions',
                results: data.RecordList
              }];
              this.setState({
                  suggestions: getSuggestions(dataReturn),
                  loading: false,
                  noResults: false
              }) 
            }
            })
            .catch(function(error) {
                console.log(error);
            })
         })
         .catch(function(error) {
             console.log(error);
         })
      }
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

      const renderInputComponent = inputProps => (
          <Search
          {...inputProps}
          id="tstgSearch"
          labelText='Try a city name, like "Austin," or an attraction name, like "State Capitol Complex"'
          placeholder='Search the Travel Guide'
          />
      );
  
      return (
      <div>
        <Autosuggest 
          multiSection={true}
          suggestions={suggestions}
          renderInputComponent={renderInputComponent}
          onSuggestionHighlighted={this.onSuggestionHighlighted}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          renderSectionTitle={renderSectionTitle}
          getSectionSuggestions={getSectionSuggestions}
          onSuggestionSelected={this.onSuggestionSelected}
          shouldRenderSuggestions={shouldRenderSuggestions}
          highlightFirstSuggestion={true}
          inputProps={inputProps} />
          {this.state.noResults &&
            <InlineLoading description="No results found. Please try another search." status="error" />
          }
          {this.state.loading &&
            <InlineLoading description="Loading..." />
          }
          {this.state.cityInfo &&
            <div className="city-info">
              <h3>{titleCase(this.state.cityInfo["name"])}</h3>
              <p>{this.state.cityInfo["description"]}</p>
              <p><span>Visitor information:</span></p>
              <p>{this.state.cityInfo["visitorName"]}</p>
              <p>{this.state.cityInfo["hours"]}</p>
              <p>{this.state.cityInfo["phone"]}, <a rel="noopener noreferrer" target="_blank" href={'http://' + this.state.cityInfo["website"]}>{this.state.cityInfo["website"]}</a><i><Launch32/></i></p>
            </div>
          }
          {this.state.renderResults &&
            <Results className={resultsbox} listings={this.state.renderResults} ads={['ad35','ad93','ad01','ad69','ad65','ad86','ad22','ad16','ad68','ad71','ad59','ad60','ad62','ad64','ad08','ad73','ad53','ad47','ad21','ad51','ad50','ad85','ad26','ad03','ad42','ad67','ad44','ad12','ad24','ad25','ad31','ad87','ad88','ad89','ad63','ad66','ad58','ad52','ad48','ad39','ad27','ad30','ad10','ad17','ad19','ad05','ad14','ad07','ad11','ad03']}></Results>
          }
        </div>
      );
    }
  }

  export default SimpleSearch