import React, {useState} from'react';
import './MobileMenu.css';

function MobileMenu(){
    const [menu, setMenu] = useState(false);
    return(
        <div >
            <div className='mobile-menu'>
            <div className='hamburger-icon'>
                <button onClick={()=>setMenu(!menu)} className='hamburger-button'>
                <div className='hamburger'></div> 
                <div className='hamburger'></div> 
                <div className='hamburger'></div> 
                </button>
            </div>
            <div>
               <a href='/'> <h1 style={{color: 'aqua'}}>Tyler<span style={{color: 'red'}}>.</span><span style={{color: 'violet'}}>ag</span></h1></a>
            </div>
            </div>

            <div style={{display: menu?'block':'none'  }}>
                <div className='menu-items'>
                    <div className='menu-item2'><a href='/skills'><h1>Skills</h1></a></div>
                    <div className='menu-item2'><a href='/sites'><h1>Sites</h1></a></div>
                    <div className='menu-item2'><a href='/goals'><h1>Goals</h1></a></div>
                    <div className='menu-item2'><a href='/contact'><h1>Contact</h1></a></div>
                </div>
                <div className='menu-bottom'>
                    <h1>Tyler Conner</h1>
                    </div>
            </div>
        </div>
    )
}

export default MobileMenu;  