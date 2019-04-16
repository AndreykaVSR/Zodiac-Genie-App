import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import userService from '../../components/userService/userService';
import './AnyDayFortune.css';


class AnyDayFortune extends Component {

    props = {
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
            <form onSubmit={this.horoscopeFetchDate}>
            <input placeholder='date' name="date" onChange={this.handleChange} />
            <button className="btn" type='subit'>Get It</button>
          </form>
          </div>
          <div className="AnyDayFortune"> 
              <header className="horoscopeHeader">Your wish is my command... Here's Your Horoscope for {this.props.Date}!</header>
              
            <div className="horoscopeText">
                <li><span>Current Date:</span>  {this.props.currentDate}</li><br/>
                <li><span>Compatibility:</span>  {this.props.compatibility}</li><br/>
                <li><span>Lucky Number:</span>  {this.props.luckyNumber}</li><br/>
                <li><span>Lucky Time:</span>  {this.props.luckyTime}</li><br/>
                <li><span>Color:</span>  {this.props.color}</li><br/>
                <li><span>Date Range:</span>  {this.props.dateRange}</li><br/>
                <li><span>Mood:</span>  {this.props.mood}</li><br/>
                <li><span className='Descripton'>Description:</span>  {this.props.description}</li><br/>
            </div>
          </div>
        </div>
      );
    }
  };


export default AnyDayFortune;;