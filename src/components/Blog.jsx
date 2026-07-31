import { useState } from "react";
import portfolioData from "../data/portfolioData";
import Reveal from "./Reveal";

function PostCard({ post }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card-hover p-6 flex flex-col group">
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-xs font-mono text-primary-strong whitespace-nowrap">{post.date}</span>
        <span className="text-xs text-on-surface-variant whitespace-nowrap">{post.readTime}</span>
      </div>

      <h3 className="text-lg font-bold text-on-surface group-hover:text-primary-strong transition-colors mb-2">
        {post.title}
      </h3>
      <p className="text-xs text-on-surface-variant leading-relaxed mb-3">{post.excerpt}</p>

      {expanded && (
        <div className="space-y-3 mt-1 mb-3">
          {post.content.map((para, j) => (
            <p key={j} className="text-xs text-on-surface-variant leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="self-start text-xs font-semibold text-primary-strong hover:text-on-surface transition-colors"
        aria-expanded={expanded}
      >
        {expanded ? "▲ Read less" : "▼ Read full post"}
      </button>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-4">
        {post.tags.map((tag) => (
          <span key={tag} className="chip">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default function Blog() {
  const { blogPosts } = portfolioData;

  if (!blogPosts || blogPosts.length === 0) return null;

  return (
    <section id="blog" className="section-padding py-20 md:py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal>
          <div className="section-label">07. Blog</div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <Reveal key={i} delay={(i % 3) * 100}>
              <PostCard post={post} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
