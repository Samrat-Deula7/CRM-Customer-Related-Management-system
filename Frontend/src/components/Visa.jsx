import { useState } from "react";

import search from "../images/search.png";

const allCountries = [
  {
    rank: 1,
    flags: "🇸🇬",
    name: "Singapore",
    subtitle: "Southeast Asia's powerhouse",
    score: 192,
    bar: 100,
    medal: "gold",
  },
  {
    rank: 2,
    flags: "🇯🇵 🇰🇷",
    name: "Japan & South Korea",
    subtitle: "Asia's consistent top performers",
    score: 188,
    bar: 97,
    medal: "silver",
  },
  {
    rank: 3,
    flags: "🇩🇰 🇪🇸 🇨🇭",
    name: "Denmark, Spain, Switzerland +2",
    subtitle: "European excellence",
    score: 186,
    bar: 95,
    medal: "bronze",
  },
  {
    rank: 4,
    flags: "🇦🇹 🇧🇪 🇫🇷 🇩🇪",
    name: "Austria, Belgium, France, Germany +6",
    subtitle: "Schengen bloc powerhouse",
    score: 185,
    bar: 92,
  },
  {
    rank: 5,
    flags: "🇭🇺 🇵🇹 🇦🇪",
    name: "Hungary, Portugal, UAE +2",
    subtitle: "UAE — fastest climber in 20 years",
    score: 184,
    bar: 88,
  },
  {
    rank: 6,
    flags: "🇳🇿 🇵🇱 🇨🇿",
    name: "New Zealand, Poland, Czechia +3",
    subtitle: "Steady performers",
    score: 183,
    bar: 84,
  },
  {
    rank: 7,
    flags: "🇦🇺 🇬🇧",
    name: "Australia, UK, Latvia, Liechtenstein",
    subtitle: "Australia tied 7th — strong global access",
    score: 182,
    bar: 81,
  },
  {
    rank: 8,
    flags: "🇨🇦 🇮🇸 🇱🇹",
    name: "Canada, Iceland, Lithuania",
    subtitle: "Reliable open-travel tier",
    score: 181,
    bar: 78,
  },
  {
    rank: 9,
    flags: "🇲🇾",
    name: "Malaysia",
    subtitle: "Southeast Asia's top performer",
    score: 180,
    bar: 75,
  },
  {
    rank: 10,
    flags: "🇺🇸",
    name: "United States",
    subtitle: "Down from 4th in 2006 — lost 7 destinations",
    score: 179,
    bar: 72,
  },
  {
    rank: 98,
    flags: "🇳🇵",
    name: "Nepal",
    subtitle: "Requires prior visa for most destinations",
    score: 40,
    bar: 18,
  },
];

const medalStyles = {
  gold: {
    border: "border-t-[3px] border-t-[#FF4A03]",
    badge: "bg-[#FF4A03] text-white",
  },
  silver: {
    border: "border-t-[3px] border-t-gray-400",
    badge: "bg-gray-400 text-white",
  },
  bronze: {
    border: "border-t-[3px] border-t-amber-700",
    badge: "bg-amber-700 text-white",
  },
};

export default function Visa() {
  const [query, setQuery] = useState("");
  const [hoveredRow, setHoveredRow] = useState(null);

  const q = query.toLowerCase().trim();

  const topThree = allCountries.filter((c) => c.medal);
  const rest = allCountries.filter((c) => !c.medal && c.rank !== 98);
  const nepal = allCountries.find((c) => c.rank === 98);

  const filtered = q
    ? allCountries.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.subtitle.toLowerCase().includes(q) ||
          String(c.score).includes(q) ||
          String(c.rank).includes(q),
      )
    : null;

  return (
    <div className="min-h-screen font-sans bg-[#E5E5E5]">
      {/* Hero */}
      <div className="relative px-6 pt-10 pb-16 overflow-hidden bg-black">
        <p className="text-xs tracking-widest uppercase text-white/70 mb-2">
          Henley Passport Index · 2026
        </p>
        <h1 className="text-3xl font-medium text-white leading-tight mb-2">
          Global Visa Power
          <br />
          Rankings
        </h1>
        <p className="text-sm text-white/75 mb-8">
          Which passports open the most doors — ranked by visa-free
          destinations.
        </p>

        <div className="flex gap-8 mb-8">
          {[
            { num: "195", label: "Countries ranked" },
            { num: "227", label: "Destinations tracked" },
            { num: "192", label: "Max visa-free access" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-medium text-white">{s.num}</div>
              <div className="text-[10px] uppercase tracking-wide text-white/60 mt-0.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Search bar inside hero */}
        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none"></div>
          <div className="w-full  flex items-center justify-center">
            <img src={search} alt="search" className="absolute left-95 w-6" />

            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search country, rank, or visa-free score..."
              className="m-auto w-[60%] pl-10 pr-10 py-3 rounded-xl text-sm outline-none placeholder-white/50 text-white"
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            />
          </div>
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute inset-y-0 right-3 flex items-center text-white/60 hover:text-white transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

        {/* Wave cutout */}
        <div
          className="absolute bottom-0 left-0 right-0 h-8"
          style={{
            backgroundColor: "#E5E5E5",
            clipPath: "ellipse(55% 100% at 50% 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="px-4 pt-6 pb-12 max-w-2xl mx-auto">
        {/* ── SEARCH RESULTS ── */}
        {filtered !== null ? (
          <>
            <p
              className="text-[11px] tracking-widest uppercase font-medium mb-3"
              style={{ color: "#FF4A03" }}
            >
              🔍 {filtered.length} result{filtered.length !== 1 ? "s" : ""} for
              "{query}"
            </p>

            {filtered.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 text-center border border-black/5">
                <div className="text-4xl mb-3">🌍</div>
                <p className="text-sm font-medium text-gray-700 mb-1">
                  No countries found
                </p>
                <p className="text-xs text-gray-400">
                  Try searching by country name, rank number, or visa-free score
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {filtered.map((r) => (
                  <div
                    key={r.rank}
                    onMouseEnter={() => setHoveredRow(r.rank)}
                    onMouseLeave={() => setHoveredRow(null)}
                    className={`bg-white rounded-xl px-4 py-3 flex items-center gap-3 border border-black/5 transition-shadow duration-200 ${
                      hoveredRow === r.rank ? "shadow-md" : ""
                    }`}
                  >
                    <span className="text-xs text-gray-400 w-6 text-center shrink-0 font-medium">
                      #{r.rank}
                    </span>
                    <span className="text-xl w-10 text-center shrink-0">
                      {r.flags}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-800 truncate">
                        {r.name}
                      </div>
                      <div className="text-[11px] text-gray-400 mt-0.5 mb-2">
                        {r.subtitle}
                      </div>
                      <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${r.bar}%`,
                            backgroundColor: "#FF4A03",
                          }}
                        />
                      </div>
                    </div>
                    <div className="text-right shrink-0 ml-2">
                      <div
                        className="text-lg font-medium"
                        style={{ color: "#FF4A03" }}
                      >
                        {r.score}
                      </div>
                      <div className="text-[9px] uppercase tracking-wider text-gray-400">
                        visa-free
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            {/* ── TOP 3 ── */}
            <p
              className="text-[11px] tracking-widest uppercase font-medium mb-3"
              style={{ color: "#FF4A03" }}
            >
              🏆 Top 3 passports
            </p>

            <div className="grid grid-cols-3 gap-2 mb-8">
              {topThree.map((p) => {
                const s = medalStyles[p.medal];
                return (
                  <div
                    key={p.rank}
                    className={`bg-white rounded-2xl p-4 text-center border border-black/5 ${s.border}`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium mx-auto mb-2 ${s.badge}`}
                    >
                      {p.rank}
                    </div>
                    <div className="text-3xl mb-2">{p.flags}</div>
                    <div className="text-xs font-medium text-gray-800 mb-1 leading-tight">
                      {p.name}
                    </div>
                    <div
                      className="text-xl font-medium"
                      style={{ color: "#FF4A03" }}
                    >
                      {p.score}
                    </div>
                    <div className="text-[9px] uppercase tracking-wider text-gray-400 mt-0.5">
                      destinations
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="h-px bg-black/10 mb-6" />

            {/* ── RANKS 4–10 ── */}
            <p
              className="text-[11px] tracking-widest uppercase font-medium mb-3"
              style={{ color: "#FF4A03" }}
            >
              📊 Ranks 4 – 10
            </p>

            <div className="flex flex-col gap-2 mb-8">
              {rest.map((r) => (
                <div
                  key={r.rank}
                  onMouseEnter={() => setHoveredRow(r.rank)}
                  onMouseLeave={() => setHoveredRow(null)}
                  className={`bg-white rounded-xl px-4 py-3 flex items-center gap-3 border border-black/5 transition-shadow duration-200 ${
                    hoveredRow === r.rank ? "shadow-md" : ""
                  }`}
                >
                  <span className="text-xs text-gray-400 w-5 text-center shrink-0">
                    {r.rank}
                  </span>
                  <span className="text-xl w-10 text-center shrink-0">
                    {r.flags}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-800 truncate">
                      {r.name}
                    </div>
                    <div className="text-[11px] text-gray-400 mt-0.5 mb-2">
                      {r.subtitle}
                    </div>
                    <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${r.bar}%`,
                          backgroundColor: "#FF4A03",
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-right shrink-0 ml-2">
                    <div
                      className="text-lg font-medium"
                      style={{ color: "#FF4A03" }}
                    >
                      {r.score}
                    </div>
                    <div className="text-[9px] uppercase tracking-wider text-gray-400">
                      visa-free
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-px bg-black/10 mb-6" />

            {/* ── NEPAL ── */}
            <p
              className="text-[11px] tracking-widest uppercase font-medium mb-3"
              style={{ color: "#FF4A03" }}
            >
              🇳🇵 Nepal — your passport
            </p>

            <div
              className="bg-white rounded-2xl p-5 flex items-center gap-4 mb-8"
              style={{ border: "2px solid #FF4A03" }}
            >
              <div className="text-5xl shrink-0">🇳🇵</div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-800 mb-0.5">
                  Nepali Passport
                </div>
                <div className="text-xs text-gray-400 mb-2">
                  Approx. rank ~98th globally
                </div>
                <span
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{ backgroundColor: "#FFF0EB", color: "#FF4A03" }}
                >
                  Requires prior visa for most destinations
                </span>
              </div>
              <div className="text-right shrink-0">
                <div
                  className="text-4xl font-medium"
                  style={{ color: "#FF4A03" }}
                >
                  40
                </div>
                <div className="text-[9px] uppercase tracking-wider text-gray-400 leading-tight">
                  visa-free
                  <br />
                  destinations
                </div>
              </div>
            </div>
          </>
        )}

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 border-t border-black/10 pt-4">
          Source:{" "}
          <a
            href="https://www.henleypassportindex.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#FF4A03" }}
          >
            Henley Passport Index
          </a>{" "}
          · Q1 2026 · Visa-free includes visa-on-arrival &amp; e-Visa access
        </p>
      </div>
    </div>
  );
}
