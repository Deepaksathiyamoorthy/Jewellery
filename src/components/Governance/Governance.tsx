import './Governance.scss';

const Governance = () => {
    const directors = [
        { name: "Sir Thomas Whitfield", role: "Non-Executive Chairman" },
        { name: "Catherine Ellison", role: "Executive Director & CEO" },
        { name: "Margaret van den Berg", role: "Independent Non-Executive Director" },
        { name: "Dr. Priya Nair", role: "Independent Non-Executive Director" },
        { name: "Robert Callahan", role: "Non-Executive Director" }
    ];

    return (
        <section className="governance-section">
            <div className="gov-container">
                <div className="gov-left">
                    <div className="gov-header">
                        <span className="gov-subtitle" data-aos="fade-down">CORPORATE GOVERNANCE</span>
                        <h2 className="gov-title" data-aos="zoom-in" data-aos-delay="200">Governance &<br /><em>Board Structure</em></h2>
                        <div className="gov-divider" data-aos="fade-right" data-aos-delay="300"></div>
                    </div>

                    <div className="gov-description" data-aos="fade-up" data-aos-delay="400">
                        <p>
                            Aurum Holdings Group maintains the highest standards of corporate governance, with a Board of Directors comprising a majority of independent non-executive directors. Our governance framework ensures transparency, accountability, and long-term value creation for all stakeholders.
                        </p>
                    </div>

                    <div className="gov-committees">
                        <div className="committee-card" data-aos="fade-right" data-aos-delay="500">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="committee-icon">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                            <span>Audit Committee</span>
                        </div>
                        <div className="committee-card" data-aos="fade-right" data-aos-delay="600">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="committee-icon">
                                <circle cx="12" cy="8" r="5"></circle>
                                <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11"></path>
                            </svg>
                            <span>Remuneration Committee</span>
                        </div>
                        <div className="committee-card" data-aos="fade-right" data-aos-delay="700">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="committee-icon">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <path d="M8 17V11"></path>
                                <path d="M12 17v-3"></path>
                                <path d="M16 17v-6"></path>
                            </svg>
                            <span>Risk Committee</span>
                        </div>
                    </div>
                </div>

                <div className="gov-right">
                    <div className="board-header" data-aos="fade-left" data-aos-delay="300">
                        <span className="board-subtitle">BOARD OF DIRECTORS</span>
                    </div>

                    <div className="board-list">
                        {directors.map((director, idx) => (
                            <div className="board-item" key={idx} data-aos="fade-up" data-aos-delay={300 + idx * 100}>
                                <h3>{director.name}</h3>
                                <p>{director.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Governance;
