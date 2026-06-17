"use client";

import { useEffect, useRef, useState } from "react";

/* ------------------------------- mini assets ------------------------------ */

function MiniLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 0 5px rgba(255,31,107,0.45))" }}
    >
      <g fill="none" strokeWidth="15" strokeLinecap="round">
        <path
          d="M70 26 A32 32 0 1 0 70 74"
          stroke="#29e0e0"
          transform="translate(-3 -3)"
          opacity="0.95"
        />
        <path
          d="M70 26 A32 32 0 1 0 70 74"
          stroke="#ff1f6b"
          transform="translate(2.5 2.5)"
        />
      </g>
    </svg>
  );
}

function Avatar() {
  return (
    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-lg border border-white/10 bg-bg-300">
      <MiniLogo className="h-4 w-4" />
    </span>
  );
}

function ScheduleLine({
  color,
  name,
  meta,
}: {
  color: string;
  name: string;
  meta: string;
}) {
  return (
    <div className="flex items-center gap-2 text-[13px]">
      <span
        className="h-2 w-2 flex-none rounded-full"
        style={{ background: color }}
      />
      <span className="font-medium text-fg-100">{name}</span>
      <span className="text-fg-400">· {meta}</span>
    </div>
  );
}

/* ----------------------------- script + replies --------------------------- */

type Msg = { role: "user" | "ai"; id: string; text?: string };

const SCRIPT: Msg[] = [
  { role: "user", id: "u1", text: "Thứ 3 tuần sau em học mấy ca ạ?" },
  { role: "ai", id: "r1" },
  {
    role: "user",
    id: "u2",
    text: "Còn lớp Toán rời rạc khung 13h–17h30 không?",
  },
  { role: "ai", id: "r2" },
  { role: "user", id: "u3", text: "Cho em xem GPA học kỳ vừa rồi với ạ?" },
  { role: "ai", id: "r3" },
];

// each AI reply is a list of "lines" revealed one by one
const AI_LINES: Record<string, React.ReactNode[]> = {
  r1: [
    <p key="a">
      Thứ 3 (17/06) bạn có <span className="font-semibold text-fg-100">2 ca</span>:
    </p>,
    <ScheduleLine key="b" color="#2dd4bf" name="Cơ sở dữ liệu" meta="07h00 · P.402" />,
    <ScheduleLine key="c" color="#60a5fa" name="Mạng máy tính" meta="13h00 · P.210" />,
  ],
  r2: [
    <p key="a">Có 1 lớp phù hợp, vẫn còn chỗ:</p>,
    <ScheduleLine
      key="b"
      color="#22d3ee"
      name="Toán rời rạc"
      meta="T5 · 13h00–15h30 · còn 4 chỗ"
    />,
    <p key="c" className="text-fg-300">
      Bạn muốn mình{" "}
      <span className="font-semibold text-lime-100">đăng ký luôn</span> không?
    </p>,
  ],
  r3: [
    <p key="a">Kết quả học kỳ 1 (2025–2026):</p>,
    <div
      key="b"
      className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg border border-lime-100/20 bg-lime-100/[0.06] px-2.5 py-2 text-[13px]"
    >
      <span className="font-semibold text-lime-100">GPA 3.42/4.0</span>
      <span className="text-fg-400">· 18 tín chỉ</span>
      <span className="text-fg-400">· Xếp loại Giỏi</span>
    </div>,
    <p key="c" className="text-fg-300">
      Tăng <span className="font-semibold text-fg-100">0.18</span> so với kỳ
      trước 👏. Mình gợi ý môn nên đăng ký kỳ tới nhé?
    </p>,
  ],
};

/* --------------------------------- bubbles -------------------------------- */

function UserBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[80%] rounded-2xl rounded-br-md border border-lime-100/20 bg-lime-100/[0.08] px-3.5 py-2.5 text-sm leading-6 text-fg-100">
        {children}
      </div>
    </div>
  );
}

function AIBubble({
  id,
  count,
}: {
  id: string;
  count: number;
}) {
  const lines = AI_LINES[id] ?? [];
  return (
    <div className="flex items-start gap-2.5">
      <Avatar />
      <div className="max-w-[82%] space-y-2 rounded-2xl rounded-tl-md border border-white/8 bg-white/[0.03] px-3.5 py-2.5 text-sm leading-6 text-fg-200">
        {lines.slice(0, count).map((line, i) => (
          <div key={i} style={{ animation: "mk-line-in 0.3s ease both" }}>
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <div className="flex items-center gap-2.5">
      <Avatar />
      <div className="flex items-center gap-1 rounded-2xl rounded-tl-md border border-white/8 bg-white/[0.03] px-3.5 py-3">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-fg-400 [animation-delay:-0.3s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-fg-400 [animation-delay:-0.15s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-fg-400" />
      </div>
    </div>
  );
}

/* ------------------------------- main demo -------------------------------- */

export default function AIChatDemo() {
  const [visible, setVisible] = useState(0); // committed messages
  const [draft, setDraft] = useState(""); // typewriter text in input
  const [typingUser, setTypingUser] = useState(false);
  const [aiThinking, setAiThinking] = useState(false);
  const [revealed, setRevealed] = useState<Record<string, number>>({});
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(SCRIPT.length);
      return;
    }

    let cancelled = false;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    async function run() {
      while (!cancelled) {
        setVisible(0);
        setDraft("");
        setTypingUser(false);
        setAiThinking(false);
        setRevealed({});
        await sleep(700);

        for (let i = 0; i < SCRIPT.length && !cancelled; i++) {
          const m = SCRIPT[i];
          if (m.role === "user") {
            setTypingUser(true);
            const text = m.text ?? "";
            for (let c = 1; c <= text.length && !cancelled; c++) {
              setDraft(text.slice(0, c));
              await sleep(18); // typing speed
            }
            await sleep(280);
            setDraft("");
            setTypingUser(false);
            setVisible(i + 1);
            await sleep(450);
          } else {
            setAiThinking(true);
            await sleep(950);
            if (cancelled) break;
            setAiThinking(false);
            setRevealed((p) => ({ ...p, [m.id]: 0 }));
            setVisible(i + 1);
            // reveal reply line by line
            const total = AI_LINES[m.id]?.length ?? 0;
            for (let n = 1; n <= total && !cancelled; n++) {
              setRevealed((p) => ({ ...p, [m.id]: n }));
              await sleep(320);
            }
            await sleep(700);
          }
        }
        await sleep(3000);
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  // keep newest message in view
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [visible, aiThinking, draft, revealed]);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-lime-100/10 blur-3xl" />

      <div className="glass flex h-[540px] flex-col overflow-hidden rounded-2xl shadow-2xl">
        {/* header */}
        <div className="flex flex-none items-center gap-2.5 border-b border-white/8 bg-white/[0.02] px-4 py-3">
          <Avatar />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-fg-100">Trợ lý AI</div>
            <div className="flex items-center gap-1.5 text-[11px] text-fg-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Đang hoạt động
            </div>
          </div>
          <span className="ml-auto rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-fg-300">
            Auto ĐKMH AI
          </span>
        </div>

        {/* conversation */}
        <div
          ref={scrollRef}
          className="no-scrollbar min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-5"
        >
          {SCRIPT.slice(0, visible).map((m) =>
            m.role === "user" ? (
              <UserBubble key={m.id}>{m.text}</UserBubble>
            ) : (
              <AIBubble
                key={m.id}
                id={m.id}
                count={revealed[m.id] ?? AI_LINES[m.id]?.length ?? 0}
              />
            )
          )}
          {aiThinking && <TypingDots />}
        </div>

        {/* input */}
        <div className="flex-none border-t border-white/8 px-4 py-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-3.5 py-3">
            {/* text area */}
            <div className="min-h-6 text-sm leading-6 text-fg-200">
              {draft ? (
                <span className="wrap-break-word">
                  {draft}
                  <span
                    className="ml-px inline-block w-px text-lime-100"
                    style={{ animation: "mk-caret 1s steps(1) infinite" }}
                  >
                    |
                  </span>
                </span>
              ) : (
                <span className="text-fg-500">Hỏi AI…</span>
              )}
            </div>
            {/* controls */}
            <div className="mt-2.5 flex items-center justify-between">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg text-fg-400 transition hover:bg-white/5">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
              <div className="flex items-center gap-1">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg text-fg-400 transition hover:bg-white/5">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[18px] w-[18px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3" />
                  </svg>
                </span>
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
                    draft || typingUser
                      ? "bg-gradient-to-br from-[#22d3ee] to-[#38bdf8] text-[#06222a]"
                      : "bg-white/10 text-fg-500"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 19V5M5 12l7-7 7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
