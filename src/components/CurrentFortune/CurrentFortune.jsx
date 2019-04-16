import React/*, { Component }*/ from 'react';
// import { Link } from 'react-router-dom';
// import userService from '../../components/userService/userService';
import Horoscope from '../Horoscope/Horoscope'
import './CurrentFortune.css';


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
        console.log(props);
    // const horoscopesArray = props.json.map((URL) => {
    //     return <Horoscope url={URL} />
    // })
  
    // render(

    return (
        <div className="CurrentFortune"> 
            <div className="horoscopeHeader">
            <header className="horoscopeHeader">Here's Your Horoscope for Today!</header>
            </div>
            <div className="horoscopeText">
                    {/* {horoscopesArray} */}
                <li>Current Date: {props.currentDate}</li><br/>
                <li>Compatibility: {props.compatibility}</li><br/>
                <li>Lucky Number: {props.luckyNumber}</li><br/>
                <li>Lucky Time: {props.luckyTime}</li><br/>
                <li>Color: {props.color}</li><br/>
                <li>Date Range: {props.dateRange}</li><br/>
                <li>Mood: {props.mood}</li><br/>
                <li>Description: {props.description}</li><br/>
            </div>
        </div>
    );
}


export default CurrentFortune;;