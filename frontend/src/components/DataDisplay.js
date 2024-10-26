// src/components/DataDisplay/DataDisplayComponent.jsx

"use client"; // Add this line at the top

import React, { useState, useEffect } from 'react';
import PieChart from './PieChart';
import ScatterChart from './ScatterChart';
import BarChart from './BarChart'; 
import LineChart from './LineChart'; // Ensure these components are properly defined and exported

const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const DataDisplayComponent = ({ displayMode }) => {
    const [loading, setLoading] = useState(true);
    const [dataState, setData] = useState(null); // Change state name to avoid confusion
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await new Promise((resolve) => {
                    setTimeout(() => {
                        console.log('Resolving data:', data); // Log the data to check it
                        resolve(data); // Use the predefined data for charts
                    }, 2000);
                });

                console.log('Fetched data:', response); // Log the fetched data
                setData(response); // Update the state with the fetched data
            } catch (err) {
                setError(err); // Capture the error
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Render logic based on the current state
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message || 'An unexpected error occurred.'}</div>;
    }

    if (!dataState) {
        return <div>No data available.</div>; // This will only be shown if dataState is null
    }

    return (
        <div className="data-display">
            <h2>Data Display</h2>
            <div className="display-content">
                {/* Render based on display mode */}
                {displayMode === 'Bar' && <BarChart data={dataState} />}
                {displayMode === 'Line' && <LineChart data={dataState} />}
                {displayMode === 'Scatter' && <ScatterChart data={dataState} />}
                {displayMode === 'Pie' && <PieChart data={dataState} />}
            </div>
        </div>
    );
};

export default DataDisplayComponent;
