import React from'react';
import './Profile.css';
import logo  from './me.png';

function Profile(){
    return(
        <div className='profile'>
            <h1>Tyler
            </h1>
            <img src={logo} alt='Tyler' className='profile-pic'
           height={'1200px'} width={'800px'} />
        </div>
    )
}

export default Profile;