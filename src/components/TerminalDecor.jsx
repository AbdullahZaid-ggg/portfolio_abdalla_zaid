import { useState, useEffect } from "react";

const lines = [
  { text: "cat about.md", delay: 500 },
  { text: "> Full-Stack Developer", delay: 1200 },
  { text: "> CS Student", delay: 1800 },
  { text: "> Linux Enthusiast", delay: 2400 },
  { text: "> WCA Speedcuber", delay: 3000 },
  { text: "", delay: 3500 },
  { text: "npm run build", delay: 3800 },
  { text: "✓ Build successful", delay: 4400 },
];

export default function TerminalDecor() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 w-72 z-40 opacity-40 hover:opacity-80 transition-opacity duration-300">
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="terminal-dot bg-red-500" />
          <span className="terminal-dot bg-yellow-500" />
          <span className="terminal-dot bg-terminal-green" />
          <span className="text-xs text-on-surface-variant/50 ml-2">terminal</span>
        </div>
        <div className="p-3 font-mono text-xs leading-relaxed">
          {lines.map((line, i) => (
            <TypedLine key={i} text={line.text} delay={line.delay} index={i} />
          ))}
          <span className="inline-block w-2 h-4 bg-primary animate-blink ml-0.5" />
        </div>
      </div>
    </div>
  );
}

function TypedLine({ text, delay, index }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!show) return null;

  const isPrompt = !text.startsWith(">") && !text.startsWith("✓") && text.length > 0;
  const isSuccess = text.startsWith("✓");

  return (
    <div className="mb-0.5">
      {text ? (
        <span className={isSuccess ? "text-terminal-green" : isPrompt ? "text-neon-cyan" : "text-on-surface-variant"}>
          {isPrompt && <span className="text-terminal-green">$ </span>}
          {text}
        </span>
      ) : (
        <br />
      )}
    </div>
  );
}
