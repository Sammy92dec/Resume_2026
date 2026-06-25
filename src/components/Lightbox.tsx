import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type LightboxImage = { src: string; caption?: string };

export function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const img = images[index];
  if (!img) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-4 right-4 h-10 w-10 grid place-items-center rounded-full bg-paper/10 text-paper hover:bg-paper/20"
      >
        <X className="h-5 w-5" />
      </button>
      {images.length > 1 && (
        <>
          <button
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center rounded-full bg-paper/10 text-paper hover:bg-paper/20"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center rounded-full bg-paper/10 text-paper hover:bg-paper/20"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}
      <figure className="max-w-6xl max-h-full flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
        <img
          src={img.src}
          alt={img.caption || ""}
          className="max-h-[80vh] w-auto rounded-lg shadow-2xl object-contain"
        />
        {img.caption && (
          <figcaption className="text-paper/80 text-sm text-center max-w-xl">
            {img.caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
