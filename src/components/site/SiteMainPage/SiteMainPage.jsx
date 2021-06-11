import React from 'react';

import { Link } from '../../ui';
import { News, NewsTile } from '../../News';
import { Feature } from '../../Feature';
import { MainPageSearch } from './MainPageSearch';
import { MainPageClocks } from './MainPageClocks';

import {
    BrandLogoSvg,
    BrandMarkSvg,
    ContactUs19Svg,
    ComingSoon56Svg,
    SectionIcon40Svg,
    BrandSearchEngine73Svg,
    BrandAccount64Svg,
    BrandDebitCard48Svg,
    BrandBlockchain66Svg
} from '../../../assets/svg';
import { FoxHead20Img } from '../../../assets/images';

export const SiteMainPage = () => {
    return (
        <div className="page landing">
            {/* Header */}

            <header className="landing__header">
                <div className="container">
                    <nav className="landing__nav">
                        <BrandLogoSvg className="logo landing__logo" />

                        <ul className="landing__nav-links">
                            <li className="landing__nav-item">
                                <Link
                                    href="#"
                                    className="landing__nav-link"
                                    startIcon={<ComingSoon56Svg className="coming-soon" />}
                                >
                                    API for all news outlets
                                </Link>
                            </li>
                            <li className="landing__nav-item">
                                <Link
                                    href="#"
                                    className="landing__nav-link"
                                    startIcon={<ContactUs19Svg />}
                                >
                                    Сontact us for advertisement
                                </Link>
                            </li>
                            <li className="landing__nav-item">
                                <Link
                                    href="#"
                                    className="landing__nav-link"
                                    startIcon={<img src={FoxHead20Img} alt="Fox Icon" />}
                                >
                                    Connect to business directory
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="landing__header-content">
                        <div className="landing__header-content-body">
                            <h1 className="landing__title">Utilize XODS here</h1>
                            <p className="landing__desc">
                                Become embedded within a new future of socio-creative economies
                            </p>

                            <MainPageSearch />

                            <MainPageClocks />
                        </div>
                        <div className="landing__header-content-picture">
                            <BrandMarkSvg />
                        </div>
                    </div>

                    <div className="landing__header-ad">Your ad here</div>
                </div>
            </header>

            {/* Main content */}

            <div className="container">
                {/* News section */}

                <div className="landing__section page-section">
                    <header className="page-section__header">
                        <h6 className="page-section__subtitle">
                            <SectionIcon40Svg className="page-section__subtitle-icon" />
                            News
                        </h6>
                        <div className="page-section__tbar">
                            <h2 className="page-section__title">
                                Finance, Cryptocurrency & blockchain, Stocks, Sports, Educational
                                News
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
                                date="2012-06-21"
                                title="Bitcoin passes one trillion dollar market cap"
                                image="images/news-img-1.png"
                            >
                                As millions of Black Americans were home during the 2020 plandemic.
                                Bitcoin and many other alternative digital currencies became popular
                                in many house holds.
                            </NewsTile>
                            <NewsTile
                                id={2}
                                date="2012-06-23"
                                title="XODS featured in source magazine!"
                                image="images/news-img-2.png"
                            >
                                The founders of XODS embark on a new journey, after teaching their
                                community about the blockchain vigorously for well over a year and a
                                half.
                            </NewsTile>
                        </News>
                    </div>
                </div>

                {/* Features */}

                <div className="landing__section page-section">
                    <header className="page-section__header">
                        <h6 className="page-section__subtitle">
                            <SectionIcon40Svg className="page-section__subtitle-icon" />
                            Features
                        </h6>
                        <div className="page-section__tbar">
                            <h2 className="page-section__title">
                                We Deliver The Best Experience <br /> For Our Loved Users
                            </h2>
                        </div>
                    </header>
                    <div className="page__section-body landing__features-list">
                        <Feature
                            href="#"
                            icon={<BrandSearchEngine73Svg />}
                            title="Search Engine"
                            comingSoon
                        >
                            Enjoy XOjump search Engine! With cool updated hyper portal features.
                            Also, check out our Pioneer Business Ads
                        </Feature>
                        <Feature
                            href="#"
                            icon={<BrandAccount64Svg />}
                            title="Personal Account"
                            comingSoon
                        >
                            Enjoy logging in with your meta mask/email. List yourself as an XO JUMP
                            business merchant, which will be available for all XO Jump users to view
                            your business your products/services!
                        </Feature>
                        <Feature
                            icon={<BrandDebitCard48Svg />}
                            title="Pre Paid Debit Card"
                            comingSoon
                        >
                            Utilize XOjump and XODS token to purchase Virtual Data Resistant Prepaid
                            debit cards at your disposal!
                        </Feature>
                        <Feature icon={<BrandBlockchain66Svg />} title="Blockchain" comingSoon>
                            Binance Smart Chain interoperability enables consumers and businesses to
                            access exposure to new emerging economic factions within the realm of
                            blockchain and it&apos;s plethora of users accustomed to decentralized
                            finances
                        </Feature>
                    </div>
                </div>
            </div>
        </div>
    );
};
