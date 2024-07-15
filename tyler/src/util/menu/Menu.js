import React from'react';

import logo from '../../skull.png';
import logo2 from '../../image.png';
import './Menu.css';


function Menu(){
    return(
        <div className='menu-grid' >
            <div className='menu-item'>
                <a href='/'> 
                    <img style={{float:'left'}} src={logo2} alt='skull' className='skull'/>
                </a>
            </div>
            <div className='menu-item'>
                <a href='/skill'> Skills</a>
            </div>
            <div className='menu-item'>
                <a href='/sites'> Sites</a>
            </div>
            <div className='menu-item'>
                <a href='/goals'>Goals</a>
            </div>
            <div className='menu-item'>
                <a href='/contact' >Contact</a> 
            </div>
            <div className='menu-item'> 
                <a href='/'> 
                    <img style={{float: 'right'}}src={logo} alt='skull' className='skull'/>
                </a>
            </div>
          
        </div>
    )
}

export default Menu;