import React, { useState } from 'react';

import { Clock } from '../../ui/Clock';
import { ClockSvg } from '../../../assets/svg';

const MainPageClocks = () => {
    const [date, setDate] = useState(new Date());

    useState(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <ul className="landing__clocks-list">
            <li className="landing__clocks-list-item area-clock">
                <Clock
                    value={date}
                    className="area-clock__clock"
                    hourHandLength={55}
                    minuteHandLength={70}
                />
                <span className="area-clock__title">NEW YORK</span>
            </li>
            <li className="landing__clocks-list-item area-clock">
                <Clock
                    value={date}
                    className="area-clock__clock"
                    hourHandLength={55}
                    minuteHandLength={70}
                />
                <span className="area-clock__title">LOS ANGELES</span>
            </li>
            <li className="landing__clocks-list-item area-clock">
                <Clock
                    value={date}
                    className="area-clock__clock"
                    hourHandLength={55}
                    minuteHandLength={70}
                />
                <span className="area-clock__title">Jamaica</span>
            </li>
            <li className="landing__clocks-list-item area-clock">
                <Clock
                    value={date}
                    className="area-clock__clock"
                    hourHandLength={55}
                    minuteHandLength={70}
                />
                <span className="area-clock__title">DUBAI</span>
            </li>
            <li className="landing__clocks-list-item area-clock">
                <Clock
                    value={date}
                    className="area-clock__clock"
                    hourHandLength={55}
                    minuteHandLength={70}
                />
                <span className="area-clock__title">NIGERIA</span>
            </li>
        </ul>
    );
};

export { MainPageClocks };
