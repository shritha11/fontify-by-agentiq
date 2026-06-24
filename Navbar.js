import React from 'react';

const C = {
  bg: "#0f0a06",
  bgAlt: "#1a120e",
  surface: "rgba(255,255,255,0.06)",
  surfaceHover: "rgba(255,255,255,0.1)",
  border: "rgba(255,255,255,0.1)",
  borderHover: "rgba(255,255,255,0.2)",
  primary: "#d4a373",
  primaryGlow: "rgba(212,163,115,0.25)",
  secondary: "#f1e8dc",
  text: "#ffffff",
  textMuted: "rgba(255,255,255,0.6)",
  textSubtle: "rgba(255,255,255,0.3)",
  heroSize: "clamp(50px, 8vw, 100px)",
  h2Size: "clamp(32px, 4.5vw, 60px)",
  heroWeight: 700,
  heroTracking: "-0.04em",
  heroLH: 0.9,
  font: "'Space Grotesk', sans-serif",
  sectionPad: "120px 60px",
  maxW: "1400px",
  cardPad: "32px",
  gap: "24px",
  cardR: "16px",
  btnR: "50px",
  shadow: "0 2px 20px rgba(0,0,0,0.2)",
  glow: "0 0 40px rgba(212,163,115,0.3)",
  btnShadow: "0 6px 24px rgba(212,163,115,0.3)",
  ease: "0.3s ease",
  lift: "translateY(-2px)",
};

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = React.useState(null);

  const navLinks = ["Home", "Shop", "About", "Contact"];

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
        height: "68px",
        backgroundColor: C.bg,
      }}
    >
      <div
        style={{
          fontSize: "20px",
          fontWeight: 800,
          color: C.text,
          fontFamily: C.font,
        }}
      >
        Mikasa
      </div>

      <div style={{ display: "flex", gap: "32px" }}>
        {navLinks.map((link, index) => (
          <a
            key={index}
            onMouseEnter={() => setHoveredLink(index)}
            onMouseLeave={() => setHoveredLink(null)}
            style={{
              fontSize: "14px",
              cursor: "pointer",
              textDecoration: "none",
              color: hoveredLink === index ? C.text : C.textMuted,
              transition: C.ease,
              fontFamily: C.font,
            }}
          >
            {link}
          </a>
        ))}
      </div>

      <button
        style={{
          background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
          padding: "9px 22px",
          borderRadius: C.btnR,
          border: "none",
          color: "#fff",
          fontSize: "13px",
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: C.btnShadow,
          transition: C.ease,
          fontFamily: C.font,
        }}
        onMouseEnter={(e) => {
          e.target.style.opacity = "0.9";
          e.target.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.target.style.opacity = "1";
          e.target.style.transform = "translateY(0)";
        }}
      >
        Shop Now
      </button>
    </div>
  );
}