import './BrandGrid.scss';

const brandData = [
    {
        name: "Lumière",
        badge: "LUXURY",
        badgeType: "luxury",
        subtitle: "The art of exceptional fine jewelry",
        description: "Our flagship luxury brand, celebrated for handcrafted engagement rings and couture-inspired collections. Lumière represents the pinnacle of jewelry craftsmanship.",
        founded: "1987",
        markets: "28 Countries"
    },
    {
        name: "Vero Fine Jewelry",
        badge: "MASS MARKET",
        badgeType: "mass",
        subtitle: "Everyday elegance for every occasion",
        description: "Accessible fine jewelry that doesn't compromise on quality. Vero brings premium materials and design to a broad, style-conscious audience.",
        founded: "1987",
        markets: "28 Countries"
    },
    {
        name: "Stellare",
        badge: "LUXURY",
        badgeType: "luxury",
        subtitle: "Bold. Modern. Unforgettable.",
        description: "Contemporary high jewelry for the discerning collector. Stellare challenges convention with avant-garde design and exceptional gemstones.",
        founded: "1987",
        markets: "28 Countries"
    },
    {
        name: "Heirloom & Co.",
        badge: "LUXURY",
        badgeType: "luxury",
        subtitle: "Crafted for generations to come",
        description: "Heritage-inspired collections rooted in traditional goldsmithing. Each piece is designed to be passed down through generations.",
        founded: "1987",
        markets: "28 Countries"
    },
    {
        name: "Nova Digital",
        badge: "BRIDAL",
        badgeType: "bridal",
        subtitle: "The art of exceptional fine jewelry",
        description: "Our flagship luxury brand, celebrated for handcrafted engagement rings and couture-inspired collections. Lumière represents the pinnacle of jewelry craftsmanship.",
        founded: "1987",
        markets: "28 Countries"
    },
    {
        name: "Bliss Bridal",
        badge: "MASS MARKET",
        badgeType: "mass",
        subtitle: "Everyday elegance for every occasion",
        description: "Accessible fine jewelry that doesn't compromise on quality. Vero brings premium materials and design to a broad, style-conscious audience.",
        founded: "1987",
        markets: "28 Countries"
    },
    {
        name: "Tessore",
        badge: "DIGITAL",
        badgeType: "digital",
        subtitle: "Bold. Modern. Unforgettable.",
        description: "Contemporary high jewelry for the discerning collector. Stellare challenges convention with avant-garde design and exceptional gemstones.",
        founded: "1987",
        markets: "28 Countries"
    },
    {
        name: "Kin Circle",
        badge: "LUXURY",
        badgeType: "luxury",
        subtitle: "Crafted for generations to come",
        description: "Heritage-inspired collections rooted in traditional goldsmithing. Each piece is designed to be passed down through generations.",
        founded: "1987",
        markets: "28 Countries"
    }
];

const BrandGrid = () => {
    return (
        <section className="brand-grid-section">
            <div className="brand-grid">
                {brandData.map((brand, idx) => (
                    <div className="brand-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 100} data-aos-duration="800">
                        <div className="brand-header">
                            <span className={`brand-badge badge-${brand.badgeType}`}>
                                {brand.badge}
                            </span>
                            <h2 className="brand-name">{brand.name}</h2>
                        </div>
                        <div className="brand-body">
                            <h3 className="brand-subtitle">{brand.subtitle}</h3>
                            <div className="brand-divider"></div>
                            <p className="brand-description">{brand.description}</p>

                            <div className="brand-stats">
                                <div className="stat-col">
                                    <span className="stat-title">FOUNDED</span>
                                    <span className="stat-val">{brand.founded}</span>
                                </div>
                                <div className="stat-col stat-right">
                                    <span className="stat-title">MARKETS</span>
                                    <span className="stat-val">{brand.markets}</span>
                                </div>
                            </div>

                            <button className="visit-brand-btn">VISIT BRAND</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BrandGrid;
