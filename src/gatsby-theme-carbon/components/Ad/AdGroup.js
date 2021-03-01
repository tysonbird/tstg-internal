import React, { Component } from "react"
import adIndex from "../../../../static/adIndex.json"
import AdImage from "./AdImage.js"
import { ad } from '../ComponentStyles/Ads.module.scss';

class AdGroup extends Component {
    state = {
        adURL: '',
        adFilename: '',
    }

    componentDidMount(){
        const adArray = this.props.id;
        var adPassed;
        if (adArray.length === 1) {
            adPassed = adArray[0];
        }
        else {
            var arrayMinus = adArray.length -1;
            var randInt = Math.floor(Math.random() * (arrayMinus - 0 + 1) + 0);
            adPassed = adArray[randInt];
        }

        for (var i = 0; i < adIndex.length; i++){
            // look for the entry with a matching `code` value
            if (adIndex[i].id === adPassed){
                this.setState({
                    adURL: adIndex[i].url,
                    adFilename: 'ads/' + adIndex[i].filename
                  })
            }
        }
    }

    render() {
    return (
        <div className={ad}>
            <p>Advertisement</p>
            <a href={this.state.adURL} rel="noopener noreferrer" target="_blank">
                {this.state.adFilename &&
                    <AdImage src={this.state.adFilename}/>
                }
            </a>
        </div>
    )
    }
}

  export default AdGroup