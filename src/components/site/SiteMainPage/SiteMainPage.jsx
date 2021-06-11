import React from 'react';

import { Link } from '../../ui';

import { MainPageSearch } from './MainPageSearch';
import { MainPageClocks } from './MainPageClocks';

import { BrandLogoSvg, BrandMarkSvg, ContactUs19Svg, ComingSoon56Svg } from '../../../assets/svg';
import { FoxHead20Img } from '../../../assets/images';

export const SiteMainPage = () => {
    return (
        <div className="page landing">
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
        </div>
    );
};
