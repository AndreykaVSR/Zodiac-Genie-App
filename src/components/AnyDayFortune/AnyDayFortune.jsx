import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import userService from '../../components/userService/userService';
import './AnyDayFortune.css';


class AnyDayFortune extends Component {

    state = {
        health: '',
        personalLife: '',
        travel: '',
        profession: '',
        luck: '',
        emotions: ''
    };
  
    handleChange = (e) => {
      this.setState({
        // Using ES2015 Computed Property Names
        [e.target.name]: e.target.value
      });
    }

  
    render() {
      return (
        <div className="col-sm-12">
          <div className="NewDateSearchForm">
            <label className="SearchHoroscopeDate">Search for a specific Date:</label>
            <input type="date" className="NewDateForm" value={this.state.date} name="date" onChange={this.handleChange} />
          </div>
          <div className="AnyDayFortune"> 
              <header className="horoscopeHeader">Your wish is my command... Here's Your Horoscope for ... !</header>
              <div className="form-group">
                {/* { this.state.health }
                { this.state.personalLife }
                { this.state.travel }
                { this.state.profession }
                { this.state.luck }
                { this.state.emotions } */}
              </div>
          </div>
        </div>
      );
    }
  };


export default AnyDayFortune;;