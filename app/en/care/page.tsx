import type { Metadata } from "next";
import Link from "next/link";
import { alternatesFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Pre- and Post-Procedure Care — Dr. Téllez",
  description:
    "Pre- and post-procedure recommendations for botulinum toxin, hyaluronic acid in the lips, cheeks and under-eyes, and Sculptra. Instructions from Dr. Alejandra Téllez, dermatologist in Bogotá.",
  alternates: alternatesFor("/cuidados", "en"),
  openGraph: {
    title: "Pre- and Post-Procedure Care — Dr. Alejandra Téllez",
    description:
      "Everything you need to know before and after your Botox, hyaluronic acid or Sculptra treatment.",
    url: "https://alejandratellezderma.com/en/care",
  },
};

interface Treatment {
  id: string;
  name: string;
  subtitle: string;
  color: string;
  before: string[];
  after: string[];
  note?: string;
}

const treatments: Treatment[] = [
  {
    id: "toxina-botulinica",
    name: "Botulinum Toxin",
    subtitle: "Botox",
    color: "var(--color-primary)",
    before: [
      "Start preparing 2 days before the procedure.",
      "Avoid alcoholic drinks for 24 hours before the procedure.",
      "Stop aspirin, ibuprofen, vitamin E and omega-3 at least 2 days before (always with your doctor's approval).",
      "Tell Dr. Téllez about all medications or supplements you are taking.",
      "Arrive at the office with a completely clean face, without makeup.",
      "Do not have facials, massages or other procedures in the 7 days before.",
      "If you have an upcoming dental appointment, schedule it before the procedure or at least 2 weeks after.",
    ],
    after: [
      "Do not touch, rub or massage the treated area for the first 4 hours.",
      "Do not lie down, bend over or exert yourself physically for 4 hours after the procedure.",
      "Sleep on your back the first night to prevent the product from shifting.",
      "Avoid intense exercise on the day of the procedure.",
      "Avoid direct sun, saunas and excessive heat for the first 24 hours.",
      "Mild tenderness or small bruises at the injection sites are normal.",
      "The full effect is seen 7 to 14 days after the treatment.",
      "Attend your follow-up visit at 2 weeks to evaluate the result.",
    ],
    note: "The result lasts 4 to 6 months. With regular treatments, the effect tends to last longer over time.",
  },
  {
    id: "ha-labios",
    name: "Hyaluronic Acid",
    subtitle: "Lip augmentation and definition",
    color: "var(--color-accent)",
    before: [
      "Start preparing 2 days before the procedure.",
      "Avoid alcoholic drinks for 24 hours before.",
      "Stop aspirin, ibuprofen and anticoagulants at least 2 days before (with your doctor's approval).",
      "If you have a history of cold sores (lip herpes), tell Dr. Téllez in advance so you can receive antiviral prophylaxis before the procedure.",
      "Arrive without makeup, lip balm or any products on your lips.",
      "Keep your lips well hydrated in the days before — hydrated lips respond better to treatment.",
      "If you have had lip fillers before, let us know even if it was months ago.",
    ],
    after: [
      "Swelling and bruising of the lips are expected and completely normal. They can last 3 to 7 days.",
      "Apply ice wrapped in a clean cloth to the lips during the first few days (never ice directly on the skin).",
      "Do not massage or press on your lips for the first 24 hours.",
      "Avoid hard kissing, exaggerated lip movements and using straws for the first 24 hours.",
      "Do not have dental treatments or cleanings for the following 2 weeks.",
      "Avoid lipstick, gloss or irritating products for the first 3 days.",
      "The final result is visible at 2 weeks, once the swelling has fully subsided.",
    ],
    note: "Hyaluronic acid in the lips lasts 6 to 12 months. It can be reversed with hyaluronidase if needed.",
  },
  {
    id: "ha-pomulos",
    name: "Hyaluronic Acid",
    subtitle: "Cheek volume and projection",
    color: "var(--color-gold)",
    before: [
      "Start preparing 2 days before the procedure.",
      "Avoid alcoholic drinks for 24 hours before.",
      "Stop aspirin, ibuprofen, vitamin E and anticoagulants at least 2 days before (with your doctor's approval).",
      "If you have reference photos of results you like, bring them to the consultation.",
      "Arrive at the office with a completely clean face, without makeup.",
      "Do not apply heat to your face (massages, radiofrequency) in the 7 days before.",
      "Let us know if you have implants or previous fillers in the cheek area.",
    ],
    after: [
      "Swelling and bruising in the cheek area are normal for the first 3 to 7 days.",
      "Do not massage the treated area for the first 24 hours.",
      "Sleep on your back with your head slightly elevated for the first few nights.",
      "Avoid intense exercise on the day of the procedure.",
      "Avoid excessive heat (sauna, direct sun) for the first 48 hours.",
      "Do not wear glasses that press on the cheek area for the first 48 hours.",
      "The final result is visible at 2 weeks, once the swelling subsides.",
    ],
    note: "Cheek filler lasts 12 to 18 months depending on the product used.",
  },
  {
    id: "ha-ojeras",
    name: "Hyaluronic Acid",
    subtitle: "Under-eyes and tear trough",
    color: "var(--color-primary)",
    before: [
      "Start preparing 2 days before the procedure.",
      "Avoid alcoholic drinks for 24 hours before.",
      "Stop aspirin, ibuprofen, vitamin E and blood-thinning supplements at least 2 days before.",
      "Get a good night's sleep beforehand — dark circles made worse by tiredness make evaluation and results harder.",
      "Arrive without makeup or concealer around the eyes.",
      "Avoid intense sun exposure in the days before.",
      "Let us know if you wear contact lenses so they can be removed before the procedure.",
    ],
    after: [
      "The area around the eyes is the most prone to bruising — this is normal and can last 7 to 14 days.",
      "Apply cold compresses (not direct ice) to the area for the first few hours.",
      "Do not rub, press or massage the eye area under any circumstances.",
      "Sleep with your head elevated for the first 3 days.",
      "Remove contact lenses during the procedure and do not wear them for the first few hours.",
      "The final result can take up to 4 weeks to fully settle.",
      "Some mild initial unevenness is normal — it resolves on its own.",
    ],
    note: "This is one of the most delicate procedures because of its proximity to the eye. It should always be performed by a qualified dermatologist.",
  },
  {
    id: "sculptra",
    name: "Sculptra",
    subtitle: "Collagen biostimulator (poly-L-lactic acid)",
    color: "var(--color-accent)",
    before: [
      "Start preparing 2 days before the procedure.",
      "Avoid alcoholic drinks for 24 hours before.",
      "Stop aspirin, ibuprofen and anticoagulants at least 2 days before (with your doctor's approval).",
      "Arrive with a completely clean face, without makeup.",
      "You should not have active infections (pimples, herpes, folliculitis) in the areas to be treated.",
      "Let us know if you have a history of keloids or abnormal scarring.",
      "Let us know if you have had other filler or biostimulator treatments in the last 6 months.",
    ],
    after: [
      "Follow the Rule of 5: gently massage the treated area for 5 minutes, 5 times a day, for 5 consecutive days. This step is essential to distribute the product evenly and prevent nodules.",
      "Swelling, redness and bruising during the first few days are normal.",
      "Don't worry if after a few weeks it seems the effect has disappeared — Sculptra works gradually and progressively by stimulating collagen.",
      "Visible results start to appear between 4 and 8 weeks.",
      "Avoid intense exercise on the day of the procedure.",
      "Use sun protection daily to protect your skin during the regeneration process.",
    ],
    note: "Sculptra is a biostimulator, not a filler. Its results are gradual and natural, and can last up to 2 to 3 years.",
  },
];

export default function CuidadosPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--color-primary-50)" }}
      >
        <div className="container-custom">
          <span className="eyebrow">Patient guide</span>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
              color: "var(--color-text)",
              marginTop: "0.5rem",
              marginBottom: "1rem",
              lineHeight: 1.05,
            }}
          >
            Before & After Care
          </h1>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--color-text-secondary)",
              maxWidth: "42rem",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            Following these recommendations is an essential part of your treatment. They help minimize risks, reduce side effects and optimize the results of each procedure.
          </p>
          {/* Quick nav */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {treatments.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                style={{
                  display: "inline-block",
                  padding: "0.375rem 0.875rem",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  border: "1px solid var(--color-border)",
                  borderRadius: "2px",
                  background: "var(--color-background)",
                  color: "var(--color-text-secondary)",
                  textDecoration: "none",
                  textTransform: "uppercase",
                }}
              >
                {t.name} — {t.subtitle}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      {treatments.map((treatment, index) => (
        <section
          key={treatment.id}
          id={treatment.id}
          className="section-padding"
          style={{ backgroundColor: index % 2 === 0 ? "var(--color-background)" : "var(--color-primary-50)" }}
        >
          <div className="container-custom">
            {/* Header */}
            <div
              style={{
                marginBottom: "2.5rem",
                paddingBottom: "1.5rem",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
                <div style={{ width: "3px", height: "2rem", backgroundColor: treatment.color, flexShrink: 0 }} />
                <div>
                  <span
                    style={{
                      fontSize: "0.6rem",
                      fontWeight: 500,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: treatment.color,
                      display: "block",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {treatment.subtitle}
                  </span>
                  <h2
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                      fontWeight: 300,
                      color: "var(--color-text)",
                      lineHeight: 1.1,
                    }}
                  >
                    {treatment.name}
                  </h2>
                </div>
              </div>
              {treatment.note && (
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-text-secondary)",
                    marginTop: "1rem",
                    background: "var(--color-background)",
                    padding: "0.75rem 1rem",
                    borderRadius: "2px",
                    border: "1px solid var(--color-border)",
                    borderLeft: `3px solid ${treatment.color}`,
                    maxWidth: "42rem",
                    lineHeight: 1.65,
                  }}
                >
                  {treatment.note}
                </p>
              )}
            </div>

            {/* Before / After grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Antes */}
              <div
                style={{
                  background: "var(--color-background)",
                  padding: "1.75rem",
                  border: "1px solid var(--color-border)",
                  borderRadius: "2px",
                  borderTop: `3px solid var(--color-primary)`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      border: "1px solid var(--color-primary)",
                      borderRadius: "2px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-primary)",
                      fontSize: "1rem",
                      flexShrink: 0,
                    }}
                  >
                    ↑
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.25rem",
                      fontWeight: 500,
                      color: "var(--color-text)",
                    }}
                  >
                    Before the procedure
                  </h3>
                </div>
                <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  {treatment.before.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "0.75rem",
                        fontSize: "0.85rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.65,
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: "20px",
                          height: "20px",
                          borderRadius: "2px",
                          background: "var(--color-primary)",
                          color: "white",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: "0.15rem",
                        }}
                      >
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Después */}
              <div
                style={{
                  background: "var(--color-background)",
                  padding: "1.75rem",
                  border: "1px solid var(--color-border)",
                  borderRadius: "2px",
                  borderTop: `3px solid var(--color-gold)`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      border: "1px solid var(--color-gold)",
                      borderRadius: "2px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-gold)",
                      fontSize: "1rem",
                      flexShrink: 0,
                    }}
                  >
                    ↓
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.25rem",
                      fontWeight: 500,
                      color: "var(--color-text)",
                    }}
                  >
                    After the procedure
                  </h3>
                </div>
                <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  {treatment.after.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "0.75rem",
                        fontSize: "0.85rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.65,
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: "20px",
                          height: "20px",
                          borderRadius: "2px",
                          background: "var(--color-gold)",
                          color: "white",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: "0.15rem",
                        }}
                      >
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Disclaimer + CTA */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--color-accent)", textAlign: "center" }}
      >
        <div className="container-custom">
          <div style={{ width: "32px", height: "1px", backgroundColor: "var(--color-gold)", margin: "0 auto 2rem" }} />
          <p
            style={{
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.75,
              maxWidth: "36rem",
              margin: "0 auto 2.5rem",
            }}
          >
            These recommendations are general in nature. Each patient may receive personalized instructions based on their condition and the procedure performed. If you have any questions or unexpected symptoms, contact Dr. Téllez directly.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
            <a
              href="https://wa.me/573147444537"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "0.875rem 2rem",
                background: "white",
                color: "var(--color-accent)",
                borderRadius: "2px",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Message us on WhatsApp →
            </a>
            <Link
              href="/en/services"
              style={{
                display: "inline-block",
                padding: "0.875rem 2rem",
                border: "1px solid rgba(255,255,255,0.35)",
                color: "white",
                borderRadius: "2px",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              View all services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
