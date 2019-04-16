import React, { Component } from 'react';
import CurrentFortune from '../CurrentFortune/CurrentFortune';
import AnyDayFortune from '../AnyDayFortune/AnyDayFortune';

class Horoscope extends Component {
    constructor(props){
        super(props);
        this.state = {
          json: {}
        }
    }


    horoscopeFetch = async () => {
        const fetchHoroscopeData = await fetch('https://aztro.sameerkumar.website/?sign=aries&day=today', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const parsedResponse = await fetchHoroscopeData.json();
        return parsedResponse;
        }

    horoscopeFetchDate = async (e) => {
        e.preventDefault();
        const fetchHoroscopeData = await fetch('https://aztro.sameerkumar.website/?sign=aries&day=' + this.state.date, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            }
        })
        const parsedResponse = await fetchHoroscopeData.json();
        this.setState({customHoroscope: parsedResponse});
        console.log(this.state.customHoroscope)
        }

        handleChange = (e) => {
            console.log(e.currentTarget.value)
          this.setState({
            [e.currentTarget.name]: e.currentTarget.value
          })
          }

    componentDidMount () { 
        this.horoscopeFetch().then((data) => {
            console.log(data);
            this.setState({json: data})
        })
    }

    render() {
        return (
          <div>
                {/* <h1> Horoscope: </h1> */}
            <CurrentFortune
                currentDate= {this.state.json.current_date}
                compatibility= {this.state.json.compatibility}
                luckyNumber= {this.state.json.lucky_number}
                luckyTime= {this.state.json.lucky_time}
                color= {this.state.json.color}
                dateRange= {this.state.json.date_range}
                mood= {this.state.json.mood}
                description= {this.state.json.description}
            /> 
            <AnyDayFortune
                currentDate= {this.state.json.current_date}
                compatibility= {this.state.json.compatibility}
                luckyNumber= {this.state.json.lucky_number}
                luckyTime= {this.state.json.lucky_time}
                color= {this.state.json.color}
                dateRange= {this.state.json.date_range}
                mood= {this.state.json.mood}
                description= {this.state.json.description}
            /> 
          </div>
        );
    }
}

export default Horoscope;

