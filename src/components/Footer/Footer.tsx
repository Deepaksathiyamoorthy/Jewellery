import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-brand">
                    <h2 className="footer-logo">Jewellery</h2>
                    <p className="footer-description">
                        A global leader in jewelry retail. We own and operate a portfolio of beloved brands that connect with customers at every stage of life.
                    </p>
                    <div className="footer-socials">
                        <a href="#instagram" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="0" ry="0"></rect>
                                <circle cx="12" cy="12" r="4"></circle>
                                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"></circle>
                            </svg>
                        </a>
                        <a href="#twitter" aria-label="X">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="0" ry="0"></rect>
                                <line x1="7" y1="7" x2="17" y2="17"></line>
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                            </svg>
                        </a>
                        <a href="#facebook" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="0" ry="0"></rect>
                                <path d="M15 8h-2a2 2 0 0 0-2 2v12"></path>
                                <line x1="8" y1="12" x2="14" y2="12"></line>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="link-group">
                        <h4 className="group-title">ABOUT</h4>
                        <ul>
                            <li><a href="#our-story">Our Story</a></li>
                            <li><a href="#heritage">Heritage</a></li>
                            <li><a href="#ateliers">Ateliers</a></li>
                        </ul>
                    </div>

                    <div className="link-group">
                        <h4 className="group-title">OUR BRANDS</h4>
                        <ul>
                            <li><a href="#lumerie">Lumerie</a></li>
                            <li><a href="#vero">Vero fine jwellery</a></li>
                            <li><a href="#ateliers">Ateliers</a></li>
                            <li><a href="#ateliers2">Ateliers</a></li>
                            <li><a href="#ateliers3">Ateliers</a></li>
                        </ul>
                    </div>

                    <div className="link-group">
                        <h4 className="group-title">STRATEGY</h4>
                        <ul>
                            <li><a href="#digital">Digital transformation</a></li>
                            <li><a href="#customer">Customer Experience</a></li>
                            <li><a href="#operational">Operational Excellence</a></li>
                            <li><a href="#global">Global Expansion</a></li>
                        </ul>
                    </div>

                    <div className="link-group">
                        <h4 className="group-title">INVESTORS</h4>
                        <ul>
                            <li><a href="#results">Financial Result</a></li>
                            <li><a href="#stock">Stock</a></li>
                            <li><a href="#investors">Investors</a></li>
                            <li><a href="#corporate">Corporate</a></li>
                        </ul>
                    </div>

                    <div className="link-group">
                        <h4 className="group-title">CONTACT</h4>
                        <ul>
                            <li><a href="#book">Book an Appointment</a></li>
                            <li><a href="#client">Client Services</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
