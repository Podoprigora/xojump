import React from 'react';
import PropTypes from 'prop-types';

const ClockHand = (props) => {
    const { angle = 0, length = 100 } = props;

    const handStyle = {
        transform: `rotate(${angle}deg)`
    };

    const handlBodyStyle = {
        top: `${50 - length / 2}%`
    };

    return (
        <div className="clock__hand" style={handStyle}>
            <div className="clock__hand-body" style={handlBodyStyle} />
        </div>
    );
};

ClockHand.propTypes = {
    angle: PropTypes.number,
    length: PropTypes.number
};

export { ClockHand };
