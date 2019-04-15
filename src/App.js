import React, { Component } from 'react';
import { Route, /* Switch */ /*Redirect */ } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SignupPopup from './components/SignupPopup/SignupPopup';
import LoginPage from './components/LoginPage/LoginPage';
import CurrentFortune from './components/CurrentFortune/CurrentFortune';
import AnyDayFortune from './components/AnyDayFortune/AnyDayFortune';
import userService from './utils/userService';
import aztroService from './utils/aztroService';
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
  // constiructor(props) {
  //   super(props);
  //   this.state = {
  //       user: null,
  //       horoscope: horoscope
  //   }
  // }
  
  state = {
    user: null,
    horoscope: horoscope
  }

  getNewHoroscope(){
    return {
      horoscope: ['']
    }
  };


  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  async componentDidMount() {
    // fetch("POST: https://aztro.sameerkumar.website")
    // .then((res) => res.json())
    // .then((data) => {
    //   console.log(data);
    // })
    const horoscope = await aztroService.index();
    const user = userService.getUser();
    this.setState({ horoscope, user });
  }

  render() {
    return (
      <div className="App">
        {/* <Switch> */}
          {/* <header className='header-footer'>Z O D I A C &nbsp;&nbsp;&nbsp;  G E N I E</header> */}
          <NavBar
            user={this.state.user}
            
          />
          <Route path='/signup' render={({ history }) => 
            <SignupPopup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }
          /> 
          <Route path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleLogout={this.handleLogout}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/horoscope' render={(props) => (
            // userService.getUser() ? 
              <CurrentFortune
              horoscope={this.props.horoscope}
                { ...props }
              />
              // :
            // <Redirect to='/login' />
          )}/>
          <Route exact path='/horoscope' render={(props) => ( 
            // userService.getUser() ? 
              <AnyDayFortune
                { ...props }
                horoscope={this.props.horoscope}
              />
              // :
              // <Redirect to='/login' />
          )}/>
        {/* </Switch> */}
      </div>
    );
  }
}
// }

export default App;
