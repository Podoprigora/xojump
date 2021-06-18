import React from 'react';

import { Link } from '../../ui';
import { Feature } from '../../Feature';
import { Footer } from '../../Footer';
import { MainPageSearch } from './MainPageSearch';
import { MainPageClocks } from './MainPageClocks';
import { MainPageNews } from './MainPageNews';

import {
    BrandLogoSvg,
    BrandMarkSvg,
    ContactUs19Svg,
    ComingSoon56Svg,
    BrandSectionIcon40Svg,
    BrandSectionIconWhite40Svg,
    BrandSearchEngine73Svg,
    BrandAccount64Svg,
    BrandDebitCard48Svg,
    BrandBlockchain66Svg,
    BrandRabbitSvg
} from '../../../assets/svg';
import { FoxHead20Img } from '../../../assets/images';
import { MainPageTradingChart } from './MainPageTradingChart';

export const SiteMainPage = () => {
    return (
        <div className="page landing">
            {/* Header */}

            <header className="landing__header">
                <div className="container">
                    <nav className="landing__nav">
                        <BrandLogoSvg className="logo landing__header-logo" />

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

                    <div className="landing__header-ad">
                        <div className="page__section landing__section-special">
                            <div className="landing__header-ad-container">
                                <div className="landing__header-ad-logo-container">
                                    <BrandLogoSvg className="landing__header-ad-logo" />
                                </div>
                                <div className="landing__header-ad-content">
                                    <header className="page-section__header">
                                        <h2 className="page-section__title">Get your ad here</h2>
                                    </header>
                                    <div className="page-section__body">
                                        <p className="page-section__text">
                                            XOJump suggests the best conditions for your ad — make
                                            the advertisement work efficiently with XOJump!
                                        </p>
                                        <a href="#" className="link link--rounded">
                                            Contact us
                                        </a>
                                        <div className="landing__header-ad-rabit">
                                            <BrandRabbitSvg />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main content */}

            <div className="container u-flex-column">
                {/* News section */}

                <MainPageNews />

                {/* Trading Chart */}
                <MainPageTradingChart />
            </div>

            <div className="landing__bottom-bg">
                <div className="container u-flex-column">
                    {/* Features */}

                    <div className="landing__section page-section">
                        <header className="page-section__header">
                            <h6 className="page-section__subtitle">
                                <BrandSectionIcon40Svg className="page-section__subtitle-icon" />
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
                                Enjoy logging in with your meta mask/email. List yourself as an XO
                                JUMP business merchant, which will be available for all XO Jump
                                users to view your business your products/services!
                            </Feature>
                            <Feature
                                icon={<BrandDebitCard48Svg />}
                                title="Pre Paid Debit Card"
                                comingSoon
                            >
                                Utilize XOjump and XODS token to purchase Virtual Data Resistant
                                Prepaid debit cards at your disposal!
                            </Feature>
                            <Feature icon={<BrandBlockchain66Svg />} title="Blockchain" comingSoon>
                                Binance Smart Chain interoperability enables consumers and
                                businesses to access exposure to new emerging economic factions
                                within the realm of blockchain and it&apos;s plethora of users
                                accustomed to decentralized finances
                            </Feature>
                        </div>
                    </div>

                    {/* Contact us */}

                    <div className="landing__section landing__section--contact-us page__section">
                        <div className="landing__section-special">
                            <header className="page-section__header">
                                <h6 className="page-section__subtitle">
                                    <BrandSectionIconWhite40Svg className="page-section__subtitle-icon" />
                                    Contact us
                                </h6>
                                <h2 className="page-section__title">
                                    Want to learn more about programs for our potential clients or
                                    place your ads? Contact us directly!
                                </h2>
                            </header>
                            <div className="page-section__body">
                                <a href="#" className="link link--rounded">
                                    Contact us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}

                <Footer className="landing__footer" />
            </div>
        </div>
    );
};
