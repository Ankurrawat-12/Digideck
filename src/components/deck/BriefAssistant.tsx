"use client";

import { useMemo, useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { aiIntro, matchAiReply } from "@/data/aiResponses";
import { Badge } from "@/components/ui/Badge";

export function BriefAssistant({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const answer = useMemo(() => matchAiReply(q), [q]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Brief Assistant (demo)"
      description={aiIntro}
      className="max-w-2xl"
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge className="text-[9px]">AI integration — assignment demo</Badge>
        <Badge className="text-[9px] text-white/55">Curated routing, not a live model</Badge>
      </div>

      <label className="mt-6 block text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
        Ask a commercial question
      </label>
      <textarea
        value={q}
        onChange={(e) => setQ(e.target.value)}
        rows={4}
        aria-label="Question for the brief assistant demo"
        className="mt-3 w-full resize-y rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-sm leading-relaxed text-[var(--moa-cream)] outline-none ring-0 placeholder:text-white/35 focus:border-[rgba(197,163,106,0.45)]"
        placeholder="Example: How does leasing compare for luxury vs pop-up?"
      />

      <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">Suggested brief</p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{answer}</p>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <Button type="button" variant="ghost" onClick={() => setQ("")}>
          Clear
        </Button>
        <Button
          type="button"
          variant="primary"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(answer);
            } catch {
              /* clipboard may be denied — ignore */
            }
          }}
        >
          Copy brief
        </Button>
      </div>
    </Modal>
  );
}
