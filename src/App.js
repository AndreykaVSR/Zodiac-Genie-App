import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import SignupPopup from './components/SignupPopup/SignupPopup';
import LoginPage from './components/LoginPage/LoginPage';
import './App.css';


const horoscope = {
  health: "Drink lots of water and switch to a healthier diet. You don't need to change anything radically, but make some small steps towards better health. This will boost your immune system.",
  personalLife: "If you are single go out and approach someone who you are attracted to. You might even start a relationship with that person. If you are taken, you will be very affectionate and gentle towards your partner.",
  travel: "Avoid making long trips today and be safe on the road. Keep your eyes open and obey all the laws in traffic.",
  profession: "There have been a few ups and downs in your career, but that's to be expected when you want to be the best. Mistakes are bound to be made and lessons are bound to be learned.",
  luck: "The numbers 14 and 21 are your lucky numbers of the day. Invest in some property today.",
  emotions: "You are extremely responsible which means that when you say that you are going to do something, you are going to that. However, you haven't been reliable lately. Make up for that!"
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='header-footer'>Z O D I A C &nbsp;&nbsp;&nbsp;  G E N I E</header>
        <NavBar
        horoscope={horoscope[this.props.health]}
        />
        <SignupPopup
        />
        <LoginPage
        />
      </div>
    );
  }
}

export default App;
