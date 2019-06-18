import React/*, { Component }*/ from 'react';
// import { Link } from 'react-router-dom';
// import userService from '../../components/userService/userService';
// import Horoscope from '../Horoscope/Horoscope'
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
                <li><span>Current Date:</span>  {props.currentDate}</li><br/>
                <li><span>Compatibility:</span>  {props.compatibility}</li><br/>
                <li><span>Lucky Number:</span>  {props.luckyNumber}</li><br/>
                <li><span>Lucky Time:</span>  {props.luckyTime}</li><br/>
                <li><span>Color:</span>  {props.color}</li><br/>
                <li><span>Date Range:</span>  {props.dateRange}</li><br/>
                <li><span>Mood:</span>  {props.mood}</li><br/>
                <li><span className='Descripton'>Description:</span>  {props.description}</li><br/>
            </div>
        </div>
    );
}


export default CurrentFortune;