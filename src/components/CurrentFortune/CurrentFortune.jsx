import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import userService from '../../components/userService/userService';
import './CurrentFortune.css';


class CurrentFortune extends Component {

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
        <div className="LoginPage"> 
            <header className="header-footer">Here is Your Horoscope for Today!</header>
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


export default CurrentFortune;;