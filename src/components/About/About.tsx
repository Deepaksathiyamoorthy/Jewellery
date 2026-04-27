import './About.scss';

const About = () => {
    return (
        <section className="about" data-aos="fade-up" data-aos-duration="1000">
            <div className="about-container">

                <div className="about-left" data-aos="fade-right" data-aos-duration="1000">
                    <h4 className="about-subtitle" data-aos="fade-down">ABOUT THE GROUP</h4>
                    <h2 className="about-title" data-aos="fade-right" data-aos-delay="200">
                        A Legacy of Excellence,<br />
                        <span className="italic">A Vision for Tomorrow</span>
                    </h2>
                    <div className="about-divider" data-aos="fade-right" data-aos-delay="300"></div>

                    <p className="about-description" data-aos="fade-up" data-aos-delay="400">
                        Founded over three decades ago, Aurum Holdings Group has grown from a single flagship brand into the world's most influential jewelry retail conglomerate. We combine heritage craftsmanship with forward-thinking technology to create extraordinary experiences at every price point.
                    </p>
                    <p className="about-description" data-aos="fade-up" data-aos-delay="500">
                        Our portfolio spans luxury bridal, fine jewelry, digital-first retail, and accessible luxury &mdash; ensuring that the joy of jewelry is available to everyone, everywhere.
                    </p>

                    <a href="#story" className="about-link" data-aos="fade-up" data-aos-delay="600">
                        OUR FULL STORY <span className="arrow">&rarr;</span>
                    </a>
                </div>

                <div className="about-right" data-aos="fade-left" data-aos-duration="1000">
                    <div className="about-grid">
                        <div className="grid-item" data-aos="zoom-in" data-aos-delay="200">
                            <div className="grid-number">35<span>+</span></div>
                            <div className="grid-label">Years in Business</div>
                        </div>
                        <div className="grid-item" data-aos="zoom-in" data-aos-delay="300">
                            <div className="grid-number">8</div>
                            <div className="grid-label">Global Brands</div>
                        </div>
                        <div className="grid-item" data-aos="zoom-in" data-aos-delay="400">
                            <div className="grid-number">38</div>
                            <div className="grid-label">Countries Served</div>
                        </div>
                        <div className="grid-item" data-aos="zoom-in" data-aos-delay="500">
                            <div className="grid-number">14,000<span>+</span></div>
                            <div className="grid-label">Team Members</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
