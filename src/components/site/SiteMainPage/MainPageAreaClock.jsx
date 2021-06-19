import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Clock } from '../../ui/Clock';

const MainPageAreaClock = (props) => {
    const { timestamp, interval: intervalProp = 1000 * 60 } = props;
    const [date, setDate] = useState(new Date(timestamp));

    useState(() => {
        const interval = setInterval(() => {
            setDate((prevState) => {
                const newTimestamp = new Date(prevState).getTime() + intervalProp;

                return new Date(newTimestamp);
            });
        }, intervalProp);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Clock
            value={date}
            utc
            className="area-clock__clock"
            hourHandLength={55}
            minuteHandLength={70}
        />
    );
};

MainPageAreaClock.propTypes = {
    timestamp: PropTypes.number.isRequired,
    interval: PropTypes.number
};

export { MainPageAreaClock };
