import React, { useState } from 'react';
import axios from 'axios';

import { MainPageAreaClock } from './MainPageAreaClock';

// TimeZone docs: https://developers.google.com/maps/documentation/timezone/overview

const defaultAreas = [
    { name: 'New York', coordinates: [40.6976637, -74.1197618], timestamp: null },
    { name: 'LOS ANGELES', coordinates: [34.0206842, -118.5518137], timestamp: null },
    { name: 'Jamaica', coordinates: [18.1197839, -77.5562916], timestamp: null },
    { name: 'DUBAI', coordinates: [25.0762677, 55.0876652], timestamp: null },
    { name: 'NIGERIA', coordinates: [9.032492, 6.4341506], timestamp: null }
];

// Google API Key
const gTimeZoneApi = 'AIzaSyCFi2Xs6dxq2djGI3fDRpVRXMjiMMFNWEg';

const fetchTimeZoneOffset = async (coordinates = []) => {
    try {
        const coordinatesStr = coordinates.join(',');
        const unixTimestamp = Math.floor(new Date().getTime() / 1000);

        const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${coordinatesStr}&timestamp=${unixTimestamp}&key=${gTimeZoneApi}`;

        const { data } = await axios.get(url);

        if (data?.rawOffset) {
            return (unixTimestamp + data.rawOffset + data.dstOffset) * 1000;
        }

        return null;
    } catch {
        return null;
    }
};

const MainPageClocks = () => {
    const [areas, setAreas] = useState(defaultAreas);
    const [loading, setLoading] = useState(true);

    const fetchCitiesTimeOffset = async () => {
        const result = [];

        for (const area of defaultAreas) {
            const { coordinates } = area;

            // eslint-disable-next-line no-await-in-loop
            const timestamp = await fetchTimeZoneOffset(coordinates);

            if (timestamp) {
                result.push({ ...area, timestamp, date: new Date(timestamp) });
            }
        }

        setAreas(result);
        setLoading(false);
    };

    useState(() => {
        fetchCitiesTimeOffset();
    }, []);

    if (loading) {
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
