import BrandGrid from '../../components/BrandGrid/BrandGrid';
import './OurBrands.scss';

const OurBrands = () => {
    return (
        <div className="brands-page">
            <section className="brands-hero">
                <div className="brands-overlay"></div>
                <div className="brands-content">
                    <div className="brands-divider" data-aos="fade-down" data-aos-duration="1000"></div>
                    <h1 className="brands-title" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1200">Our Brands</h1>
                    <p className="brands-description" data-aos="fade-right" data-aos-delay="400">
                        A carefully curated portfolio of eight distinct brands spanning luxury,<br />
                        digital, bridal, and accessible markets unified by our commitment to<br />
                        exceptional quality.
                    </p>

                    <div className="brands-stats">
                        <div className="stat-item" data-aos="fade-up" data-aos-delay="600">
                            <span className="stat-number">8</span>
                            <span className="stat-label">BRANDS</span>
                        </div>
                        <div className="stat-item" data-aos="fade-up" data-aos-delay="700">
                            <span className="stat-number">3,200+</span>
                            <span className="stat-label">STORES</span>
                        </div>
                        <div className="stat-item" data-aos="fade-up" data-aos-delay="800">
                            <span className="stat-number">38</span>
                            <span className="stat-label">COUNTRIES</span>
                        </div>
                        <div className="stat-item" data-aos="fade-up" data-aos-delay="900">
                            <span className="stat-number">12M+</span>
                            <span className="stat-label">CUSTOMERS ANNUALLY</span>
                        </div>
                    </div>
                </div>
            </section>

            <BrandGrid />

            <section className="brand-quote">
                <div className="quote-divider"></div>
                <h2 className="quote-text">"Our brands connect with customers at every<br />stage of life."</h2>
                <div className="quote-divider"></div>
            </section>
        </div>
    );
};

export default OurBrands;
