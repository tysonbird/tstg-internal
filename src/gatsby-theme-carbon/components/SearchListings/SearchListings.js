import React, { Component } from "react";
import { Form, TextInput, Loading } from "carbon-components-react";
import axios from 'axios';
import queryString from 'query-string';
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
   region: '',
   loadingRegion: false
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

  getAllRegion = () => {
    let region = this.state.region;
    this.setState({
      loadingRegion: true,
    })
    axios.post(process.env.GATSBY_LIGHTSPOKE_URL, {
      login_token: process.env.GATSBY_LIGHTSPOKE_KEY,
      doc: '10708761',
      'runtime.q1': region
  })
  .then(({ data }) => {
     this.setState({
       loadingRegion: false,
       renderResults: data.RecordList
     })
   })
   .catch(function(error) {
       console.log(error);
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

  componentDidMount(){

    const parsed = queryString.parse(window.location.search);
    const region = parsed.region;
    switch (region) {
      case 'south-texas-plains':
        this.setState({
          query: 'Region: South Texas Plains',
          region: 'SOUTH TEXAS PLAINS',
        }, () => {
        this.getAllRegion();
        })
        break;
      case 'gulf-coast':
        this.setState({
          query: 'Region: Gulf Coast',
          region: 'GULF COAST',
        }, () => {
          this.getAllRegion();
        })
        break;
      case 'piney-woods':
        this.setState({
          query: 'Region: Piney Woods',
          region: 'PINEY WOODS',
        }, () => {
          this.getAllRegion();
          })
        break;
      case 'prairies-and-lakes':
        this.setState({
          query: 'Region: Prairies and Lakes',
          region: 'PRAIRIES AND LAKES',
        }, () => {
          this.getAllRegion();
          })
        break;
        case 'hill-country':
          this.setState({
            query: 'Region: Hill Country',
            region: 'HILL COUNTRY',
          }, () => {
            this.getAllRegion();
            })
          break;
        case 'big-bend-country':
          this.setState({
            query: 'Region: Big Bend Country',
            region: 'BIG BEND COUNTRY',
          }, () => {
            this.getAllRegion();
            })
          break;
        case 'panhandle-plains':
          this.setState({
            query: 'Region: Panhandle Plains',
            region: 'PANHANDLE PLAINS',
          }, () => {
            this.getAllRegion();
            })
          break;
      default:
        console.log(`No region match for ${region}, or nothing was set`);
    }
    
  }

 render() {
     const showCity = (this.state.cityResults.length > 0) ? true : false;
     const showAttraction = (this.state.attractionResults.length > 0) ? true : false;
   return (
     <div className={searcharea}>
      <Form>
          <TextInput
          helperText=""
          id="tstgSearch"
          invalidText="Invalid error message."
          labelText='Try a city name, like "Austin," or an attraction name, like "State Capitol Complex"'
          placeholder='Search the Travel Guide'
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
      {this.state.loadingRegion &&
        <div>
          <Loading description="Loading this region" withOverlay={false}/>
          <p>Loading {this.state.query}</p>
        </div>
      }
      {this.state.renderResults &&
          <Results className={resultsbox} listings={this.state.renderResults}></Results>
      }
    </div>
   )
 }
}

// IDEA: Create a state called like "ready to present listings" and then create a component that takes any amount of listing data and renders it as cards. 

export default SearchListings