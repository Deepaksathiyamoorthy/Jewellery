import './Timeline.scss';

const Timeline = () => {
    const events = [
        {
            year: "1982",
            title: "Founded\nIn",
            description: "The vision begins in Paris"
        },
        {
            year: "1998",
            title: "First\nAtelier",
            description: "Our flagship workshop opens"
        },
        {
            year: "2010",
            title: "International\nExpansion",
            description: "Global presence established"
        },
        {
            year: "2018",
            title: "Ethical Diamond\nCommitment",
            description: "100% conflict-free sourcing"
        },
        {
            year: "2024",
            title: "Modern Luxury\nReimagined",
            description: "Innovation meets heritage"
        }
    ];

    return (
        <section className="timeline-section">
            <div className="timeline-container">
                <div className="timeline-header">
                    <span className="timeline-subtitle" data-aos="fade-down">OUR JOURNEY</span>
                    <h2 className="timeline-title" data-aos="zoom-in" data-aos-delay="200">Heritage Timeline</h2>
                    <div className="timeline-divider" data-aos="fade-right" data-aos-delay="300"></div>
                </div>

                <div className="timeline-track-container" data-aos="fade-in" data-aos-delay="400">
                    <div className="timeline-line"></div>
                    <div className="timeline-nodes">
                        {events.map((event, idx) => (
                            <div className="timeline-node" key={idx} data-aos="zoom-in" data-aos-delay={500 + idx * 250}>
                                <div className="node-point"></div>
                                <div className="node-content">
                                    <h3 className="node-year">{event.year}</h3>
                                    <h4 className="node-title">
                                        {event.title.split('\n').map((line, i) => (
                                            <span key={i}>{line}<br /></span>
                                        ))}
                                    </h4>
                                    <p className="node-desc">{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
