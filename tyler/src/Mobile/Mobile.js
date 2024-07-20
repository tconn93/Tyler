import React from'react';
import MobileMenu from '../util/menu/MobileMenu';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MobileProfile from '../Profile/MobileProfile';
import MobileContact from '../Contact/MobileContact';
import MobileGoals from '../Goals/MobileGoals';
import MobileSites from '../Sites/MobileSites';
import MobileSkill from '../Skill/MobileSkill';

function Mobile(){

    const router = createBrowserRouter([
        {
            path: '/',
            element: <MobileProfile />
        },
        {
            path: '/skills',
            element: <MobileSkill />
        },
        {
            path: '/sites',
            element: <MobileSites />
        },
        {
            path: '/goals',
            element: <MobileGoals />
        },{
            path: '/contact',
            element: <MobileContact/>
        }
    ]);

    return(
        <div style={{backgroundColor: 'black', height: '100vh'}}>
       
        <RouterProvider router={router}/>
        </div>
    )
}

export default Mobile;