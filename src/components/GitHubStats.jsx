import { useEffect, useState } from "react";

const languageColors = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  C: "#555555",
  "C++": "#f34b7d",
  "C#": "#178600",
  HTML: "#e34c26",
  CSS: "#563d7c",
};

function StatTile({ label, value }) {
  return (
    <div className="flex-1 min-w-[100px] rounded-md3-md bg-white/[0.04] border border-white/10 px-4 py-3 text-center">
      <p className="text-xl md:text-2xl font-bold text-white">{value}</p>
      <p className="text-[10px] uppercase tracking-widest text-white/50 mt-1">{label}</p>
    </div>
  );
}

export default function GitHubStats({ username }) {
  const [state, setState] = useState({ loading: true, error: false, user: null, repos: null });

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const [u, r] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=stargazers&type=owner`),
        ]);
        if (!u.ok || !r.ok) throw new Error("GitHub API error");
        const user = await u.json();
        const repos = await r.json();
        if (!cancelled) setState({ loading: false, error: false, user, repos });
      } catch {
        if (!cancelled) setState({ loading: false, error: true, user: null, repos: null });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [username]);

  if (state.loading) {
    return (
      <div className="space-y-4">
        <div className="flex gap-3">
          <div className="h-20 flex-1 rounded-md3-md bg-white/[0.05] animate-pulse" />
          <div className="h-20 flex-1 rounded-md3-md bg-white/[0.05] animate-pulse" />
          <div className="h-20 flex-1 rounded-md3-md bg-white/[0.05] animate-pulse" />
        </div>
        <div className="h-24 rounded-md3-md bg-white/[0.05] animate-pulse" />
      </div>
    );
  }

  if (state.error || !state.user) {
    return (
      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outlined !py-2 !px-4 !text-xs"
      >
        View GitHub Profile →
      </a>
    );
  }

  const { user, repos } = state;
  const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
  const topRepos = repos.slice(0, 4);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <StatTile label="Repos" value={user.public_repos} />
        <StatTile label="Followers" value={user.followers} />
        <StatTile label="Stars" value={totalStars} />
      </div>

      <ul className="mt-4 space-y-2">
        {topRepos.map((repo) => (
          <li key={repo.id}>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 rounded-md3-md bg-white/[0.04] border border-white/10 px-4 py-2.5 text-sm hover:bg-white/[0.07] hover:border-white/25 transition-colors"
            >
              <span className="text-white/80 truncate">{repo.name}</span>
              <span className="flex items-center gap-3 shrink-0">
                {repo.language && (
                  <span className="flex items-center gap-1.5 text-[10px] text-white/50">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: languageColors[repo.language] || "#8b949e" }}
                    />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1 text-xs text-white/50">
                  <svg className="w-3.5 h-3.5 text-yellow-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  {repo.stargazers_count}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outlined mt-6 !py-2 !px-4 !text-xs"
      >
        View GitHub Profile →
      </a>
    </div>
  );
}
