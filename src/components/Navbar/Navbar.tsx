import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/">Jewellery</Link>
                </div>
                <ul className="navbar-links">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/our-company">OUR COMPANY</Link></li>
                    <li><Link to="/our-brands">OUR BRANDS</Link></li>
                    <li><a href="#strategy">STRATEGY</a></li>
                    <li><a href="#responsibility">RESPONSIBILITY</a></li>
                    <li><Link to="/investors">INVESTORS</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
