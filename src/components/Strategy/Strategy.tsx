import './Strategy.scss';

const Strategy = () => {
    const pillars = [
        {
            title: "Digital Innovation",
            description: "Unifying in-store and digital experiences to meet customers wherever their journey begins.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5">
                    <rect x="5" y="5" width="14" height="14" rx="2" />
                    <path d="M9 9h6v6H9z" />
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M7 2v3M17 2v3M7 19v3M17 19v3M2 7h3M19 7h3M2 17h3M19 17h3" />
                </svg>
            )
        },
        {
            title: "Omnichannel Excellence",
            description: "Unifying in-store and digital experiences to meet customers wherever their journey begins.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 8l-2 12h16l-2-12H6z" />
                    <path d="M8 8V6a4 4 0 018 0v2" />
                    <path d="M10 14l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Growth Strategy",
            description: "Unifying in-store and digital experiences to meet customers wherever their journey begins.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M8 15l3-3 2 2 3-3" />
                    <path d="M16 11v-2h-2" />
                </svg>
            )
        }
    ];

    return (
        <section className="strategy">
            <div className="strategy-container">

                <header className="strategy-header">
                    <h4 className="strategy-subtitle" data-aos="fade-down">STRATEGIC DIRECTION</h4>
                    <h2 className="strategy-title" data-aos="zoom-in" data-aos-delay="200">How We Grow</h2>
                    <div className="strategy-divider" data-aos="fade-right" data-aos-delay="300"></div>
                    <p className="strategy-description" data-aos="fade-up" data-aos-delay="400">
                        Our strategy is built on three pillars designed to drive sustainable growth<br />
                        and competitive advantage.
                    </p>
                </header>

                <div className="strategy-pillars">
                    {pillars.map((pillar, index) => (
                        <div className="pillar-card" key={index} data-aos="fade-up" data-aos-delay={200 + index * 150} data-aos-duration="800">
                            <div className="pillar-icon">
                                {pillar.icon}
                            </div>
                            <h3 className="pillar-title">{pillar.title}</h3>
                            <p className="pillar-description">{pillar.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Strategy;
