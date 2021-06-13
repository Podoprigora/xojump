import React from 'react';

const MainPageTradingChart = () => {
    return (
        <div className="landing__section page-section">
            <div className="page__section-body">
                <div className="landing__trading-chart">
                    <div className="landing__trading-chart-widget">
                        <img
                            src="images/xodschart.jpg"
                            alt="Trading Chart Placeholder"
                            className="landing__trading-chart-widget-placeholder"
                        />
                    </div>
                    <div className="landing__trading-chart-shared">
                        <div className="landing__shared">Share your emotions on</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { MainPageTradingChart };
