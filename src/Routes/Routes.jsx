import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";

import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        hydrateFallbackElement:<p>Loading.....</p>,
       
        children: [
            {
                index:true,
                element: <Home />,
                loader:() => fetch('/AppData.json')
            },
            {
                path: '/apps',
                element: <Apps />,
                loader:() => fetch('/AppData.json')
            },
            {
                path: '/installation',
                element: <Installation/>
            },
            
            {
                path:'*',
               element:<ErrorPage/>
            }

        ],
    },


]);
