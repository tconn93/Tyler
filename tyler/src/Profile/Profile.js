import React from'react';
import './Profile.css';
import Menu from '../util/menu/Menu';


function Profile(){
    return(
        <div>
            <Menu />
            <div  className='page'>
                <div className='profile'>
                    <h1 style={{fontSize:'xxx-large'}}>Tyler Conner</h1>
                    <h1 style={{fontSize:'xxx-large'}}>Full Stack Software Engineer</h1>
                    <h2 style={{fontSize:'x-large'}}>with a focus on</h2>
                    <h1 style={{fontSize:'xxx-large'}}>Artifical Intelligence</h1>
                </div>
            </div>
        </div>

    )
}

export default Profile;