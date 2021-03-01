import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'gatsby';
import Results from './SearchListings/Results';
import resultsbox from './ComponentStyles/Search.module.scss';
import { InlineLoading } from 'carbon-components-react';
// import { Loading } from "carbon-components-react";

class RegionListing extends Component {
    state = {
        renderResults: [],
        loading: true,
    }

    getAllRegion = () => {
        console.log('getting all region ' + this.props.region)
        axios.post(process.env.GATSBY_LIGHTSPOKE_URL, {
            login_token: process.env.GATSBY_LIGHTSPOKE_KEY,
            doc: '10708761',
            'runtime.q1': this.props.region
        })
        .then(({ data }) => {
            this.setState({
                renderResults: data.RecordList,
                loading: false
            })
        })
    }

    componentDidMount(){
        this.getAllRegion()
    }

    render() {
        return (
            <div>
            <div className={`listing-hed listing-${this.props.color}`}>
                <h3>{this.props.title}</h3>
            </div>
            <p className={`region-all-leadin`}>Browse all attractions in the {this.props.title} region. You can also search for an attraction or city by name on the <Link to="/things-to-do-in-texas">search listings page</Link>.</p>
            <div className={`region-loader-${this.props.color}`}>
            {this.state.loading && <InlineLoading description="Loading..." />}
            </div>
            <Results className={resultsbox} listings={this.state.renderResults}></Results>
            </div>
        )
    }
}

export default RegionListing