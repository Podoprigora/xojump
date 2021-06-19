import React, { useState } from 'react';
import { getTimestampByPosition } from '../../../services/api/gTimeZone';

import { MainPageAreaClock } from './MainPageAreaClock';

const defaultAreas = [
    { name: 'New York', coordinates: [40.6976637, -74.1197618], timestamp: null },
    { name: 'LOS ANGELES', coordinates: [34.0206842, -118.5518137], timestamp: null },
    { name: 'Jamaica', coordinates: [18.1197839, -77.5562916], timestamp: null },
    { name: 'DUBAI', coordinates: [25.0762677, 55.0876652], timestamp: null },
    { name: 'NIGERIA', coordinates: [9.032492, 6.4341506], timestamp: null }
];

const MainPageClocks = () => {
    const [areas, setAreas] = useState([]);

    const fetchCitiesTimeOffset = async () => {
        const result = [];

        for (const area of defaultAreas) {
            const { coordinates } = area;

            // eslint-disable-next-line no-await-in-loop
            const timestamp = await getTimestampByPosition(coordinates);

            if (timestamp) {
                result.push({ ...area, timestamp });
            }
        }

        setAreas(result);
    };

    useState(() => {
        fetchCitiesTimeOffset();
    }, []);

    if (areas.length === 0) {
        return null;
    }

    return (
        <ul className="landing__clocks-list">
            {areas.map((area, index) => {
                const { timestamp, name } = area;

                return (
                    <li key={index} className="landing__clocks-list-item area-clock">
                        <MainPageAreaClock timestamp={timestamp} />
                        <span className="area-clock__title">{name}</span>
                    </li>
                );
            })}
        </ul>
    );
};

export { MainPageClocks };
