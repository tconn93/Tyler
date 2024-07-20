import React from'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from '../Profile/Profile';
import Skill from '../Skill/Skill';
import Sites from '../Sites/Sites';
import Menu from '../util/menu/Menu';
import Goals from '../Goals/Goals';
import Contact from '../Contact/Contact';


function Desktop(){

const router = createBrowserRouter([
    {
        path: '/',
        element: <Profile />
    },
    {
        path: '/skills',
        element: <Skill />
    },
    {
        path: '/sites',
        element: <Sites />
    },
    { 
        path: '/goals',
        element: <Goals/>
    },
    {
        path: '/contact',
        element: <Contact />
    }
]);

    return(<div>
    
<RouterProvider router={router}/>
    </div>)
  }


  export default Desktop;