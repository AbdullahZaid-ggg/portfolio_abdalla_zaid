import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center section-padding pt-20 text-center">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative z-10 space-y-6">
        <p className="font-pixel text-6xl md:text-8xl text-gradient">404</p>
        <p className="text-base md:text-lg text-on-surface-variant">
          &gt; page not found. maybe you took a wrong turn.
        </p>
        <Link to="/" className="btn-filled inline-flex">
          <span aria-hidden>←</span> Back Home
        </Link>
      </div>
    </section>
  );
}
