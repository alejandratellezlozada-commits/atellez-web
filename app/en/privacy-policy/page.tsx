import type { Metadata } from "next";
import { alternatesFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Privacy Policy — Dr. Alejandra Téllez",
  description:
    "Personal data processing policy for Dr. Alejandra Téllez's website, in accordance with Colombian Law 1581 of 2012 and Decree 1377 of 2013.",
  alternates: alternatesFor("/politica-de-privacidad", "en"),
  robots: { index: true, follow: false },
};

const sections = [
  {
    title: "1. Data controller",
    content: `The controller of the personal data collected through this website is:

**Alejandra Téllez Lozada** (Dr. Alejandra Téllez)
Board-certified Dermatologist — Professional License 1030537845
Avenida Carrera 19 #97-31, Office 606, Bogotá, Colombia
Phone: +57 314 744 4537
Email: alejandratellezlozada@gmail.com`,
  },
  {
    title: "2. Legal framework",
    content: `This policy is governed by **Statutory Law 1581 of 2012** (Colombia's Personal Data Protection Law), **Decree 1377 of 2013** and any other regulations that amend or supplement them.

By using this website or providing their data through the contact form, the user accepts the terms of this policy.`,
  },
  {
    title: "3. Personal data we collect",
    content: `We only collect the data that the user voluntarily provides through the contact form:

- **Full name**
- **Phone / WhatsApp number**
- **Reason for consultation** (service of interest)
- **Free-text message** (optional)

This site **does not use forms that store data on its own servers**. The contact form redirects the user to WhatsApp, where the conversation is governed by the privacy policy of Meta Platforms, Inc.

In addition, the site may automatically collect technical data such as IP address, browser type and pages visited through web analytics tools (Google Analytics), solely to improve the user experience.`,
  },
  {
    title: "4. Purposes of processing",
    content: `The personal data provided is used to:

- **Respond to requests for information** about medical services and procedures
- **Manage appointment scheduling** at the office
- **Answer questions** received through the contact channels
- **Improve the website** through anonymous analysis of user behavior

The data is **not used** to send unsolicited advertising or build commercial profiles, and it is not sold to third parties.`,
  },
  {
    title: "5. Sharing data with third parties",
    content: `To provide the services of this website, we may share information with the following third parties:

- **WhatsApp / Meta Platforms**: when the user uses the contact form or the WhatsApp button. The communication is subject to Meta's privacy policy.
- **Doctoralia (Docplanner Group)**: when the user accesses the appointment booking portal. The information is subject to Docplanner's privacy policy.
- **Google LLC**: through Google Maps (embedded in this site) and Google Analytics (anonymous traffic analysis).

We do not share personal data with third parties for commercial or advertising purposes.`,
  },
  {
    title: "6. Rights of the data subject",
    content: `In accordance with Law 1581 of 2012, the data subject has the right to:

- **Access, update and correct** their personal data
- **Request proof** of the authorization granted for processing their data
- **Be informed** about how their personal data has been used
- **File complaints** with the Superintendence of Industry and Commerce (SIC) for violations of the law
- **Revoke the authorization** and/or request deletion of their data when constitutional and legal principles, rights and guarantees are not respected

To exercise any of these rights, you can contact us in writing at:
**alejandratellezlozada@gmail.com**
with the subject: "Personal data protection request"

We will respond within a maximum of **10 business days**.`,
  },
  {
    title: "7. Security measures",
    content: `We adopt reasonable technical and administrative measures to protect personal data against unauthorized access, loss, alteration or disclosure. However, no system for transmitting data over the internet is completely secure, so we cannot guarantee the absolute security of the information transmitted.`,
  },
  {
    title: "8. Cookies and tracking technologies",
    content: `This site may use first- and third-party cookies for:

- **Technical operation**: remembering browsing preferences
- **Analytics**: anonymously measuring traffic and user behavior (Google Analytics)

Analytics cookies do not collect personally identifiable information. Users can disable cookies in their browser settings, although this may affect the site's functionality.`,
  },
  {
    title: "9. International transfers",
    content: `Some of the third parties mentioned in this policy (Google, Meta/WhatsApp, Docplanner) may process data on servers located outside Colombia. These transfers are made in accordance with the protection mechanisms recognized by current Colombian regulations.`,
  },
  {
    title: "10. Information about minors",
    content: `This website does not knowingly collect personal data from minors under 18 without the consent of their parents or legal guardians. If parents or guardians believe their child has provided personal data through this site, they may contact us to request its deletion.`,
  },
  {
    title: "11. Effective date and changes to this policy",
    content: `This policy takes effect on **May 21, 2026** and may be modified at any time. Updates will be published on this same page with the date of the last modification. Continued use of the website after changes are published implies acceptance of the updated policy.`,
  },
  {
    title: "12. Supervisory authority",
    content: `In Colombia, the competent authority for personal data protection is the **Superintendence of Industry and Commerce (SIC)**.

Website: www.sic.gov.co
Phone line: 601 592 0400`,
  },
];

export default function PoliticaPrivacidadPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "var(--color-primary-50)",
          padding: "4rem 0 3rem",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "760px" }}>
          <span
            style={{
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-primary)",
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            Legal
          </span>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 300,
              color: "var(--color-text)",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Privacy and Personal Data Processing Policy
          </h1>
          <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
            Last updated: May 21, 2026 · Law 1581 of 2012 · Decree 1377 of 2013
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section style={{ backgroundColor: "white", padding: "4rem 0" }}>
        <div className="container-custom" style={{ maxWidth: "760px" }}>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.85,
              marginBottom: "3rem",
              padding: "1.25rem 1.5rem",
              background: "var(--color-primary-50)",
              borderLeft: "3px solid var(--color-primary)",
              borderRadius: "0 2px 2px 0",
            }}
          >
            At Dr. Alejandra Téllez's practice, we respect and protect your privacy. This policy explains what data we collect, how we use it and what your rights are as the data subject, in accordance with current Colombian law.
          </p>

          {sections.map((section) => (
            <div
              key={section.title}
              style={{ marginBottom: "2.5rem", paddingBottom: "2.5rem", borderBottom: "1px solid var(--color-border)" }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  color: "var(--color-text)",
                  marginBottom: "1rem",
                }}
              >
                {section.title}
              </h2>
              <div style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.85 }}>
                {section.content.split("\n").map((line, i) => {
                  if (!line.trim()) return <br key={i} />;
                  const parts = line.split(/\*\*(.*?)\*\*/g);
                  return (
                    <p key={i} style={{ marginBottom: "0.5rem" }}>
                      {parts.map((part, j) =>
                        j % 2 === 1 ? <strong key={j} style={{ color: "var(--color-text)", fontWeight: 600 }}>{part}</strong> : part
                      )}
                    </p>
                  );
                })}
              </div>
            </div>
          ))}

          <div style={{ paddingTop: "1rem", textAlign: "center" }}>
            <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
              Questions about this policy? Write to us at{" "}
              <a
                href="mailto:alejandratellezlozada@gmail.com"
                style={{ color: "var(--color-primary)", textDecoration: "none" }}
              >
                alejandratellezlozada@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
