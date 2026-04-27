import './Investors.scss';

const Investors = () => {
    return (
        <section className="investors">
            <div className="investors-container">

                <header className="investors-header">
                    <h4 className="investors-subtitle" data-aos="fade-down">INVESTOR RELATIONS</h4>
                    <h2 className="investors-title" data-aos="zoom-in" data-aos-delay="200">Financial Highlights</h2>
                    <div className="investors-divider" data-aos="fade-right" data-aos-delay="300"></div>
                </header>

                <div className="investors-stats">
                    <div className="stat-item" data-aos="fade-up" data-aos-delay="400">
                        <div className="stat-value">$8.2B</div>
                        <div className="stat-label">ANNUAL REVENUE</div>
                        <div className="stat-sublabel">FY 2025</div>
                    </div>
                    <div className="stat-item" data-aos="fade-up" data-aos-delay="500">
                        <div className="stat-value">$1.4B</div>
                        <div className="stat-label">ADJUSTED EBITDA</div>
                        <div className="stat-sublabel">17% margin</div>
                    </div>
                    <div className="stat-item" data-aos="fade-up" data-aos-delay="600">
                        <div className="stat-value">3,200<span>+</span></div>
                        <div className="stat-label">GLOBAL STORES</div>
                        <div className="stat-sublabel">38 countries</div>
                    </div>
                    <div className="stat-item" data-aos="fade-up" data-aos-delay="700">
                        <div className="stat-value">$2.1B</div>
                        <div className="stat-label">ONLINE REVENUE</div>
                        <div className="stat-sublabel">+22% YoY</div>
                    </div>
                </div>

                <div className="investors-ticker" data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000">
                    <div className="ticker-info">
                        <div className="ticker-symbols">
                            <span className="exchange">NYSE</span>
                            <span className="symbol">AHG</span>
                        </div>
                        <div className="ticker-price">
                            <span className="current">$142.80</span>
                            <span className="change">&#9650; +1.24 (+0.88%)</span>
                        </div>
                    </div>
                    <div className="ticker-action">
                        <button className="ticker-button">
                            INVESTORS RELATIONS <span className="arrow">&rarr;</span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Investors;
