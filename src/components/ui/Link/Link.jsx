import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Link = React.forwardRef(function Link(props, forwardedRef) {
    const { children, href = '#', className, startIcon = null, ...other } = props;

    let startIconElement = null;

    if (React.isValidElement(startIcon)) {
        startIconElement = React.cloneElement(startIcon, {
            className: classNames('link__icon', startIcon.props.className)
        });
    }

    return (
        <a {...other} href={href} className={classNames('link', className)} ref={forwardedRef}>
            {startIconElement}
            <span className="link__text">{children}</span>
        </a>
    );
});

Link.propTypes = {
    href: PropTypes.string,
    children: PropTypes.string,
    className: PropTypes.string,
    startIcon: PropTypes.element
};

export { Link };
