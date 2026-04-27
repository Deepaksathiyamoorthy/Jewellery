import './Brands.scss';

const Brands = () => {
    const brands = [
        { name: "Lumière", category: "PORTFOLIO", tagline: "Where brilliance begins" },
        { name: "Vero", category: "FINE JEWELRY", tagline: "Everyday elegance" },
        { name: "Stellare", category: "CONTEMPORARY", tagline: "Bold modern design" },
        { name: "Heirloom & Co.", category: "HERITAGE", tagline: "Crafted to last forever" },
        { name: "Nova Digital", category: "DIGITAL", tagline: "Jewelry reimagined online" },
        { name: "Bliss Bridal", category: "BRIDAL", tagline: "Love, beautifully sealed" }
    ];

    return (
        <section className="brands">
            <div className="brands-container">

                <header className="brands-header">
                    <h4 className="brands-subtitle" data-aos="fade-down">PORTFOLIO</h4>
                    <h2 className="brands-title" data-aos="zoom-in" data-aos-delay="200">Our Brands</h2>
                    <p className="brands-description" data-aos="fade-up" data-aos-delay="300">
                        From timeless luxury to accessible elegance, our brands serve every milestone,<br />
                        every story, and every customer.
                    </p>
                </header>

                <div className="brands-grid">
                    {brands.map((brand, index) => (
                        <div className="brand-card" key={index} data-aos="fade-up" data-aos-delay={index * 150} data-aos-duration="800">
                            <h3 className="brand-name">{brand.name}</h3>
                            <p className="brand-category">{brand.category}</p>
                            <p className="brand-tagline">{brand.tagline}</p>
                        </div>
                    ))}
                </div>

                <div className="brands-action" data-aos="fade-up" data-aos-delay={brands.length * 150 + 100}>
                    <button className="brands-button">
                        SEE ALL BRANDS <span className="arrow">&rarr;</span>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Brands;
