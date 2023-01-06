import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, flags, capital,  population, continents, currencies,languages, region,}= props.country;
    console.log(props.country);
    return (
        <div className='country'>
            <div >
            <h3> Country: {name.common}</h3>
            <img src={flags.png} className='w-100 hover-shadow' alt="" />
            <p> Capital: {capital}</p>
            <p> region: {region}</p>
            <p> Population:{population}</p>
            <p> continents:{continents}</p>
            
            
            
        </div>
        </div>
    );
};

export default Country;