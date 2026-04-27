import './MissionVision.scss';

const MissionVision = () => {
    return (
        <section className="mission-vision" data-aos="fade-up" data-aos-duration="1000">
            <div className="mv-container">
                <div className="mv-left" data-aos="fade-right" data-aos-duration="1000">
                    <div className="mv-header">
                        <span className="mv-subtitle" data-aos="fade-down">MISSION & VISION</span>
                        <h2 className="mv-title" data-aos="zoom-in" data-aos-delay="200">Defined by Purpose,<br /><em>Driven by Passion</em></h2>
                        <div className="mv-divider" data-aos="fade-right" data-aos-delay="300"></div>
                    </div>

                    <div className="mv-cards">
                        <div className="mv-card" data-aos="flip-up" data-aos-delay="400">
                            <h3 className="card-title">MISSION & VISION</h3>
                            <p className="card-text">
                                To inspire and connect with customers at every meaningful life moment through the world's most beloved jewelry brands.
                            </p>
                        </div>
                        <div className="mv-card" data-aos="flip-up" data-aos-delay="500">
                            <h3 className="card-title">OUR VISION</h3>
                            <p className="card-text">
                                To be the most trusted and innovative jewelry retail group in the world, setting the standard for the industry for the next century.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mv-right" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                    <p data-aos="fade-up" data-aos-delay="400">
                        Aurum Holdings Group is a publicly listed specialty jewelry retailer operating at the intersection of luxury heritage and modern retail innovation. Headquartered in London with regional offices in New York, Hong Kong, and Dubai, we serve more than 12 million customers annually across our portfolio of eight distinct brands.
                    </p>
                    <p data-aos="fade-up" data-aos-delay="500">
                        Our business model balances premium brand positioning with operational efficiency, enabling us to deliver exceptional products and experiences at scale. Each of our brands operates with a distinct identity and customer proposition, unified under Aurum's shared commitment to quality, integrity, and innovation.
                    </p>
                    <p data-aos="fade-up" data-aos-delay="600">
                        As a Group, we leverage shared capabilities in technology, supply chain, and sustainability to support every brand's competitive advantage while preserving the unique character that makes each one beloved by its customers.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
