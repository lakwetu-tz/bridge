// src/components/LineChart.tsx

import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

import io from 'socket.io-client';

const socket = io('http://127.0.0.1:5050'); 

// src/components/LineChart.tsx

interface SeriesDataPoint {
    x: number;
    y: number;
}

interface Series {
    name: string;
    data: SeriesDataPoint[];
}

// Define the LineChart component
export const LineChart: React.FC = () => {
    // State to store the series data
    const [series, setSeries] = useState<Series[]>([
        {
            name: 'Vibration',
            data: []
        }
    ]);

    // Define chart options
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
        colors: ['#007bff'],  // Set the line color to blue
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            range: 5 * 60 * 1000  // Display only the last 5 minutes of data
        },
        tooltip: {
            x: {
                format: 'HH:mm:ss'
            }
        }
    };

    // Handle incoming data logs
    useEffect(() => {
        socket.on('data-logs', (data) => {
            setSeries((prevSeries) => {
                const newSeries = [...prevSeries];
                const newData = { x: new Date(data.createdAt).getTime(), y: parseFloat(data.vib) };

                // Append the new data point
                newSeries[0].data.push(newData);

                // Filter data to only include the last 5 minutes
                const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;
                newSeries[0].data = newSeries[0].data.filter(point => point.x >= fiveMinutesAgo);

                return newSeries;
            });
        });

        // Cleanup on component unmount
        return () => {
            socket.off('data-logs');
        };
    }, []);

    return (
        <div className="bg-white p-4 rounded shadow h-full">
            <h2 className="text-xl font-bold mb-4">Vibration</h2>
            <ReactApexChart options={options} series={series} type="line" height={300} />
        </div>
    );
};

export const LineChart1: React.FC = () => {
    const [series, setSeries] = useState<Series[]>([
        {
            name: 'Weight',
            data: []
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
        colors: ['#007bff'],
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime'
        },
        tooltip: {
            x: {
                format: 'HH:mm:ss'
            }
        }
    };

    useEffect(() => {
        socket.on('data-logs', (data) => {
            setSeries((prevSeries) => [
                {
                    ...prevSeries[0],
                    data: [...prevSeries[0].data, { x: new Date(data.createdAt).getTime(), y: parseFloat(data.wgt) }]
                }
            ]);
        });

        return () => {
            socket.off('data-logs');
        };
    }, []);

    return (
        <div className="bg-white p-4 rounded shadow h-full">
            <h2 className="text-xl font-bold mb-4">Weight</h2>
            <ReactApexChart options={options} series={series} type="line" height={300} />
        </div>
    );
};

export const LineChart2: React.FC = () => {
    const [series, setSeries] = useState<Series[]>([
        {
            name: 'Temperature',
            data: []
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
        colors: ['#dc3545'],
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime'
        },
        tooltip: {
            x: {
                format: 'HH:mm:ss'
            }
        }
    };

    useEffect(() => {
        socket.on('data-logs', (data) => {
            setSeries((prevSeries) => [
                {
                    ...prevSeries[0],
                    data: [...prevSeries[0].data, { x: new Date(data.createdAt).getTime(), y: parseFloat(data.temp) }]
                }
            ]);
        });

        return () => {
            socket.off('data-logs');
        };
    }, []);

    return (
        <div className="bg-white p-4 rounded shadow h-full">
            <h2 className="text-xl font-bold mb-4">Temperature</h2>
            <ReactApexChart options={options} series={series} type="line" height={300} />
        </div>
    );
};


// export const AreaChart: React.FC = () => {
//     const [series, setSeries] = useState([
//         {
//             name: 'Vibration',
//             data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
//         },
//         {
//             name: 'Weight',
//             data: [50, 55, 52, 56, 54, 53, 51, 55, 52]
//         }
//     ]);

//     const options: ApexOptions = {
//         chart: {
//             type: 'area',
//             animations: {
//                 enabled: true,
//                 easing: 'linear',
//                 dynamicAnimation: {
//                     speed: 1000
//                 }
//             }
//         },
//         colors: ['#28a745', '#dc3545'],
//         stroke: {
//             curve: 'smooth'
//         },
//         xaxis: {
//             type: 'datetime',
//             categories: [
//                 '2023-06-01T00:00:00Z',
//                 '2023-06-02T00:00:00Z',
//                 '2023-06-03T00:00:00Z',
//                 '2023-06-04T00:00:00Z',
//                 '2023-06-05T00:00:00Z',
//                 '2023-06-06T00:00:00Z',
//                 '2023-06-07T00:00:00Z',
//                 '2023-06-08T00:00:00Z',
//                 '2023-06-09T00:00:00Z'
//             ]
//         },
//         tooltip: {
//             x: {
//                 format: 'dd MMM yyyy'
//             }
//         }
//     };

//     useEffect(() => {
//         // Simulate real-time data update
//         const interval = setInterval(() => {
//             setSeries(prevSeries => [
//                 {
//                     ...prevSeries[0],
//                     data: prevSeries[0].data.map(value => value + Math.random() * 10 - 5)
//                 },
//                 {
//                     ...prevSeries[1],
//                     data: prevSeries[1].data.map(value => value + Math.random() * 3 - 1.5)
//                 }
//             ]);
//         }, 2000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="bg-white p-4 rounded shadow h-full">
//             <h2 className="text-xl font-bold mb-4">Bridge Vibration over Time </h2>
//             <ReactApexChart options={options} series={series} type="area" height={300} />
//         </div>
//     );
// };


interface SeriesData {
    name: string;
    data: { x: number; y: number; }[];
}

export const BarChart: React.FC = () => {
    const [series, setSeries] = useState<SeriesData[]>([
        {
            name: 'Vibration',
            data: []
        },
        {
            name: 'Weight',
            data: []
        }
    ]);

    const options: ApexOptions = {
        chart: {
            type: 'bar',
            stacked: true,
            toolbar: {
                show: false
            },
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '80%'
            }
        },
        colors: ['#28a745', '#007bff'],
        xaxis: {
            type: 'numeric',
            labels: {
                formatter: function (val) {
                    return new Date(val).toLocaleTimeString();
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val.toFixed(2);
                }
            }
        }
    };

    useEffect(() => {
        // Simulate real-time data update
        const interval = setInterval(() => {
            const now = Date.now();

            setSeries(prevSeries => [
                {
                    ...prevSeries[0],
                    data: [...prevSeries[0].data.slice(-10), {
                        x: now,
                        y: Math.random() * 1000
                    }]
                },
                {
                    ...prevSeries[1],
                    data: [...prevSeries[1].data.slice(-10), {
                        x: now,
                        y: Math.random() * 2000
                    }]
                }
            ]);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white p-4 rounded shadow h-full">
            <h2 className="text-xl font-bold mb-4">Vibration over Weight</h2>
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
            <h2 className="text-xl font-bold mb-4"> Vibration over Temperature</h2>
            <ReactApexChart options={options} series={series} type="bar" height={300} />
        </div>
    );
};

