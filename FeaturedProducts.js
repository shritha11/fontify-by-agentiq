import React from 'react';
import { Zap, Globe, Shield } from 'lucide-react';

const C = {
  bg:           "#0f0a06",
  bgAlt:        "#1a120e",
  surface:      "rgba(255,255,255,0.06)",
  surfaceHover: "rgba(255,255,255,0.1)",
  border:       "rgba(255,255,255,0.1)",
  borderHover:  "rgba(255,255,255,0.2)",
  primary:      "#d4a373",
  primaryGlow:  "rgba(212,163,115,0.25)",
  secondary:    "#f1e8dc",
  text:         "#ffffff",
  textMuted:    "rgba(255,255,255,0.6)",
  textSubtle:   "rgba(255,255,255,0.3)",
  heroSize:     "clamp(50px, 8vw, 100px)",
  h2Size:       "clamp(32px, 4.5vw, 60px)",
  heroWeight:   700,
  heroTracking: "-0.04em",
  heroLH:       0.9,
  font:         "'Playfair Display', serif",
  sectionPad:   "120px 60px",
  maxW:         "1400px",
  cardPad:      "32px",
  gap:          "24px",
  cardR:        "16px",
  btnR:         "50px",
  shadow:       "0 2px 20px rgba(0,0,0,0.2)",
  glow:         "0 0 40px rgba(212,163,115,0.3)",
  btnShadow:    "0 6px 24px rgba(212,163,115,0.3)",
  ease:         "0.3s ease",
  lift:         "translateY(-2px)",
};

export default function FeaturedProducts() {
  const products = [
    { id: 1, name: "Classic Dinnerware Set", price: "$120", image: "/images/dinnerware.jpg" },
    { id: 2, name: "Crystal Wine Glasses", price: "$85", image: "/images/wine-glasses.jpg" },
    { id: 3, name: "Luxury Flatware Set", price: "$150", image: "/images/flatware.jpg" },
  ];

  return (
    <section style={{ padding: C.sectionPad, backgroundColor: C.bgAlt }}>
      <div style={{ maxWidth: C.maxW, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{
          fontSize: C.h2Size,
          fontWeight: C.heroWeight,
          color: C.text,
          marginBottom: C.gap,
          letterSpacing: C.heroTracking,
          lineHeight: C.heroLH,
          fontFamily: C.font,
        }}>
          Featured Products
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: C.gap,
        }}>
          {products.map(product => (
            <div key={product.id} style={{
              backgroundColor: C.surface,
              borderRadius: C.cardR,
              overflow: "hidden",
              boxShadow: C.shadow,
              transition: C.ease,
              cursor: "pointer",
            }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", display: "block", aspectRatio: "4/3", objectFit: "cover" }}
              />
              <div style={{
                padding: C.cardPad,
                textAlign: "left",
              }}>
                <h3 style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: C.text,
                  marginBottom: "8px",
                  fontFamily: C.font,
                }}>
                  {product.name}
                </h3>
                <p style={{
                  fontSize: "16px",
                  color: C.textMuted,
                  marginBottom: "16px",
                }}>
                  {product.price}
                </p>
                <button style={{
                  padding: "12px 24px",
                  backgroundColor: C.primary,
                  color: C.bg,
                  border: "none",
                  borderRadius: C.btnR,
                  fontWeight: "600",
                  fontSize: "14px",
                  cursor: "pointer",
                  boxShadow: C.btnShadow,
                  transition: C.ease,
                }}
                  onMouseEnter={(e) => e.target.style.transform = C.lift}
                  onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}