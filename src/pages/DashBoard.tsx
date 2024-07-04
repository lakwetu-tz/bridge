// src/components/Dashboard.tsx

import React from 'react';
import { LineChart, LineChart2, LineChart1, BarChart, BarChart2 } from '../component/Charts'
import { useAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    // Check if user is null or undefined
     if (!currentUser) {
        navigate('/login');
    }
    return (
        <div className="grid grid-rows-3 gap-4 h-screen">
            <div className='grid grid-row-2 w-full gap-4  '>
                <div className='grid grid-cols-4 gap-4 h-2/3'>
                    <div className="col-span-1 row-span-1">
                        <div className='bg-white p-4 rounded shadow h-full'>
                            <h2 className="text-xl font-semibold mb-2">Total Bridge Count</h2>
                            
                            <div className='flex flex-col bg-gray-300 justify-center item0center m-8 mx-16 rounded-lg shadow-lg duration-75'> 
                                <p className='text-3xl font-bold text-center mt-16'>B001/07/2024</p>

                                <p className='text-center mt-12 text-2xl text-gray-600 font-semibold mb-16'>Bridge ID</p>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-span-1 row-span-1">
                        <LineChart />
                    </div>
                    <div className="col-span-1 row-span-1">
                        <LineChart1 />
                    </div>
                    <div className="col-span-1 row-span-1">
                        <LineChart2 />
                    </div>


                    <div className="col-span-2 row-span-1">
                        <BarChart />
                    </div>
                    <div className="col-span-2 row-span-1">
                        <BarChart2 />
                    </div>
                </div>

            </div>
            {/* <div className="row-span-1">
                <DataLog />
            </div> */}
        </div>
    );
};

export default Dashboard;
