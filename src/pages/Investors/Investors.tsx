import FinancialHighlights from '../../components/FinancialHighlights/FinancialHighlights';
import InvestorReports from '../../components/InvestorReports/InvestorReports';
import './Investors.scss';

const Investors = () => {
    return (
        <div className="investors-page">
            <section className="investors-hero">
                <div className="investors-overlay"></div>
                <div className="investors-content">
                    <div className="investors-divider" data-aos="fade-right"></div>
                    <h1 className="investors-title" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Investor Relations</h1>
                    <p className="investors-description" data-aos="fade-up" data-aos-delay="400">
                        Financial Insight into leading jewellery retail
                    </p>
                </div>
            </section>

            <FinancialHighlights />
            <InvestorReports />
        </div>
    );
};

export default Investors;
