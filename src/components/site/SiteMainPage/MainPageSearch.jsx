import React from 'react';
import PropTypes from 'prop-types';

import { SearchSvg, ComingSoonSvg } from '../../../assets/svg';

const MainPageSearch = (props) => {
    return (
        <div className="landing__search">
            <div className="search-input">
                <SearchSvg className="search-input__icon" />
                <input
                    type="text"
                    className="search-input__el"
                    placeholder="Search for web or business"
                />
            </div>
            <ComingSoonSvg className="coming-soon" />
        </div>
    );
};

MainPageSearch.propTypes = {};

export { MainPageSearch };
