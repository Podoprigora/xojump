import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import parseISODate from 'date-fns/parseISO';
import isValidDate from 'date-fns/isValid';
import formatDate from 'date-fns/format';

const NewsTile = (props) => {
    const { id, date, title, image, children, className, ...other } = props;

    const parsedDate = parseISODate(date);

    return (
        <div {...other} className={classNames('news__tile', className)}>
            {image && (
                <div className="news__tile-img-wrap">
                    <img src={image} alt={title} className="news__tile-img" />
                </div>
            )}
            {isValidDate && (
                <div className="news__tile-date">{formatDate(parsedDate, 'dd MMM yyyy')}</div>
            )}
            {title && <h4 className="news__tile-title">{title}</h4>}
            {children && <p className="news__tile-text">{children}</p>}
        </div>
    );
};

NewsTile.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    date: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string
};

export { NewsTile };
