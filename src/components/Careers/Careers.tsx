import './Careers.scss';

const Careers = () => {
    return (
        <section className="careers">
            <div className="careers-overlay"></div>
            <div className="careers-container">

                <div className="careers-content">
                    <h4 className="careers-subtitle" data-aos="fade-down">CAREERS</h4>
                    <h2 className="careers-title" data-aos="zoom-in" data-aos-delay="200">
                        Be Part Of<br />
                        <span className="italic">Something Brilliant</span>
                    </h2>
                    <div className="careers-divider" data-aos="fade-right" data-aos-delay="400"></div>

                    <p className="careers-description" data-aos="fade-up" data-aos-delay="600">
                        Join a team of 14,000+ passionate individuals who are shaping<br />
                        the future of jewelry retail. We invest in our people just as<br />
                        deeply as we invest in our brands.
                    </p>

                    <button className="careers-button" data-aos="fade-up" data-aos-delay="800">
                        INVESTORS RELATIONS <span className="arrow">&rarr;</span>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Careers;
