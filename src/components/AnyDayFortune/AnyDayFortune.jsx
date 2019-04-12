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
        <div className="AnyDayFortune"> 
            <header className="horoscopeHeader">Here's Your Horoscope for ... {Date}!</header>
            <div className="form-group">
            { this.state.health }
            { this.state.personalLife }
            { this.state.travel }
            { this.state.profession }
            { this.state.luck }
            { this.state.emotions }
            </div>
        </div>
      );
    }
  };


export default AnyDayFortune;;