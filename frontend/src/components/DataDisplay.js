// src/components/DataDisplay/DataDisplayComponent.jsx

"use client"; // Add this line at the top

import React, { useState, useEffect } from 'react';
//import { TableDisplay } from './TableDisplay'; 
//import { ListDisplay } from './ListDisplay'; 
//import { CardDisplay } from './CardDisplay'; 
import LineChart from './LineChart'; // Assume this handles the Line chart display

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


const DataDisplayComponent = ({ displayMode }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(['Data 1', 'Data 2', 'Data 3']);
                    }, 2000);
                });

                setData(response);
            } catch (err) {
                setError(err);
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
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>No data available.</div>;
    }

    return (
        <div className="data-display">
            <h2>Data Display</h2>
            <div className="display-content">
                {/* Render based on display mode */}
                {displayMode === 'table' && <TableDisplay data={data} />}
                {displayMode === 'list' && <ListDisplay data={data} />}
                {displayMode === 'card' && <CardDisplay data={data} />}
                {displayMode === 'Line' && <LineChart data={data} />}
                {/* You can add more conditions here for other display modes */}
            </div>
        </div>
    );
};

export default DataDisplayComponent;
