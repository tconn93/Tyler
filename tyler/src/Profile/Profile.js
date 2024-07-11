import React from'react';
import './Profile.css';
import logo  from './d2.png';

function Profile(){
    return(
        <div className='profile'>
            <h1>SexySummer14
            </h1>
            <img src={logo} alt='fine' className='profile-pic'
           height={'800px'} width={'400px'} />
        </div>
    )
}

export default Profile;