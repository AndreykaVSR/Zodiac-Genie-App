import React, { Component } from 'react';
import CurrentFortune from '../components/CurrentFortune/CurrentFortune';

class Aztro extends Component {
    constructor(props){
        super(props);
        this.state = {
          json: {}
        }
    }

    // componentDidMount () {
    //     const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
    //     fetch(URL, {
    //         method: 'POST'
    //     })
    //     .then(response => response.json())
    //     .then(json => { 
    //         console.log(json);
    //         this.setState({json}); });
    // }

    render() {
        return (
          <div>
                {/* <h1> Horoscope: </h1> */}
                
          </div>
        );
    }
}

export default Aztro;


{/* <CurrentFortune
                    Current Date= {this.state.json.current_date}
                    Compatibility= {this.state.json.compatibility}
                    Lucky Number= {this.state.json.lucky_number}
                    Lucky Time= {this.state.json.lucky_time}
                    Color= {this.state.json.color}
                    Date Range= {this.state.json.date_range}
                    Mood= {this.state.json.mood}
                    Description= {this.state.json.description}
                /> */}