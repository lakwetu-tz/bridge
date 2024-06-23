// src/components/Layout.tsx

import React from 'react';
import Navbar from '../component/NavBar';
import {Outlet} from 'react-router-dom'

const MainLayout: React.FC = () => {
    return (
        <div className='bg-gray-300 max-w-full flex flex-col min-h-screen'>
            <Navbar />
            <main className="p-4 flex-grow ">
               <Outlet/>
            </main>
        </div>
    );
};

export default MainLayout;
