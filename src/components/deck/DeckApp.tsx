"use client";

import { useState } from "react";
import { DeckShell } from "./DeckShell";
import { DeckPlayer } from "./DeckPlayer";
import { IntroGate } from "./IntroGate";

export function DeckApp() {
  const [entered, setEntered] = useState(false);

  return (
    <DeckShell>
      <main className="min-h-[100dvh]">
        <IntroGate open={!entered} onEnter={() => setEntered(true)} />
        {entered ? <DeckPlayer /> : null}
      </main>
    </DeckShell>
  );
}

