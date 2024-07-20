import React, {useState} from'react';
import { useNavigate } from 'react-router';
import './MobileMenu.css';

function MobileMenu(){
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();
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
                    <div className='menu-item2'><h1 onClick={()=>navigate('/skills')}>Skills</h1></div>
                    <div className='menu-item2'><h1 onClick={()=>navigate('/sites')}>Sites</h1></div>
                    <div className='menu-item2'><h1 onClick={()=>navigate('/goals')}>Goals</h1></div>
                    <div className='menu-item2'><h1 onClick={()=> navigate('/contact')}>Contact</h1></div>
                </div>
                <div className='menu-bottom'>
                    <h1>Tyler Conner</h1>
                    </div>
            </div>
        </div>
    )
}

export default MobileMenu;  