// src/components/LineChart.tsx

import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

// src/components/LineChart.tsx



export const LineChart: React.FC = () => {
    const [series, setSeries] = useState([
        {
            name: 'Vibration',
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
    ]);

    const options: ApexOptions = {
        chart: {
            type: 'line',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            }
        },
        colors: ['#28a745'],
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: [
                '2023-06-01T00:00:00Z',
                '2023-06-02T00:00:00Z',
                '2023-06-03T00:00:00Z',
                '2023-06-04T00:00:00Z',
                '2023-06-05T00:00:00Z',
                '2023-06-06T00:00:00Z',
                '2023-06-07T00:00:00Z',
                '2023-06-08T00:00:00Z',
                '2023-06-09T00:00:00Z'
            ]
        },
        tooltip: {
            x: {
                format: 'dd MMM yyyy'
            }
        }
    };

    useEffect(() => {
        // Simulate real-time data update
        const interval = setInterval(() => {
            setSeries([
                {
                    name: 'Vibration',
                    data: series[0].data.map((value) => value + Math.random() * 10 - 5)
                }
            ]);
        }, 2000);

        return () => clearInterval(interval);
    }, [series]);

    return (
        <div className="bg-white p-4 rounded shadow h-full">
            <h2 className="text-xl font-bold mb-4">Vibration Over Time</h2>
            <ReactApexChart options={options} series={series} type="line" height={300} />
        </div>
    );
};




export const AreaChart: React.FC = () => {
    const [series, setSeries] = useState([
        {
            name: 'Vibration',
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
    ]);

    const options: ApexOptions = {
        chart: {
            type: 'area',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            }
        },
        colors: ['#28a745'],
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: [
                '2023-06-01T00:00:00Z',
                '2023-06-02T00:00:00Z',
                '2023-06-03T00:00:00Z',
                '2023-06-04T00:00:00Z',
                '2023-06-05T00:00:00Z',
                '2023-06-06T00:00:00Z',
                '2023-06-07T00:00:00Z',
                '2023-06-08T00:00:00Z',
                '2023-06-09T00:00:00Z'
            ]
        },
        tooltip: {
            x: {
                format: 'dd MMM yyyy'
            }
        }
    };

    useEffect(() => {
        // Simulate real-time data update
        const interval = setInterval(() => {
            setSeries([
                {
                    name: 'Vibration',
                    data: series[0].data.map((value) => value + Math.random() * 10 - 5)
                }
            ]);
        }, 2000);

        return () => clearInterval(interval);
    }, [series]);

    return (
        <div className="bg-white p-4 rounded shadow h-full">
            <h2 className="text-xl font-bold mb-4">Vibration Over Time</h2>
            <ReactApexChart options={options} series={series} type="area" height={300} />
        </div>
    );
};


export const BarChart: React.FC = () => {
    const [series, setSeries] = useState([
        {
            name: 'Vibration',
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
    ]);

    const options: ApexOptions = {
        chart: {
            type: 'bar',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            }
        },
        colors: ['#28a745'],
        xaxis: {
            type: 'datetime',
            categories: [
                '2023-06-01T00:00:00Z',
                '2023-06-02T00:00:00Z',
                '2023-06-03T00:00:00Z',
                '2023-06-04T00:00:00Z',
                '2023-06-05T00:00:00Z',
                '2023-06-06T00:00:00Z',
                '2023-06-07T00:00:00Z',
                '2023-06-08T00:00:00Z',
                '2023-06-09T00:00:00Z'
            ]
        },
        tooltip: {
            x: {
                format: 'dd MMM yyyy'
            }
        }
    };

    useEffect(() => {
        // Simulate real-time data update
        const interval = setInterval(() => {
            setSeries([
                {
                    name: 'Vibration',
                    data: series[0].data.map((value) => value + Math.random() * 10 - 5)
                }
            ]);
        }, 2000);

        return () => clearInterval(interval);
    }, [series]);

    return (
        <div className="bg-white p-4 rounded shadow h-full">
            <h2 className="text-xl font-bold mb-4">Vibration Over Time</h2>
            <ReactApexChart options={options} series={series} type="bar" height={200} />
        </div>
    );
};


