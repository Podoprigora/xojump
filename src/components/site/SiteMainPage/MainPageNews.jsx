import React from 'react';

import { BrandSectionIcon40Svg } from '../../../assets/svg';
import { News, NewsTile } from '../../News';

const MainPageNews = () => {
    return (
        <div className="landing__section page-section">
            <header className="page-section__header">
                <h6 className="page-section__subtitle">
                    <BrandSectionIcon40Svg className="page-section__subtitle-icon" />
                    News
                </h6>
                <div className="page-section__tbar">
                    <h2 className="page-section__title">
                        Finance, Cryptocurrency & blockchain, Stocks, Sports, Educational News
                    </h2>
                    <a href="#" className="link link--rounded page-section__view-all">
                        View All
                    </a>
                </div>
            </header>
            <div className="page__section-body">
                <News>
                    <NewsTile
                        id={1}
                        date="2021-06-21"
                        title="Bitcoin passes one trillion dollar market cap"
                        image="images/news-img-1.png"
                    >
                        As millions of Black Americans were home during the 2020 plandemic. Bitcoin
                        and many other alternative digital currencies became popular in many house
                        holds.
                    </NewsTile>
                    <NewsTile
                        id={2}
                        date="2021-06-23"
                        title="XODS featured in source magazine!"
                        image="images/news-img-2.png"
                    >
                        The founders of XODS embark on a new journey, after teaching their community
                        about the blockchain vigorously for well over a year and a half.
                    </NewsTile>
                </News>
            </div>
        </div>
    );
};

export { MainPageNews };
