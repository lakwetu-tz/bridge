// src/components/LineChart.tsx

import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

import io from 'socket.io-client';

const socket = io('http://96.126.120.132:5050'); 

interface SeriesDataPoint {
    x: number;
    y: number;
}

interface Series {
    name: string;
    data: SeriesDataPoint[];
}

const useSocketData = (field: string, eventName: string) => {
    const [series, setSeries] = useState<Series[]>([
        {
            name: field.charAt(0).toUpperCase() + field.slice(1),
            data: []
        }
    ]);

    useEffect(() => {
        const handleDataLogs = (data: any) => {
            setSeries((prevSeries) => [
                {
                    ...prevSeries[0],
                    data: [...prevSeries[0].data, { x: new Date(data.updatedAt).getTime(), y: parseFloat(data[field]) }]
                }
            ]);
        };

        socket.on(eventName, handleDataLogs);

        return () => {
            socket.off(eventName, handleDataLogs);
        };
    }, [field, eventName]);

    return series;
};

export const LineChart: React.FC = () => {
    const series = useSocketData('vib', 'data-logs');
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
            type: 'datetime'
        },
        tooltip: {
            x: {
                format: 'HH:mm:ss'
            }
        }
    };

    return (
        <div className="bg-white p-4 rounded shadow h-full">
            <h2 className="text-xl font-bold mb-4">Vibration</h2>
            <ReactApexChart options={options} series={series} type="line" height={300} />
        </div>
    );
};

export const LineChart1: React.FC = () => {
    const series = useSocketData('wgt', 'data-logs');
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

    return (
        <div className="bg-white p-4 rounded shadow h-full">
            <h2 className="text-xl font-bold mb-4">Weight</h2>
            <ReactApexChart options={options} series={series} type="line" height={300} />
        </div>
    );
};

export const LineChart2: React.FC = () => {
    const series = useSocketData('temp', 'data-logs');
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

    return (
        <div className="bg-white p-4 rounded shadow h-full">
            <h2 className="text-xl font-bold mb-4">Temperature</h2>
            <ReactApexChart options={options} series={series} type="line" height={300} />
        </div>
    );
};

interface SeriesData {
    name: string;
    data: { x: number; y: number }[];
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
            stacked: false,
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
            type: 'datetime',
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
        const handleDataLogs = (data: any) => {
            const now = new Date(data.updatedAt).getTime();
            setSeries([
                {
                    name: 'Vibration',
                    data: [{ x: now, y: parseFloat(data.vib) }]
                },
                {
                    name: 'Weight',
                    data: [{ x: now, y: parseFloat(data.wgt)*0.01 }]
                }
            ]);
        };

        socket.on('data-logs', handleDataLogs);

        return () => {
            socket.off('data-logs', handleDataLogs);
        };
    }, []);

    return (
        <div className="bg-white p-4 rounded shadow h-full">
            <h2 className="text-xl font-bold mb-4">Vibration over Weight</h2>
            <ReactApexChart options={options} series={series} type="bar" height={300} />
        </div>
    );
};

interface SeriesData {
    name: string;
    data: { x: number; y: number }[];
}

export const BarChart2: React.FC = () => {
    const [series, setSeries] = useState<SeriesData[]>([
        {
            name: 'Vibration',
            data: []
        },
        {
            name: 'Temperature',
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
            labels: {
                formatter: function (val) {
                    return new Date(val).toLocaleTimeString();
                }
            }
        },
        tooltip: {
            x: {
                format: 'HH:mm:ss'
            }
        }
    };

    useEffect(() => {
        const handleDataLogs = (data: any) => {
            const now = new Date(data.updatedAt).getTime();
            setSeries(prevSeries => [
                {
                    name: 'Vibration',
                    data: [...prevSeries[0].data, { x: now, y: parseFloat(data.vib) }].slice(-10)
                },
                {
                    name: 'Temperature',
                    data: [...prevSeries[1].data, { x: now, y: parseFloat(data.temp) }].slice(-10)
                },
                {
                    name: 'Weight',
                    data: [...prevSeries[2].data, { x: now, y: parseFloat(data.wgt)*0.01 }].slice(-10)
                }
            ]);
        };

        socket.on('data-logs', handleDataLogs);

        return () => {
            socket.off('data-logs', handleDataLogs);
        };
    }, []);

    return (
        <div className="bg-white p-4 rounded shadow h-full">
            <h2 className="text-xl font-bold mb-4">Vibration, Temperature, and Weight over Time</h2>
            <ReactApexChart options={options} series={series} type="bar" height={300} />
        </div>
    );
};

