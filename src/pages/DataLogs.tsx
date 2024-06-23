// src/components/DataLog.tsx

import React from 'react';

const DataLog: React.FC = () => {
    const data = [
        { timestamp: '2023-06-23 12:00:00', source: 'Sensor A', tags: 'Temperature' },
        { timestamp: '2023-06-23 12:01:00', source: 'Sensor B', tags: 'Humidity' },
        // Add more data as needed
    ];

    return (
        <div className="bg-white p-4 rounded shadow h-full">
            <h2 className="text-xl font-bold mb-4">Data Log</h2>
            <div className="overflow-y-auto h-5/6">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Timestamp</th>
                            <th className="px-4 py-2">Source</th>
                            <th className="px-4 py-2">Tags</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((entry, index) => (
                            <tr key={index} className="border-t">
                                <td className="px-4 py-2">{entry.timestamp}</td>
                                <td className="px-4 py-2">{entry.source}</td>
                                <td className="px-4 py-2">{entry.tags}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataLog;
