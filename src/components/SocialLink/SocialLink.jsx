import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { TwitterSvg, TelegramSvg, RadioSvg } from '../../assets/svg';

const socialIcons = {
    twitter: <TwitterSvg />,
    telegram: <TelegramSvg />,
    radio: <RadioSvg />,
    _default: null
};

const SocialLink = React.forwardRef(function SocialLink(props, forwardedRef) {
    const { type, className, ...other } = props;

    let iconElement = socialIcons[type] || socialIcons._default;
    if (React.isValidElement(iconElement)) {
        iconElement = React.cloneElement(iconElement, {
            className: 'social-link__icon'
        });
    }

    return (
        <a
            {...other}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={classNames('social-link', className)}
            ref={forwardedRef}
        >
            {iconElement}
        </a>
    );
});

SocialLink.propTypes = {
    type: PropTypes.oneOf(['twitter', 'telegram', 'radio']).isRequired
};

export { SocialLink };
