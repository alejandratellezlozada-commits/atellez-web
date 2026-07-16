"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  label: string;
}

interface Props {
  items: GalleryItem[];
  groupName: string;
  sectionIndex: number;
  allItems: GalleryItem[];
}

export default function GalleryLightbox({ items, groupName, sectionIndex, allItems }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + allItems.length) % allItems.length : null));
  }, [allItems.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % allItems.length : null));
  }, [allItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, close, prev, next]);

  const activeItem = lightboxIndex !== null ? allItems[lightboxIndex] : null;

  // Find the global index for each item in this section
  const getGlobalIndex = (item: GalleryItem) => allItems.findIndex((a) => a.src === item.src);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(getGlobalIndex(item))}
            className="overflow-hidden border border-[var(--color-border)] bg-white group text-left w-full cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            style={{ borderRadius: "2px" }}
            aria-label={`Ver ${item.alt} en grande`}
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm-3-3v6m-3-3h6" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="px-4 py-3">
              <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide">
                {item.label}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && activeItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Ver imagen en grande"
        >
          {/* Image container */}
          <div
            className="relative flex items-center justify-center w-full h-full px-14 py-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-w-4xl max-h-full w-full" style={{ maxHeight: "calc(100vh - 5rem)" }}>
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                width={1200}
                height={900}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "calc(100vh - 5rem)",
                  objectFit: "contain",
                  borderRadius: "12px",
                  display: "block",
                }}
              />
            </div>

            {/* Label */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xs font-semibold uppercase tracking-widest px-4 py-2" style={{ background: "rgba(0,0,0,0.6)", borderRadius: "2px" }}>
              {activeItem.label} · {lightboxIndex + 1} / {allItems.length}
            </div>
          </div>

          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
            aria-label="Cerrar"
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
            aria-label="Anterior"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
            aria-label="Siguiente"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
