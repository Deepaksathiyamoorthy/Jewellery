import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import OurCompany from './pages/OurCompany/OurCompany';
import OurBrands from './pages/OurBrands/OurBrands';
import Investors from './pages/Investors/Investors';
import Contact from './pages/Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
        });
    }, []);

    return (
        <BrowserRouter basename="/Jewellery/">
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/our-company" element={<OurCompany />} />
                    <Route path="/our-brands" element={<OurBrands />} />
                    <Route path="/investors" element={<Investors />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
