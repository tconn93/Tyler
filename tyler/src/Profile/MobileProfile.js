import React from'react';
import './MobileProfile.css';
import MobileMenu from '../util/menu/MobileMenu';

function MobileProfile(){
    return(
        <div>
                <MobileMenu />
            <div  className='mobile-profile'> 
                <h1>Mobile Profile</h1>
                </div>
           
        </div>
    )
}

export default MobileProfile;