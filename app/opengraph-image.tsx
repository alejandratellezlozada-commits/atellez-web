import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Dra. Alejandra Téllez — Dermatóloga en Bogotá";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          background: "#1E1015",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Borde dorado superior */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            height: "3px",
            background: "linear-gradient(to right, #C9A96E, rgba(201,169,110,0.2))",
            display: "flex",
          }}
        />

        {/* Panel izquierdo — texto */}
        <div
          style={{
            width: "660px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 72px 80px",
          }}
        >
          {/* Línea dorada */}
          <div
            style={{
              width: "36px",
              height: "2px",
              background: "#C9A96E",
              marginBottom: "28px",
              display: "flex",
            }}
          />

          {/* Eyebrow */}
          <div
            style={{
              fontSize: "13px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#C9A96E",
              marginBottom: "18px",
              display: "flex",
            }}
          >
            Dermatóloga · Bogotá, Colombia
          </div>

          {/* Nombre */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "22px",
            }}
          >
            <span
              style={{
                fontSize: "62px",
                fontWeight: 300,
                color: "white",
                lineHeight: 1,
                letterSpacing: "-0.01em",
              }}
            >
              Dra. Alejandra
            </span>
            <span
              style={{
                fontSize: "62px",
                fontWeight: 300,
                color: "white",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Téllez
            </span>
          </div>

          {/* Descripción */}
          <div
            style={{
              fontSize: "19px",
              color: "rgba(255,255,255,0.48)",
              lineHeight: 1.55,
              display: "flex",
              maxWidth: "480px",
            }}
          >
            Especialista en acné, botox, láser CO2, alopecia y procedimientos estéticos avanzados.
          </div>

          {/* Rating */}
          <div
            style={{
              marginTop: "36px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", gap: "4px" }}>
              {["★", "★", "★", "★", "★"].map((s, i) => (
                <span key={i} style={{ color: "#C9A96E", fontSize: "18px" }}>{s}</span>
              ))}
            </div>
            <span
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.35)",
                display: "flex",
              }}
            >
              531 reseñas · Doctoralia
            </span>
          </div>
        </div>

        {/* Panel derecho — decorativo */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Círculos concéntricos */}
          <div
            style={{
              width: "380px",
              height: "380px",
              borderRadius: "50%",
              border: "1px solid rgba(201,169,110,0.10)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "290px",
                height: "290px",
                borderRadius: "50%",
                border: "1px solid rgba(201,169,110,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  background: "rgba(201,169,110,0.07)",
                  border: "1px solid rgba(201,169,110,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "44px",
                    fontWeight: 300,
                    color: "rgba(201,169,110,0.55)",
                    letterSpacing: "0.08em",
                    display: "flex",
                  }}
                >
                  AT
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            padding: "14px 72px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.22)",
              letterSpacing: "0.06em",
              display: "flex",
            }}
          >
            alejandratellezderma.com
          </span>
          <span
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.18)",
              display: "flex",
            }}
          >
            Matrícula 1030537845 · Bogotá, Colombia
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
