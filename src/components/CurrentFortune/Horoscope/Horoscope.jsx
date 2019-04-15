import React from 'react';

const Horoscope = (props) => {

    return (
        <div className="horoscopeChildComponent">
            {props.url}
        </div>
    )
}

export default Horoscope;