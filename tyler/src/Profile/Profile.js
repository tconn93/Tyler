import React from'react';
import './Profile.css';


function Profile(){
    return(
        <div >
          
            <div className='profile' style={{border: '1px solid black', height: '160px'}}>    
            
            <h1 >Tyler Conner</h1>
            <h1>Full Stack</h1><h1 style={{marginTop: '-30px'}}> Software Engineer</h1>
            </div>
            <p>Hobbies:</p>
            <p>Rugby, Gym, Learning, Community Service, Coding, and Fishing</p>
        </div>
    )
}

export default Profile;