import React from 'react';
import './HoroscopePortals.css';
import Aquarius from "../../images/Aquarius.png";
import Aries from "../../images/Aries.png";
import Cancer from "../../images/Cancer.png";
import Capricorn from "../../images/Capricorn.png";
import Gemini from "../../images/Gemini.png";
import Leo from "../../images/Leo.png";
import Libra from "../../images/Libra.png";
import Pisces from "../../images/Pisces.png";
import Sagittarius from "../../images/Sagittarius.png";
import Scorpio from "../../images/Scorpio.png";
import Taurus from "../../images/Taurus.png";
import Virgo from "../../images/Virgo.png";


const HoroscopePortals = (props) => {
    console.log(props);
// const horoscopesArray = props.json.map((URL) => {
//     return <Horoscope url={URL} />
// })

// render(

return (
    <div className="HoroscopePortals-container"> 
        <div className="HoroscopePortals">
            <img src={Aquarius}/>Aquarius<br/>
            <img src={Aries}/>Aries<br/>
            <img src={Cancer}/>Cancer<br/>
            <img src={Capricorn}/>Capricorn<br/>
        </div>
        <div className="HoroscopePortals">
            <img src={Gemini}/>Gemini<br/>
            <img src={Leo}/>Leo<br/>
            <img src={Libra}/>Libra<br/>
            <img src={Pisces}/>Pisces<br/>
        </div>
        <div className="HoroscopePortals">
            <img src={Sagittarius}/>Sagittarius<br/>
            <img src={Scorpio}/>Scorpio<br/>
            <img src={Taurus}/>Taurus<br/>
            <img src={Virgo}/>Virgo<br/>
        </div>
    </div>
);
}



export default HoroscopePortals;