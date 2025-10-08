import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Navbar/Footer/Footer';
import { Outlet } from 'react-router';

const MainLayouts = () => {
    return (
        <div className='flex flex-col min-h-screen bg-[#FAF8F1]'>
            <Navbar/>
           <div className='max-w-screen-xl w-full px-4 md:px-8 lg:px-12 mx-auto flex-1'>
             <Outlet/>
           </div>
            <Footer/>
        </div>
    );
};

export default MainLayouts;