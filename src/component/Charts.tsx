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
        },
        {
            name: 'Weight',
            data: [50, 55, 52, 56, 54, 53, 51, 55, 52]
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
        colors: ['#28a745', '#dc3545'],
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
            setSeries(prevSeries => [
                {
                    ...prevSeries[0],
                    data: prevSeries[0].data.map(value => value + Math.random() * 10 - 5)
                },
                {
                    ...prevSeries[1],
                    data: prevSeries[1].data.map(value => value + Math.random() * 3 - 1.5)
                }
            ]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white p-4 rounded shadow h-full">
            <h2 className="text-xl font-bold mb-4">Vibration by Weight </h2>
            <ReactApexChart options={options} series={series} type="area" height={300} />
        </div>
    );
};



export const BarChart: React.FC = () => {
    const [series, setSeries] = useState([
        {
            name: 'Vibration',
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 120, 95, 80]
        },
        {
            name: 'Temperature',
            data: [25, 30, 28, 32, 29, 27, 26, 31, 30, 27, 26, 29]
        },
        {
            name: 'Humidity',
            data: [60, 65, 62, 66, 64, 63, 61, 65, 62, 63, 60, 59]
        },
        {
            name: 'Pressure',
            data: [1010, 1012, 1013, 1009, 1011, 1008, 1007, 1010, 1009, 1012, 1011, 1010]
        },
        {
            name: 'Weight',
            data: [50, 55, 52, 56, 54, 53, 51, 55, 52, 53, 50, 49]
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
        colors: ['#28a745', '#007bff', '#ffc107', '#dc3545', '#6c757d'],
        xaxis: {
            type: 'datetime',
            categories: [
                '2023-06-01T00:00:00Z', '2023-06-02T00:00:00Z', '2023-06-03T00:00:00Z',
                '2023-06-04T00:00:00Z', '2023-06-05T00:00:00Z', '2023-06-06T00:00:00Z',
                '2023-06-07T00:00:00Z', '2023-06-08T00:00:00Z', '2023-06-09T00:00:00Z',
                '2023-06-10T00:00:00Z', '2023-06-11T00:00:00Z', '2023-06-12T00:00:00Z'
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
            setSeries(prevSeries => [
                {
                    ...prevSeries[0],
                    data: prevSeries[0].data.map(value => value + Math.random() * 10 - 5)
                },
                {
                    ...prevSeries[1],
                    data: prevSeries[1].data.map(value => value + Math.random() * 2 - 1)
                },
                {
                    ...prevSeries[2],
                    data: prevSeries[2].data.map(value => value + Math.random() * 3 - 1.5)
                },
                {
                    ...prevSeries[3],
                    data: prevSeries[3].data.map(value => value + Math.random() * 5 - 2.5)
                },
                {
                    ...prevSeries[4],
                    data: prevSeries[4].data.map(value => value + Math.random() * 3 - 1)
                }
            ]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white p-4 rounded shadow h-full">
            <h2 className="text-xl font-bold mb-4">Vibration, Temperature, Humidity, Pressure, Weight Over Time</h2>
            <ReactApexChart options={options} series={series} type="bar" height={300} />
        </div>
    );
};




export const BarChart2: React.FC = () => {
    const [series, setSeries] = useState([
        {
            name: 'Vibration',
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
            name: 'Temperature',
            data: [25, 30, 28, 32, 29, 27, 26, 31, 30]
        },
        {
            name: 'Weight',
            data: [50, 55, 52, 56, 54, 53, 51, 55, 52]
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
        colors: ['#28a745', '#007bff', '#dc3545'],
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
            setSeries(prevSeries => [
                {
                    ...prevSeries[0],
                    data: prevSeries[0].data.map(value => value + Math.random() * 10 - 5)
                },
                {
                    ...prevSeries[1],
                    data: prevSeries[1].data.map(value => value + Math.random() * 2 - 1)
                },
                {
                    ...prevSeries[2],
                    data: prevSeries[2].data.map(value => value + Math.random() * 3 - 1.5)
                }
            ]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white p-4 rounded shadow h-full">
            <h2 className="text-xl font-bold mb-4"> Vibration, Temperature & Weight Over Time</h2>
            <ReactApexChart options={options} series={series} type="bar" height={300} />
        </div>
    );
};

