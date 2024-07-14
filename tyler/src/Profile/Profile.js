import React from'react';
import './Profile.css';
import logo  from './me2.png';

function Profile(){
    return(
        <div className='profile'>
            <h1>Tyler
            </h1>
            <img src={logo} alt='fine' className='profile-pic'
           height={'600px'} width={'400px'} />
        </div>
    )
}

export default Profile;