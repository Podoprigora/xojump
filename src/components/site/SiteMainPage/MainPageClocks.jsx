import React from 'react';

import { ClockSvg } from '../../../assets/svg';

const MainPageClocks = () => {
    return (
        <ul className="landing__clocks-list">
            <li className="landing__clocks-list-item area-clock">
                <ClockSvg className="area-clock__picture" />
                <span className="area-clock__title">NEW YORK</span>
            </li>
            <li className="landing__clocks-list-item area-clock">
                <ClockSvg className="area-clock__picture" />
                <span className="area-clock__title">LOS ANGELES</span>
            </li>
            <li className="landing__clocks-list-item area-clock">
                <ClockSvg className="area-clock__picture" />
                <span className="area-clock__title">Jamaica</span>
            </li>
            <li className="landing__clocks-list-item area-clock">
                <ClockSvg className="area-clock__picture" />
                <span className="area-clock__title">DUBAI</span>
            </li>
            <li className="landing__clocks-list-item area-clock">
                <ClockSvg className="area-clock__picture" />
                <span className="area-clock__title">NIGERIA</span>
            </li>
        </ul>
    );
};

export { MainPageClocks };
