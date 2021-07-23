import React from 'react';
import Date from './data';

function body() {
    return(
        Date.map(dat => {
            const {id, image, name, type, averageWeight} = dat;
            return <div key={id} className='card'>
              <img src ={image} alt=''/>
              <div className='dados'>
              <p>Name: {name}</p>
              <p>Type: {type}</p>
              <p>Peso médio: {averageWeight.value} {averageWeight.measurementUnit}</p>
              </div>
            </div>
        }))
    
}

export default body;