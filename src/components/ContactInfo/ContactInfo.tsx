import './ContactInfo.scss';

const ContactInfo = () => {
    return (
        <section className="contact-info-section">
            <div className="contact-container">
                <div className="contact-left">
                    <h2 className="info-title" data-aos="fade-right" data-aos-duration="800">Corporate Headquarters</h2>

                    <div className="info-block" data-aos="fade-up" data-aos-delay="100">
                        <span className="info-label">ADDRESS</span>
                        <p>2972 Westheimer Rd. Santa Ana, Illinois<br />85486</p>
                    </div>

                    <div className="info-block" data-aos="fade-up" data-aos-delay="200">
                        <span className="info-label">PHONE</span>
                        <p>+91 99099 09909</p>
                    </div>

                    <div className="info-block" data-aos="fade-up" data-aos-delay="300">
                        <span className="info-label">EMAIL</span>
                        <p>jewelleryceo@gmail.com</p>
                    </div>

                    <div className="info-block" data-aos="fade-up" data-aos-delay="400">
                        <span className="info-label">WORKING HOURS</span>
                        <p>Mon-Fri : 09 AM - 06 PM EST</p>
                    </div>

                    <div className="info-divider" data-aos="zoom-in" data-aos-delay="500"></div>

                    <h2 className="info-title" data-aos="fade-right" data-aos-delay="200">Departmental Contact</h2>

                    <div className="dept-card" data-aos="flip-up" data-aos-delay="400" data-aos-duration="1000">
                        <span className="info-label">INVESTOR RELATIONS</span>
                        <p>For shareholder inquiries and financial<br />reports.</p>
                        <a href="mailto:investors@gmail.com" className="dept-email">investors@gmail.com</a>
                    </div>
                </div>

                <div className="contact-right" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1200">
                    <div className="inquiry-box">
                        <h2 className="inquiry-title" data-aos="fade-down" data-aos-delay="500">Send an Inquiry</h2>
                        <p className="inquiry-subtitle" data-aos="fade-up" data-aos-delay="600">Our executive team will respond within 24 business hours</p>

                        <form className="inquiry-form" data-aos="zoom-in" data-aos-delay="800">
                            <div className="form-group">
                                <label>Full name</label>
                                <input type="text" placeholder="Ramesh kumar" />
                            </div>

                            <div className="form-group">
                                <label>Mail</label>
                                <input type="email" placeholder="Rameshkanaga@gmail.com" />
                            </div>

                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" placeholder="General buisness enquiry" />
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="+91 80908 09080" />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea placeholder="Message here.." rows={4}></textarea>
                            </div>

                            <button type="submit" className="submit-btn" onClick={(e) => e.preventDefault()} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
