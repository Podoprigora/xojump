import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Feature = (props) => {
    const { children, icon, comingSoon, title, href, className, ...other } = props;

    let iconElement = null;

    if (React.isValidElement(icon)) {
        iconElement = (
            <div className="feature__icon-wrap">
                {React.cloneElement(icon, {
                    className: 'feature__icon'
                })}
            </div>
        );
    }

    return (
        <div {...other} className={classNames('feature', className)}>
            {comingSoon && <div className="feature__flag">Coming soon</div>}
            {iconElement}
            {title && <h3 className="feature__title">{title}</h3>}
            {children && <p className="feature__text">{children}</p>}
            {href && (
                <a href={href} className="feature__link">
                    Learn more
                </a>
            )}
        </div>
    );
};

Feature.propTypes = {
    icon: PropTypes.element,
    comingSoon: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.node,
    href: PropTypes.string,
    className: PropTypes.string
};

export { Feature };
