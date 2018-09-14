import React from 'react';
import Caraousel from './Caraousel';
import TimeUntil from './TimeUntil';
const Featured = () => {
    return (
        <div style={{ position:'relative' }}>

            <Caraousel />

        <div className="artist_name">
            <div className="wrapper">
                ARIANA GRANDE
            </div>
        </div>
            
         <TimeUntil />
        </div>
    );
};

export default Featured;