import { useEffect, useState } from "react";

const QUOTE =
  "AN IDIOT ADMIRES COMPLEXITY, A GENIUS ADMIRES SIMPLICITY.\n\u2014 TERRY A. DAVIS (TEMPLEOS)";

function useTypewriterLoop(text, speed = 90, pause = 3200) {
  const [out, setOut] = useState("");

  useEffect(() => {
    let char = 0;
    let timer;

    const type = () => {
      if (char < text.length) {
        char += 1;
        setOut(text.slice(0, char));
        timer = setTimeout(type, speed);
      } else {
        timer = setTimeout(() => {
          setOut("");
          char = 0;
          timer = setTimeout(type, speed);
        }, pause);
      }
    };

    timer = setTimeout(type, 500);
    return () => clearTimeout(timer);
  }, [text, speed, pause]);

  return out;
}

export default function TerminalWindow() {
  const quote = useTypewriterLoop(QUOTE);
  const lines = quote.split("\n");

  return (
    <div
      className="fixed bottom-24 right-6 left-6 sm:left-auto sm:w-[26rem] z-0 pointer-events-none select-none"
      aria-hidden="true"
    >
      <div className="rounded-lg border border-outline/50 bg-background/60 backdrop-blur-md shadow-2xl shadow-black/40 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-outline/40 bg-surface-variant/40">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
          <span className="ml-3 font-mono text-[10px] text-on-surface-variant">templeos@localhost: ~</span>
        </div>
        <div className="px-4 py-4 font-mono text-xs text-on-surface leading-relaxed">
          <p className="text-tertiary/80">$ ./genius --quote</p>
          <p className="mt-1 text-secondary/90 break-all">
            &gt; {lines[0]}
            {lines.length > 1 ? null : (
              <span className="inline-block ml-1 h-3.5 w-2 bg-primary/80 align-middle animate-blink" />
            )}
          </p>
          {lines.length > 1 ? (
            <p className="mt-1 text-on-surface-variant break-all">
              {lines[1]}
              <span className="inline-block ml-1 h-3.5 w-2 bg-primary/80 align-middle animate-blink" />
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
