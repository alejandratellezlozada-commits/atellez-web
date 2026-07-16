"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

interface Props {
  before: string;
  after: string;
  altBefore?: string;
  altAfter?: string;
  label?: string;
  initialPosition?: number;
  aspectRatio?: string;
}

export default function BeforeAfterSlider({
  before,
  after,
  altBefore = "Antes",
  altAfter = "Después",
  label,
  initialPosition = 50,
  aspectRatio = "3 / 4",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(initialPosition);
  const dragging = useRef(false);

  const clamp = (v: number) => Math.min(96, Math.max(4, v));

  const getPercent = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return position;
    return clamp(((clientX - rect.left) / rect.width) * 100);
  }, [position]);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
  };

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!dragging.current) return;
    setPosition(getPercent(e.clientX));
  }, [getPercent]);

  const onMouseUp = useCallback(() => { dragging.current = false; }, []);

  const onTouchMove = useCallback((e: TouchEvent) => {
    if (!dragging.current) return;
    setPosition(getPercent(e.touches[0].clientX));
  }, [getPercent]);

  const onContainerClick = useCallback((e: React.MouseEvent) => {
    setPosition(getPercent(e.clientX));
  }, [getPercent]);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, [onMouseMove, onMouseUp, onTouchMove]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <div
        ref={containerRef}
        onClick={onContainerClick}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio,
          overflow: "hidden",
          borderRadius: "2px",
          cursor: "col-resize",
          userSelect: "none",
          touchAction: "pan-y",
          border: "1px solid var(--color-border)",
        }}
      >
        {/* Imagen DESPUÉS (fondo completo) */}
        <Image
          src={after}
          alt={altAfter}
          fill
          draggable={false}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        {/* Imagen ANTES (recortada por la izquierda) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        >
          <Image
            src={before}
            alt={altBefore}
            fill
            draggable={false}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Línea divisora */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${position}%`,
            transform: "translateX(-50%)",
            width: "2px",
            background: "white",
            boxShadow: "0 0 6px rgba(0,0,0,0.4)",
            pointerEvents: "none",
          }}
        />

        {/* Handle arrastrable */}
        <div
          onMouseDown={onMouseDown}
          onTouchStart={(e) => { dragging.current = true; }}
          style={{
            position: "absolute",
            top: "50%",
            left: `${position}%`,
            transform: "translate(-50%, -50%)",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "white",
            boxShadow: "0 2px 12px rgba(0,0,0,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "col-resize",
            zIndex: 10,
            touchAction: "none",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M8 5l-5 7 5 7M16 5l5 7-5 7" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Etiquetas Antes / Después */}
        <span style={{
          position: "absolute",
          top: "0.75rem",
          left: "0.75rem",
          fontSize: "0.6rem",
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "white",
          background: "rgba(0,0,0,0.45)",
          padding: "0.25rem 0.6rem",
          borderRadius: "1px",
          pointerEvents: "none",
          opacity: position > 15 ? 1 : 0,
          transition: "opacity 0.2s",
        }}>
          Antes
        </span>
        <span style={{
          position: "absolute",
          top: "0.75rem",
          right: "0.75rem",
          fontSize: "0.6rem",
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "white",
          background: "rgba(0,0,0,0.45)",
          padding: "0.25rem 0.6rem",
          borderRadius: "1px",
          pointerEvents: "none",
          opacity: position < 85 ? 1 : 0,
          transition: "opacity 0.2s",
        }}>
          Después
        </span>
      </div>

      {label && (
        <p style={{
          fontSize: "0.65rem",
          fontWeight: 500,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--color-text-muted)",
          textAlign: "center",
        }}>
          {label}
        </p>
      )}
    </div>
  );
}
