import React from'react';
import { useNavigate} from 'react-router-dom';

import logo from '../../skull.png';
import logo2 from '../../image.png';
import './Menu.css';


function Menu(){

    const navigate = useNavigate();
    return(
        <div className='menu-grid' >
            <div className='menu-item'>
                    <img onClick={()=>navigate("/")} style={{float:'left'}} src={logo2} alt='skull' className='skull'/>            
            </div>
            <div className='menu-links'>
                <h1 className='banner' onClick={()=>navigate("/")}style={{color: 'aqua'}}>Tyler<span style={{color: 'red'}}>.</span><span style={{color: 'violet'}}>ag</span></h1>
                <h5 onClick={()=>navigate("/skills")}>Skills</h5>
                <h5 onClick={()=>navigate("/sites")}>Sites</h5>
                <h5 onClick={()=>navigate("/goals")}>Goals</h5>
                <h5 onClick={()=>navigate("/contact")}>Contact</h5> 
            </div>         
            <div className='menu-item'> 
                    <img onClick={()=>navigate("/")} style={{float: 'right'}}src={logo} alt='skull' className='skull'/>
            </div>
          
        </div>
    )
}

export default Menu;