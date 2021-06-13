import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ClockHand } from './ClockHand';

const Clock = React.forwardRef(function Clock(props, forwardedRef) {
    const {
        value = new Date(),
        className,
        hourHandLength = 65,
        minuteHandLength = 80,
        ...other
    } = props;

    const date = new Date(value);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const hourAngle = hours * 15 + (15 / 60) * minutes;
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
    hourHandLength: PropTypes.number,
    minuteHandLength: PropTypes.number,
    className: PropTypes.string
};

export { Clock };
