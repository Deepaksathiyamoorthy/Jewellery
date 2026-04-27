import './Hero.scss';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h3 className="hero-subtitle" data-aos="fade-down" data-aos-duration="800">SUPER JEWELLERY SHOP</h3>
                <h1 className="hero-title" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">Leading The Future<br />Of Jewelry Retail</h1>
                <p className="hero-description" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                    Aurum Holdings Group Is The World's Preeminent Specialty Jewelry Retailer, Serving<br />Millions Of Customers Across 38 Countries Through A Portfolio Of Eight Iconic Brands.
                </p>
                <div className="hero-divider" data-aos="fade-right" data-aos-delay="600"></div>
                <button className="hero-button" data-aos="fade-up" data-aos-delay="800">
                    LEARN MORE <span className="arrow">→</span>
                </button>
            </div>
        </section>
    );
};

export default Hero;
