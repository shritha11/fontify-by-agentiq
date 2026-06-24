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
  font: "'Playfair Display', serif",
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

export default function CTA() {
  return (
    <section
      style={{
        padding: C.sectionPad,
        position: "relative",
        overflow: "hidden",
        background: C.bgAlt,
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "300px",
          background: `radial-gradient(ellipse, ${C.primaryGlow} 0%, transparent 70%)`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "640px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: C.h2Size,
            fontWeight: C.heroWeight,
            letterSpacing: C.heroTracking,
            lineHeight: C.heroLH,
            fontFamily: C.font,
            color: C.text,
            background: `linear-gradient(90deg, ${C.primary}, ${C.textMuted})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Discover the Art of Living
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: C.textMuted,
            marginBottom: "40px",
          }}
        >
          Elevate your home with timeless designs and unmatched quality.
        </p>
        <button
          style={{
            padding: "12px 32px",
            fontSize: "16px",
            fontWeight: "bold",
            color: C.bg,
            background: C.primary,
            border: "none",
            borderRadius: C.btnR,
            boxShadow: C.btnShadow,
            cursor: "pointer",
            transition: C.ease,
          }}
          onMouseEnter={(e) =>
            (e.target.style.transform = C.lift)
          }
          onMouseLeave={(e) =>
            (e.target.style.transform = "translateY(0)")
          }
        >
          Shop the collection
        </button>
        <p
          style={{
            fontSize: "14px",
            color: C.textSubtle,
            marginTop: "16px",
          }}
        >
          No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}