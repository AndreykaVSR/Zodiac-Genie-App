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
            <img src={Aries} alt="Aries"/>Aries<br/>
            <img src={Taurus} alt="Taurus"/>Taurus<br/>
            <img src={Gemini} alt="Gemini"/>Gemini<br/>
            <img src={Cancer} alt="Cancer"/>Cancer<br/>
        </div>
        <div className="HoroscopePortals">
            <img src={Leo} alt="Leo"/>Leo<br/>
            <img src={Virgo} alt="Virgo"/>Virgo<br/>
            <img src={Libra} alt="Libra"/>Libra<br/>
            <img src={Scorpio} alt="Scorpio"/>Scorpio<br/>
        </div>
        <div className="HoroscopePortals">
            <img src={Sagittarius} alt="Sagittarius"/>Sagittarius<br/>
            <img src={Capricorn} alt="Capricorn"/>Capricorn<br/>
            <img src={Aquarius} alt="Aquarius"/>Aquarius<br/>
            <img src={Pisces} alt="Pisces"/>Pisces<br/>
        </div>
    </div>
);
}



export default HoroscopePortals;