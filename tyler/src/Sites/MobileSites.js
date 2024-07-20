import React from'react';
import './MobileSites.css';
import MobileMenu from '../util/menu/MobileMenu';
function MobileSites(){
    return(
        <div>
            <MobileMenu />
        <div className='mobile-site'>
            <h1>Mobile Sites</h1>
            <ul>
            <li><a href='https://pcolarugby.com'>Rugby</a></li>
            <li><a href='https://tcon.app'>Private App</a></li>
            <li><a href='https://sexysummer14.com'>Friend's Modeling Site</a></li>
        </ul>
        </div>

        </div>
    )
}
export default MobileSites;