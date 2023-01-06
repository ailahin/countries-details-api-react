import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries]= useState([]);
    useEffect (()=>{
        fetch ('https://restcountries.com/v3.1/all')
        .then (response=>response.json())
        .then(data=>setCountries(data));
    }, [])
    return (
        <div className='countries-length shadow-sm p-3 mb-5 bg-body-tertiary rounded' >
            <h1> All Countries {countries.length}</h1>
           <div className='background ' >
             {/* {
                countries.map(country=> <Country name={country.name.common}
                    capital={country.capital} population={country.population} 
                
                > </Country>)

            } */}

          {
           countries.map(country=> <Country
            
             country={country} 
              > </Country>)
          }
           </div>
        </div>
    );
};


export default Countries;