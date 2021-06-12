import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { BrandLogoSvg, QuoteSvg } from '../../assets/svg';
import { SocialLink } from '../SocialLink';

const Footer = (props) => {
    const { className, ...other } = props;

    return (
        <footer {...other} className={classNames('footer', className)}>
            <div className="container">
                <div className="footer__body">
                    <div className="footer__item">
                        <BrandLogoSvg className="footer__logo" />

                        <div className="footer__social-links">
                            <SocialLink type="telegram" className="footer__social-link" />
                            <SocialLink type="twitter" className="footer__social-link" />
                            <SocialLink type="radio" className="footer__social-link" />
                        </div>
                    </div>
                    <div className="footer__item footer__quote">
                        <QuoteSvg className="footer__quote-icon" />
                        <p className="footer__text">
                            Remember all that XODS & XOJump is offering, are tools that could be
                            used to create a just and decentralized world for all to enjoy!
                        </p>
                    </div>
                    <div className="footer__item">
                        <h6 className="footer__title">Address</h6>
                        <p className="footer__text footer__address">
                            XODS <br />
                            42 Broadway 12th Fl New York, NY 10004
                        </p>
                    </div>
                    <div className="footer__item">
                        <h6 className="footer__title">About</h6>
                        <ul className="footer__nav">
                            <li className="footer__nav-item">
                                <a href="#" className="link footer__text footer__nav-link">
                                    About
                                </a>
                            </li>
                            <li className="footer__nav-item">
                                <a href="#" className="link footer__text footer__nav-link">
                                    Press
                                </a>
                            </li>
                            <li className="footer__nav-item">
                                <a href="#" className="link footer__text footer__nav-link">
                                    Support
                                </a>
                            </li>
                            <li className="footer__nav-item">
                                <a href="#" className="link footer__text footer__nav-link">
                                    Contact
                                </a>
                            </li>
                            <li className="footer__nav-item">
                                <a href="#" className="link footer__text footer__nav-link">
                                    Resources
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="footer__divider" />
                <div className="footer__copyright">
                    <div className="footer__item">
                        <span className="footer__text">
                            Copyright {new Date().getFullYear()} — All rights reserved
                        </span>
                    </div>
                    <div className="footer__item">
                        <a href="#" className="link footer__copyright-link">
                            Terms of Service and Conditions
                        </a>
                    </div>
                    <div className="footer__item">
                        <a href="#" className="link footer__copyright-link">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

Footer.propTypes = {
    className: PropTypes.string
};

export { Footer };
