import React from'react';
import logo from '../image.png';

function Mobile(){

    return(
        <div style={{backgroundColor: 'black', height: '100vh'}}>
            
            <img src={logo} alt='skull' className='skull'/>
            <h1 style={{color: 'white'}}>Please use a Browser to view Tyler.ag </h1>

        <h2 style={{color: 'white'}}>Thanks Tyler Conner   </h2>
        </div>
    )
}

export default Mobile;