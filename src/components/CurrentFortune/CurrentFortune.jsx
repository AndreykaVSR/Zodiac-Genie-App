import React/*, { Component }*/ from 'react';
// import { Link } from 'react-router-dom';
// import userService from '../../components/userService/userService';
// import aztroService from '../../../utils/aztroService.js';
import './CurrentFortune.css';
import Horoscope from './Horoscope/Horoscope'


// class CurrentFortune extends Component {

//     state = {
//         health: '',
//         personalLife: '',
//         travel: '',
//         profession: '',
//         luck: '',
//         emotions: ''
//     };
  
//     handleChange = (e) => {
//       this.setState({
//         // Using ES2015 Computed Property Names
//         [e.target.name]: e.target.value
//       });
//     }

const CurrentFortune = (props) => {

    const horoscopesArray = props.json.map((horoscopeURL) => {
        return <Horoscope url={horoscopeURL} />
    })
  
    // render(

    return (
        <div className="CurrentFortune"> 
            <header className="horoscopeHeader">Here's Your Horoscope for Today!</header>
            <div className="form-group">
                    {horoscopesArray}

                    {/* { this.state.health }
                    { this.state.personalLife }
                    { this.state.travel }
                    { this.state.profession }
                    { this.state.luck }
                    { this.state.emotions } */}
            </div>
        </div>
    );
}
{/* }; */}


export default CurrentFortune;;