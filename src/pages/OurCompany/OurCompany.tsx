import Governance from '../../components/Governance/Governance';
import Leadership from '../../components/Leadership/Leadership';
import MissionVision from '../../components/MissionVision/MissionVision';
import Timeline from '../../components/Timeline/Timeline';
import './OurCompany.scss';

const OurCompany = () => {
    return (
        <div className="company-page">
            <section className="company-hero">
                <div className="company-overlay"></div>
                <div className="company-content">
                    <div className="company-divider" data-aos="fade-down" data-aos-duration="1000"></div>
                    <h1 className="company-title" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1200">Our Company</h1>
                    <p className="company-description" data-aos="fade-up" data-aos-delay="400">
                        Redefining leadership in global jewelry retail through vision,<br />
                        innovation, and an unwavering commitment to excellence.
                    </p>
                </div>
            </section>

            <MissionVision />
            <Leadership />
            <Governance />
            <Timeline />
        </div>
    );
};

export default OurCompany;
