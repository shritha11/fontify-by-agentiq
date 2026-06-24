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

export default function Categories() {
  const categories = [
    { id: 1, name: 'Dinnerware', icon: <Zap size={40} color={C.primary} /> },
    { id: 2, name: 'Drinkware', icon: <Globe size={40} color={C.primary} /> },
    { id: 3, name: 'Flatware', icon: <Shield size={40} color={C.primary} /> },
    { id: 4, name: 'Serveware', icon: <Zap size={40} color={C.primary} /> },
  ];

  return (
    <section
      style={{
        backgroundColor: C.bgAlt,
        color: C.text,
        padding: C.sectionPad,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2
        style={{
          fontSize: C.h2Size,
          fontWeight: C.heroWeight,
          letterSpacing: C.heroTracking,
          lineHeight: C.heroLH,
          fontFamily: C.font,
          marginBottom: C.gap,
        }}
      >
        Shop by Category
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: C.gap,
          maxWidth: C.maxW,
          width: '100%',
        }}
      >
        {categories.map((category) => (
          <div
            key={category.id}
            style={{
              backgroundColor: C.surface,
              borderRadius: C.cardR,
              padding: C.cardPad,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: C.shadow,
              transition: C.ease,
              cursor: 'pointer',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = C.glow)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = C.shadow)
            }
          >
            {category.icon}
            <p
              style={{
                marginTop: C.gap,
                fontSize: '18px',
                fontWeight: 600,
                color: C.text,
              }}
            >
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}