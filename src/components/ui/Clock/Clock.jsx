import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ClockHand } from './ClockHand';

const Clock = React.forwardRef(function Clock(props, forwardedRef) {
    const {
        value = new Date(),
        utc = false,
        className,
        hourHandLength = 65,
        minuteHandLength = 80,
        ...other
    } = props;

    const date = new Date(value);
    const hours = utc ? date.getUTCHours() : date.getHours();
    const minutes = utc ? date.getUTCMinutes() : date.getMinutes();

    const hourAngle = hours * 30 + minutes / 2;
    const minuteAngle = minutes * 6;

    return (
        <div {...other} className={classNames('clock', className)} ref={forwardedRef}>
            <div className="clock__face" />
            <ClockHand angle={hourAngle} length={hourHandLength} />
            <ClockHand angle={minuteAngle} length={minuteHandLength} />
        </div>
    );
});

Clock.propTypes = {
    value: PropTypes.object,
    utc: PropTypes.bool,
    hourHandLength: PropTypes.number,
    minuteHandLength: PropTypes.number,
    className: PropTypes.string
};

export { Clock };
