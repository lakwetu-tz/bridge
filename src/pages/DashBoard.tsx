// src/components/Dashboard.tsx

import React from 'react';
import { LineChart, AreaChart, BarChart, BarChart2 } from '../component/Charts'
import DataLog from './DataLogs';
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
                        <LineChart />
                    </div>
                    <div className="col-span-1 row-span-1">
                        <AreaChart />
                    </div>
                    <div className="col-span-1 row-span-1">
                        <LineChart />
                    </div>
                    <div className="col-span-1 row-span-1">
                        <AreaChart />
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
