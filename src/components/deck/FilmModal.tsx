"use client";

import { Modal } from "@/components/ui/Modal";

export function FilmModal({
  open,
  onClose,
  title,
  description,
  youtubeId,
  localVideo,
  poster,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  youtubeId?: string;
  localVideo?: string;
  poster?: string;
}) {
  return (
    <Modal open={open} onClose={onClose} title={title} description={description}>
      {youtubeId ? (
        <div className="space-y-4">
          <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black">
            <iframe
              title={title}
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {localVideo ? (
            <details className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <summary className="cursor-pointer select-none text-sm font-semibold text-[var(--moa-cream)]">
                Play local reel fallback
              </summary>
              <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black">
                <video className="h-full w-full object-cover" controls playsInline preload="metadata" poster={poster}>
                  <source src={localVideo} type="video/mp4" />
                </video>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--moa-cream-muted)]">
                This local file is optional — useful if YouTube is blocked on corporate networks.
              </p>
            </details>
          ) : null}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black">
            <video
              className="h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster={poster}
            >
              {localVideo ? <source src={localVideo} type="video/mp4" /> : null}
            </video>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm leading-relaxed text-[var(--moa-cream-muted)]">
              No YouTube ID configured — playing the local reel instead. If you have an approved YouTube reel, set{" "}
              <span className="font-mono text-white/75">filmFeature.youtubeId</span> in{" "}
              <span className="font-mono text-white/75">src/data/deckContent.ts</span>. The iframe will still be deferred
              until this modal opens.
            </p>
            <a
              className="mt-5 inline-flex text-sm font-semibold text-[rgba(197,163,106,0.95)] underline-offset-4 hover:underline"
              href="https://www.mallofamerica.com/"
              target="_blank"
              rel="noreferrer"
            >
              Open mallofamerica.com
            </a>
          </div>
        </div>
      )}
    </Modal>
  );
}
