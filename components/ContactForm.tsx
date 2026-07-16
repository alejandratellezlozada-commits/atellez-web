"use client";

import { useState } from "react";

const servicios = [
  "Consulta general de dermatología",
  "Tratamiento del acné",
  "Toxina botulínica (Botox)",
  "Ácido hialurónico (fillers)",
  "Láser CO2",
  "Peeling químico / Cosmelan",
  "Alopecia / caída del cabello",
  "Depilación láser",
  "Retiro de lunares o lipomas",
  "Sculptra",
  "Otro",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Hola Dra. Alejandra, le escribo desde el sitio web.`,
      ``,
      `*Nombre:* ${form.nombre}`,
      `*Teléfono:* ${form.telefono}`,
      `*Motivo de consulta:* ${form.servicio || "No especificado"}`,
      form.mensaje ? `*Mensaje:* ${form.mensaje}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/573147444537?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    border: "1px solid var(--color-border)",
    borderRadius: "2px",
    fontSize: "0.9rem",
    color: "var(--color-text)",
    background: "white",
    outline: "none",
    transition: "border-color 0.15s",
    fontFamily: "var(--font-body)",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.65rem",
    fontWeight: 500,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--color-text-muted)",
    marginBottom: "0.5rem",
  };

  if (submitted) {
    return (
      <div
        style={{
          padding: "3rem 2rem",
          textAlign: "center",
          border: "1px solid var(--color-border)",
          borderRadius: "2px",
          background: "var(--color-primary-50)",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "2px",
            background: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.25rem",
          }}
        >
          <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>
        <h3
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "1.5rem",
            fontWeight: 500,
            color: "var(--color-text)",
            marginBottom: "0.75rem",
          }}
        >
          ¡Mensaje listo para enviar!
        </h3>
        <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", marginBottom: "1.5rem" }}>
          Se abrió WhatsApp con tu información. Envía el mensaje y te responderemos en horario de atención.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          style={{
            fontSize: "0.7rem",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-primary)",
            background: "none",
            border: "none",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nombre" style={labelStyle}>Nombre completo *</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="telefono" style={labelStyle}>Teléfono / WhatsApp *</label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            required
            placeholder="+57 300 000 0000"
            value={form.telefono}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label htmlFor="servicio" style={labelStyle}>Motivo de consulta</label>
        <select
          id="servicio"
          name="servicio"
          value={form.servicio}
          onChange={handleChange}
          style={{ ...inputStyle, appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" }}
        >
          <option value="">Selecciona un servicio (opcional)</option>
          {servicios.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" style={labelStyle}>Mensaje adicional</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          placeholder="Cuéntanos brevemente tu caso o dudas..."
          value={form.mensaje}
          onChange={handleChange}
          style={{ ...inputStyle, resize: "vertical", minHeight: "110px" }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
        <div
          style={{
            flexShrink: 0,
            width: "36px",
            height: "36px",
            borderRadius: "2px",
            background: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>
        <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", lineHeight: 1.6, paddingTop: "0.25rem" }}>
          Al enviar, se abrirá WhatsApp con tu información lista para enviar. No almacenamos datos de este formulario.
        </p>
      </div>

      <button
        type="submit"
        style={{
          padding: "0.9rem 2rem",
          background: "var(--color-primary)",
          color: "white",
          border: "none",
          borderRadius: "2px",
          fontSize: "0.75rem",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          cursor: "pointer",
          transition: "opacity 0.15s",
          alignSelf: "flex-start",
        }}
      >
        Enviar por WhatsApp →
      </button>
    </form>
  );
}
