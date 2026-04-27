import './FinancialHighlights.scss';

const FinancialHighlights = () => {
    return (
        <section className="financial-highlights">
            <div className="financial-container">
                <h2 className="section-title" data-aos="fade-down">Financial Highlights</h2>

                <div className="stats-grid">
                    <div className="stat-card" data-aos="zoom-in" data-aos-delay="100">
                        <span className="stat-val">$8.2B</span>
                        <span className="stat-label">ANNUAL REVENUE</span>
                    </div>
                    <div className="stat-card" data-aos="zoom-in" data-aos-delay="200">
                        <span className="stat-val">$1.4B</span>
                        <span className="stat-label">ADJUSTED EBITDA</span>
                    </div>
                    <div className="stat-card" data-aos="zoom-in" data-aos-delay="300">
                        <span className="stat-val">3,200+</span>
                        <span className="stat-label">GLOBAL STORES</span>
                    </div>
                    <div className="stat-card" data-aos="zoom-in" data-aos-delay="400">
                        <span className="stat-val">$2.1B</span>
                        <span className="stat-label">ONLINE REVENUE</span>
                    </div>
                </div>

                <div className="stock-ticker-card" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                    <span className="exchange-label">NYSE</span>
                    <div className="ticker-row">
                        <span className="ticker-symbol">AHG</span>
                        <span className="ticker-price">$142.80</span>
                        <span className="ticker-change">
                            <span className="triangle-up">▲</span> +1.24 (+0.88%)
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinancialHighlights;
