import ContactInfo from '../../components/ContactInfo/ContactInfo';
import './Contact.scss';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="contact-hero">
                <div className="contact-overlay"></div>
                <div className="contact-content">
                    <div className="contact-divider" data-aos="fade-down" data-aos-duration="1200"></div>
                    <h1 className="contact-title" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">Contact Us</h1>
                    <p className="contact-description" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                        A carefully curated portfolio of eight distinct brands spanning luxury,<br />
                        digital, bridal, and accessible markets unified by our commitment to<br />
                        exceptional quality.
                    </p>
                </div>
            </section>

            <ContactInfo />

            <section className="contact-quote">
                <div className="quote-divider" data-aos="fade-right"></div>
                <h2 className="quote-text" data-aos="fade-up" data-aos-delay="200">"Our brands connect with customers at every<br />stage of life."</h2>
                <div className="quote-divider" data-aos="fade-left" data-aos-delay="400"></div>
            </section>
        </div>
    );
};

export default Contact;
