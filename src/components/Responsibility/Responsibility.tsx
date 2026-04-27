import './Responsibility.scss';

const Responsibility = () => {
    const responsibilities = [
        {
            title: "Ethical Sourcing",
            description: "100% of our diamonds and precious metals are responsibly sourced under the highest industry standards.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Environmental Responsibility",
            description: "Committed to net-zero emissions by 2040, with a fully renewable energy roadmap already underway.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.2">
                    <path d="M12 2v20" strokeLinecap="round" />
                    <path d="M12 2L6 10h3l-3 7h12l-3-7h3L12 2z" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Community Impact",
            description: "Investing over $50M annually in education, economic opportunity, and artisan community development.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
            )
        }
    ];

    return (
        <section className="responsibility">
            <div className="responsibility-container">

                <div className="responsibility-left" data-aos="fade-right" data-aos-duration="1000">
                    <h4 className="responsibility-subtitle" data-aos="fade-down">ESG & RESPONSIBILITY</h4>
                    <h2 className="responsibility-title" data-aos="zoom-in" data-aos-delay="200">
                        Business <span className="regular">As A</span><br />
                        <span className="italic">Force for Good</span>
                    </h2>
                    <div className="responsibility-divider" data-aos="fade-right" data-aos-delay="300"></div>

                    <p className="responsibility-description" data-aos="fade-up" data-aos-delay="400">
                        At Aurum Holdings Group, responsibility is not a compliance exercise &mdash; it is woven into every decision we make. From the mines to the market, we hold ourselves to the highest standards in environmental stewardship, ethical conduct, and social investment.
                    </p>
                    <p className="responsibility-description" data-aos="fade-up" data-aos-delay="500">
                        Our portfolio spans luxury bridal, fine jewelry, digital-first retail, and accessible luxury &mdash; ensuring that the joy of jewelry is available to everyone, everywhere.
                    </p>
                </div>

                <div className="responsibility-right" data-aos="fade-left" data-aos-duration="1000">
                    <div className="responsibility-list">
                        {responsibilities.map((item, index) => (
                            <div className="responsibility-item" key={index} data-aos="fade-up" data-aos-delay={300 + index * 150}>
                                <div className="item-icon">
                                    {item.icon}
                                </div>
                                <div className="item-content">
                                    <h3 className="item-title">{item.title}</h3>
                                    <p className="item-description">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Responsibility;
