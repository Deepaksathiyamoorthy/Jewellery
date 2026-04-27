import './Leadership.scss';
import img1 from '../../assets/assets/Frame 1365.png';
import img2 from '../../assets/assets/Frame 123.png';
import img3 from '../../assets/assets/Frame 136.png';
import img4 from '../../assets/assets/Frame 13.png';

const Leadership = () => {
    const team = [
        {
            name: "Catherine Ellison",
            role: "Chief Executive Officer",
            image: img1
        },
        {
            name: "Marcus Beaumont",
            role: "Chief Operating Officer",
            image: img2
        },
        {
            name: "Mei Lin Zhao",
            role: "Chief Financial Officer",
            image: img3
        },
        {
            name: "David Ashworth",
            role: "Chief Strategy Officer",
            image: img4
        }
    ];

    return (
        <section className="leadership-section">
            <div className="leadership-container">
                <div className="leadership-header">
                    <span className="leadership-subtitle" data-aos="fade-down">EXECUTIVE LEADERSHIP</span>
                    <h2 className="leadership-title" data-aos="zoom-in" data-aos-delay="200">The Leadership Team</h2>
                    <div className="leadership-divider" data-aos="fade-right" data-aos-delay="300"></div>
                </div>

                <div className="leadership-grid">
                    {team.map((member, index) => (
                        <div key={index} className="team-card" data-aos="fade-up" data-aos-delay={index * 150} data-aos-duration="1000">
                            <div className="team-image-container">
                                <img src={member.image} alt={`${member.name} - ${member.role}`} />
                            </div>
                            <div className="team-info">
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;
