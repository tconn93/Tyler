import React from'react';
import './MobileProfile.css';
import MobileMenu from '../util/menu/MobileMenu';

function MobileProfile(){
    return(
        <div>
                <MobileMenu />
            <div  className='mobile-profile'> 
            <h1 style={{fontSize:'xxx-large'}}>Tyler Conner</h1>
                    <h1 style={{fontSize:'xxx-large'}}>Full Stack Software Engineer</h1>
                    <h2 style={{fontSize:'x-large'}}>with a focus on</h2>
                    <h1 style={{fontSize:'xxx-large'}}>Artifical Intelligence</h1>
                </div>
           
        </div>
    )
}

export default MobileProfile;