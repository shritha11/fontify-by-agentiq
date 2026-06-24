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

export default function Hero() {
  const [isPrimaryHovered, setIsPrimaryHovered] = React.useState(false);

  const gradientWords = ["Timeless", "modern"];
  const headline = "Timeless designs for modern living";

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: C.sectionPad,
        background: C.bg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: C.maxW,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "80px",
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: C.primary,
              fontWeight: 600,
              marginBottom: "24px",
            }}
          >
            CURATED FOR YOUR HOME
          </div>
          <h1
            style={{
              fontSize: C.heroSize,
              fontWeight: C.heroWeight,
              letterSpacing: C.heroTracking,
              lineHeight: C.heroLH,
              marginBottom: "24px",
            }}
          >
            {headline.split(" ").map((word, index) => (
              <span
                key={index}
                style={
                  gradientWords.includes(word)
                    ? {
                        background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        display: "inline",
                      }
                    : { color: C.text, display: "inline" }
                }
              >
                {word}{" "}
              </span>
            ))}
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: C.textMuted,
              lineHeight: 1.75,
              maxWidth: "520px",
              marginBottom: "40px",
            }}
          >
            Discover thoughtfully crafted home essentials that elevate your space.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <button
              onMouseEnter={() => setIsPrimaryHovered(true)}
              onMouseLeave={() => setIsPrimaryHovered(false)}
              style={{
                background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
                padding: "14px 32px",
                borderRadius: C.btnR,
                border: "none",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: isPrimaryHovered ? C.glow : C.btnShadow,
                transform: isPrimaryHovered ? C.lift : "none",
                transition: C.ease,
              }}
            >
              Shop the collection
            </button>
            <button
              style={{
                background: "transparent",
                border: `1px solid ${C.borderHover}`,
                padding: "14px 32px",
                borderRadius: C.btnR,
                color: C.text,
                cursor: "pointer",
                transition: C.ease,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = C.surfaceHover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              Learn more →
            </button>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            background: C.bgAlt,
            border: `1px solid ${C.border}`,
            borderRadius: "16px",
            padding: "24px",
            boxShadow: C.shadow,
            minHeight: "380px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#ff5f56",
              }}
            ></div>
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#ffbd2e",
              }}
            ></div>
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#27c93f",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "16px",
              height: "100%",
            }}
          >
            <div
              style={{
                background: C.surface,
                width: "40px",
                borderRadius: "8px",
              }}
            ></div>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    borderRadius: "8px",
                    padding: "16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      color: C.textSubtle,
                      marginBottom: "8px",
                    }}
                  >
                    Sales
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: C.text,
                    }}
                  >
                    $12,345
                  </div>
                </div>
                <div
                  style={{
                    flex: 1,
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    borderRadius: "8px",
                    padding: "16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      color: C.textSubtle,
                      marginBottom: "8px",
                    }}
                  >
                    Visitors
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: C.text,
                    }}
                  >
                    8,765
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "4px",
                  height: "100px",
                }}
              >
                {[40, 60, 80, 50, 70, 90].map((height, index) => (
                  <div
                    key={index}
                    style={{
                      width: "12px",
                      height: `${height}%`,
                      background: C.primary,
                      opacity: 0.6,
                      borderRadius: "4px",
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          pointerEvents: "none",
          top: "-10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${C.primaryGlow} 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      ></div>
    </section>
  );
}