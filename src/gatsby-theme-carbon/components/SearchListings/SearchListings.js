import React, { Component } from "react";
import { Form, TextInput } from "carbon-components-react";
import axios from 'axios';
import CitySuggestion from './CitySuggestions';
import AttractionSuggestion from './AttractionSuggestions';
import Results from './Results';
import { searcharea, searchbox, resultsbox } from '../ComponentStyles/Search.module.scss';

// Example Abilene grab: https://www.lightspoke.com/viewjson.do?doc=10708761&viewmaxrows=1&runtime.q1=PANHANDLE%20PLAINS&runtime.q2=ABIL

// List of everything is doc 10708761

class SearchListings extends Component {
 state = {
   query: '',
   cityResults: [],
   attractionResults: [],
   selectedCity: '',
   selectedAttraction: '',
   showSuggestions: false,
   renderResults: [],
   loading: false,
 }

 getListingsByCity = () => {
    let cityName = this.state.selectedCity.replace(/ /g, ' +')
    axios.post(process.env.GATSBY_LIGHTSPOKE_URL, {
        login_token: process.env.GATSBY_LIGHTSPOKE_KEY,
        doc: '10708761',
        'runtime.q2': cityName
    })
    .then(({ data }) => {
       this.setState({
         renderResults: data.RecordList
       })
     })
     .catch(function(error) {
         console.log(error);
     })
 }

 getAttractionById = () => {
  axios.post(process.env.GATSBY_LIGHTSPOKE_URL, {
      login_token: process.env.GATSBY_LIGHTSPOKE_KEY,
      doc: '10708761',
      'runtime.q4': this.state.selectedAttraction
  })
  .then(({ data }) => {
     this.setState({
       renderResults: data.RecordList
     })
   })
   .catch(function(error) {
       console.log(error);
   })
}

 cityClick = (response) => {
    let cityName = response.target.dataset.city;
    this.setState({
        showSuggestions: false,
        selectedCity: cityName,
        query: cityName,
    }, () => {
    this.getListingsByCity();
    })
  }

  attractionClick = (response) => {
  let attractionId = response.target.dataset.attraction;
  let attractionName = response.target.dataset.name;
  this.setState({
    showSuggestions: false,
    selectedAttraction: attractionId,
    query: attractionName,
  }, () => {
    this.getAttractionById();
  })
}

  getAttractionInfo = () => {
    let searchField = this.state.query;
    searchField = searchField.replace(/ /g, ' +');
    axios.post(process.env.GATSBY_LIGHTSPOKE_URL, {
        login_token: process.env.GATSBY_LIGHTSPOKE_KEY,
        doc: '10708761',
        'runtime.q3': searchField
    })
    .then(({ data }) => {
       this.setState({
         attractionResults: data.RecordList
       })
     })
     .catch(function(error) {
         console.log(error);
     })
}

 getCityInfo = () => {
    let searchField = this.state.query;
    this.setState({
        loading: true,
    })
    searchField = searchField.replace(/ /g, ' +');
    axios.post(process.env.GATSBY_LIGHTSPOKE_URL, {
        login_token: process.env.GATSBY_LIGHTSPOKE_KEY,
        doc: '8649094',
        'runtime.q0': searchField
    })
    .then(({ data }) => {
       this.setState({
         cityResults: data.RecordList,
         loading: false,
       })
     })
     .catch(function(error) {
         console.log(error);
     })
}

handleBlur = () => {
    // this.setState({
    //     showSuggestions: false
    // })
}

handleInputChange = () => {
    this.setState({
      query: this.search.value,
    }, () => {
      if (this.state.query === "") {
        this.setState({
          showSuggestions: false,
          renderResults: []
        })
      } 
      if (this.state.query && this.state.query.length > 0) {
          this.setState({
            showSuggestions: true
          })
          if (this.state.query.length % 2 === 0) {
          this.getCityInfo()
          }
        }
      if (this.state.query && this.state.query.length >= 4) {
        if (this.state.query.length % 2 === 0) {
            this.getAttractionInfo()
        }
      }
    //   else {
    //       this.setState({
    //           showSuggestions: false
    //       })
    //   }
    })
  }

 render() {
     const showCity = (this.state.cityResults.length > 0) ? true : false;
     const showAttraction = (this.state.attractionResults.length > 0) ? true : false;
   return (
     <div className={searcharea}>
      <Form>
          <TextInput
          helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
          id="test2"
          invalidText="Invalid error message."
          labelText="Text input label"
          placeholder="Placeholder text"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
          onBlur={this.handleBlur}
          value={this.state.query}
          />
          {this.state.showSuggestions &&
              <div className={searchbox}>
                  {this.state.loading && <p>Loading...</p>}
                  {showCity && (<CitySuggestion results={this.state.cityResults} handleClick={this.cityClick}/>)}
                  {showAttraction && (<AttractionSuggestion attractions={this.state.attractionResults} handleClick={this.attractionClick}/>)}
              </div>
          }
      </Form>
      {this.state.renderResults &&
          <Results className={resultsbox} listings={this.state.renderResults}></Results>
      }
    </div>
   )
 }
}

// IDEA: Create a state called like "ready to present listings" and then create a component that takes any amount of listing data and renders it as cards. 

export default SearchListings