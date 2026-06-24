import React from 'react';

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

function Testimonials() {
  const testimonials = [
    {
      name: "Sophia Carter",
      text: "Mikasa's dinnerware is absolutely stunning! The quality and craftsmanship are unmatched. I love hosting dinner parties now.",
      location: "New York, USA"
    },
    {
      name: "Liam Johnson",
      text: "I purchased a set of Mikasa glasses, and they are elegant and durable. Perfect for both everyday use and special occasions.",
      location: "London, UK"
    },
    {
      name: "Emma Brown",
      text: "The customer service at Mikasa is top-notch. They helped me choose the perfect set for my new home. Highly recommend!",
      location: "Sydney, Australia"
    }
  ];

  return (
    <section
      style={{
        padding: C.sectionPad,
        backgroundColor: C.bgAlt,
        color: C.text,
        fontFamily: C.font,
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: C.maxW,
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: C.h2Size,
            fontWeight: C.heroWeight,
            letterSpacing: C.heroTracking,
            lineHeight: C.heroLH,
            marginBottom: C.gap,
          }}
        >
          What Our Customers Are Saying
        </h2>
        <div
          style={{
            display: "grid",
            gap: C.gap,
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                backgroundColor: C.surface,
                padding: C.cardPad,
                borderRadius: C.cardR,
                boxShadow: C.shadow,
                transition: C.ease,
                textAlign: "left",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  color: C.textMuted,
                  marginBottom: "16px",
                }}
              >
                "{testimonial.text}"
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: C.primary,
                  marginBottom: "4px",
                }}
              >
                {testimonial.name}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: C.textSubtle,
                }}
              >
                {testimonial.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;