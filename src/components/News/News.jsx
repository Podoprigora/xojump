import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const News = (props) => {
    const { children, className, ...other } = props;

    return (
        <div {...other} className={classNames('news', className)}>
            {children}
        </div>
    );
};

News.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export { News };
