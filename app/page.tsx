import Link from "next/link";
import AIChatDemo from "./ai-chat-demo";
import { SITE_URL, STORE_URL, DISCORD_URL } from "./seo-config";
import { POSTS } from "./blog/posts";
import { DiscordIcon } from "./ui";

/* ---------------------------------- Data ---------------------------------- */

const FEATURES = [
  {
    icon: "bolt",
    color: "#22d3ee",
    title: "Đăng ký môn học tự động",
    desc: "Chuẩn bị sẵn danh sách môn, tiện ích tự bấm đăng ký với tốc độ mili-giây ngay khi cổng mở.",
  },
  {
    icon: "shield",
    color: "#38bdf8",
    title: "Giải CAPTCHA tự động",
    desc: "Tự giải mã CAPTCHA chính xác — không còn phải nhập tay và bỏ lỡ slot môn học.",
  },
  {
    icon: "key",
    color: "#2dd4bf",
    title: "Tự đăng nhập & giữ phiên",
    desc: "Đăng nhập tự động, chống văng tài khoản, luôn sẵn sàng vào đúng khung giờ vàng.",
  },
  {
    icon: "users",
    color: "#60a5fa",
    title: "Quản lý nhiều tài khoản",
    desc: "Đăng ký giúp bạn bè, quản lý nhiều tài khoản trên cùng một trình duyệt cực kỳ tiện lợi.",
  },
  {
    icon: "sparkles",
    color: "#ff3d7f",
    title: "Trợ lý AI cho sinh viên",
    desc: "Hỏi đáp thông tin học vụ, tra cứu lịch học, điểm số và lịch thi nhanh chóng bằng AI.",
  },
  {
    icon: "chart",
    color: "#818cf8",
    title: "Hỗ trợ xem điểm và thời khóa biểu",
    desc: "Xem danh sách giảng viên và điểm của sinh viên bất kỳ mà bạn muốn.",
  },
];

const UNIVERSITIES = [
  "VNUA",
  "PTIT",
  "HCMIU",
  "HANU",
  "FTU",
  "HCMUAF",
  "SGU",
  "STU",
  "HUMG",
  "EIU",
  "DHV",
  // "UEH",
  // "NEU",
  // "HUST",
];

const STATS = [
  { value: "1.000+", label: "Sinh viên đang dùng" },
  { value: "5.0★", label: "Đánh giá Chrome Store" },
  { value: "< 1s", label: "Tốc độ đăng ký" },
  { value: "10+", label: "Trường hỗ trợ" },
];

const PROCESS_CHECKS = [
  {
    b: "Đăng nhập + giải CAPTCHA",
    t: "tự động điền tài khoản và vượt CAPTCHA trong tích tắc",
  },
  {
    b: "Đồng bộ giờ máy chủ",
    t: "canh chính xác thời điểm mở cổng, không sớm không trễ",
  },
  {
    b: "Gửi yêu cầu tốc độ cao",
    t: "tự động retry nếu nghẽn cho tới khi đăng ký thành công",
  },
  {
    b: "Tự lưu & xác nhận đăng ký",
    t: "tự bấm Lưu để chốt học phần, không lo chọn xong mà quên lưu",
  },
];

const BATCH_CHECKS = [
  {
    b: "Danh sách thông minh",
    t: "nhập sẵn nhiều môn, tiện ích đăng ký lần lượt",
  },
  { b: "Tự động thử lại", t: "môn hết slot sẽ tự retry khi có người hủy" },
  { b: "Báo kết quả tức thì", t: "biết ngay môn nào đã đăng ký thành công" },
];

const FAQS = [
  {
    q: "Auto ĐKMH có an toàn không?",
    a: "Tiện ích đã được Google phê duyệt trên cửa hàng và chỉ hoạt động trên cổng đăng ký của trường bạn. Thông tin đăng nhập được lưu cục bộ ngay trên máy của bạn.",
  },
  {
    q: "Tôi có cần biết kỹ thuật để dùng không?",
    a: "Không. Giao diện đơn giản — chỉ cần cài đặt, nhập danh sách môn và bật chế độ tự động. Mọi thứ còn lại tiện ích lo.",
  },
  {
    q: "Trường của tôi có được hỗ trợ không?",
    a: "Tiện ích hỗ trợ VNUA, PTIT, HCMIU, HANU, FTU, HCMUAF, SGU, STU, HUMG, EIU, DHV và nhiều trường dùng nền tảng tương thích. Hãy cài thử để kiểm tra trường của bạn.",
  },
  {
    q: "Auto ĐKMH có miễn phí không?",
    a: "Có. Bạn cài đặt và sử dụng miễn phí từ Chrome Web Store. Chỉ cần một tài khoản sinh viên của trường để bắt đầu.",
  },
  {
    q: "Dùng trên điện thoại được không?",
    a: "Được. Bạn có thể dùng trên Kiwi Browser (Android) hoặc Orion Browser (iOS) để cài tiện ích Chrome.",
  },
  {
    q: "Dữ liệu của tôi lưu ở đâu?",
    a: "Toàn bộ dữ liệu và thông tin đăng nhập được lưu cục bộ trên trình duyệt của bạn, không gửi lên máy chủ bên thứ ba.",
  },
];

const DAYS = ["T2", "T3", "T4", "T5", "T6"];

// Course blocks placed onto the timetable grid (day 0-4, period row 0-3)
const SCHEDULE = [
  { day: 0, row: 0, name: "Lập trình HĐT", room: "P.301", color: "#22d3ee" },
  { day: 2, row: 0, name: "Giải tích 2", room: "P.105", color: "#38bdf8" },
  { day: 1, row: 1, name: "Cơ sở dữ liệu", room: "P.402", color: "#2dd4bf" },
  { day: 4, row: 1, name: "Mạng máy tính", room: "P.210", color: "#60a5fa" },
  { day: 3, row: 2, name: "Tiếng Anh CN", room: "P.118", color: "#ff3d7f" },
];

/* --------------------------------- Icons ---------------------------------- */

function Icon({ name, className = "" }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    bolt: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />,
    shield: (
      <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4zM9.5 12l1.8 1.8L15 9.5" />
    ),
    key: (
      <path d="M14 7a4 4 0 11-5.5 5.5L3 18v3h3l1-1h2v-2h2l1.5-1.5A4 4 0 0114 7zM16.5 7.5h.01" />
    ),
    users: (
      <path d="M16 14a4 4 0 10-8 0M12 7a3 3 0 100-6 3 3 0 000 6zM3 21v-1a5 5 0 015-5h8a5 5 0 015 5v1" />
    ),
    sparkles: (
      <path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3zM19 14l.9 2.4 2.4.9-2.4.9L19 21l-.9-2.4-2.4-.9 2.4-.9L19 14z" />
    ),
    star: (
      <path d="M12 2l3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1L12 2z" />
    ),
    check: <path d="M20 6L9 17l-5-5" />,
    login: (
      <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" />
    ),
    clock: <path d="M12 7v5l3 2M12 22a10 10 0 100-20 10 10 0 000 20z" />,
    book: (
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20V2H6.5A2.5 2.5 0 004 4.5v15z" />
    ),
    edit: (
      <path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
    ),
    chevron: <path d="M6 9l6 6 6-6" />,
    clip: (
      <path d="M21.4 11.05l-9.19 9.19a5 5 0 01-7.07-7.07l9.19-9.19a3.33 3.33 0 014.71 4.71l-9.2 9.19a1.67 1.67 0 01-2.36-2.36l8.49-8.48" />
    ),
    mic: (
      <path d="M12 2a3 3 0 00-3 3v6a3 3 0 006 0V5a3 3 0 00-3-3zM5 11a7 7 0 0014 0M12 18v3" />
    ),
    send: <path d="M12 19V5M5 12l7-7 7 7" />,
    chart: (
      <>
        <path d="M3 3v18h18" />
        <path d="M7 14l3-3 3 3 4-5" />
        <path d="M17 9h0" />
      </>
    ),
  };
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function ChromeLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#fff" />
      <circle cx="12" cy="12" r="4.2" fill="#4285F4" />
      <path d="M12 7.8h8.6A10 10 0 0012 2v5.8z" fill="#EA4335" />
      <path
        d="M20.6 7.8H12a4.2 4.2 0 013.7 6.3L12 22a10 10 0 008.6-14.2z"
        fill="#FBBC05"
      />
      <path
        d="M3.4 7A10 10 0 0012 22l3.7-7.9A4.2 4.2 0 018.3 14L3.4 7z"
        fill="#34A853"
      />
    </svg>
  );
}

function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 0 6px rgba(255,31,107,0.45))" }}
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

/* ------------------------------- Components -------------------------------- */

function StoreButton({
  variant = "primary",
  size = "md",
  children = "Cài đặt miễn phí",
  className = "",
}: {
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
  children?: React.ReactNode;
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-300 will-change-transform";
  const sizes = size === "lg" ? "h-13 px-7 text-base" : "h-10 px-5 text-sm";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-[#22d3ee] to-[#38bdf8] text-[#06222a] lime-glow hover:scale-[1.03] hover:brightness-110"
      : "glass text-fg-100 hover:bg-white/10";
  return (
    <a
      href={STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes} ${styles} ${className}`}
    >
      {variant === "primary" && <ChromeLogo className="h-5 w-5" />}
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-lime-100/30 bg-lime-100/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-lime-100">
      {children}
    </span>
  );
}

function CheckList({ items }: { items: { b: string; t: string }[] }) {
  return (
    <ul className="mt-7 space-y-4">
      {items.map((it) => (
        <li key={it.b} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-md bg-lime-100 text-[#06222a]">
            <Icon name="check" className="h-3.5 w-3.5" />
          </span>
          <p className="text-[15px] leading-7 text-fg-300">
            <span className="font-semibold text-fg-100">{it.b}</span> — {it.t}
          </p>
        </li>
      ))}
    </ul>
  );
}

function WindowFrame({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`glass overflow-hidden rounded-2xl shadow-2xl ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.02] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs font-medium text-fg-300">{title}</span>
      </div>
      {children}
    </div>
  );
}

/* ------------------------- Node graph (Showcase A) ------------------------- */

function NodeCard({
  icon,
  label,
  sub,
  step = 0,
  className = "",
}: {
  icon: string;
  label: string;
  sub: string;
  color?: string;
  step?: number;
  className?: string;
}) {
  const delay = `${step * 1.4}s`;
  return (
    <div
      className={`absolute flex w-[150px] items-center gap-2.5 rounded-xl border px-3 py-2.5 backdrop-blur-sm ${className}`}
      style={{
        animation: `mk-seq-node 5.6s ease-in-out ${delay} infinite`,
      }}
    >
      <span
        className="flex h-7 w-7 flex-none items-center justify-center rounded-lg"
        style={{
          animation: `mk-seq-icon 5.6s ease-in-out ${delay} infinite`,
        }}
      >
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <div className="truncate text-xs font-semibold text-fg-100">
          {label}
        </div>
        <div className="truncate text-[10px] text-fg-400">{sub}</div>
      </div>
    </div>
  );
}

function NodeGraph() {
  return (
    <WindowFrame title="Auto DKMH · Quy trình đăng ký" className="relative">
      <div className="relative h-[380px] w-full">
        {/* curved animated connectors */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <path
            d="M20,17 C36,23 40,38 53,45"
            fill="none"
            stroke="rgba(34,211,238,0.55)"
            strokeWidth="0.5"
            strokeDasharray="0.4 1.6"
            strokeLinecap="round"
            className="animate-dash"
          />
          <path
            d="M50,53 C42,64 30,70 23,77"
            fill="none"
            stroke="rgba(34,211,238,0.4)"
            strokeWidth="0.5"
            strokeDasharray="0.4 1.6"
            strokeLinecap="round"
            className="animate-dash"
          />
          <path
            d="M57,53 C60,62 60,71 60,77"
            fill="none"
            stroke="rgba(34,211,238,0.4)"
            strokeWidth="0.5"
            strokeDasharray="0.4 1.6"
            strokeLinecap="round"
            className="animate-dash"
          />
        </svg>

        <NodeCard
          icon="login"
          label="Đăng nhập"
          sub="Tự điền tài khoản"
          color="#22d3ee"
          step={0}
          className="left-[5%] top-[8%]"
        />
        <NodeCard
          icon="bolt"
          label="Đăng ký môn"
          sub="Tốc độ mili giây"
          color="#22d3ee"
          step={1}
          className="left-[40%] top-[40%]"
        />
        <NodeCard
          icon="book"
          label="Toán rời rạc"
          sub="Đã đăng ký ✓"
          color="#22d3ee"
          step={2}
          className="left-[8%] top-[74%]"
        />
        <NodeCard
          icon="book"
          label="Cơ sở dữ liệu"
          sub="Đã đăng ký ✓"
          color="#22d3ee"
          step={3}
          className="left-[46%] top-[74%]"
        />
      </div>
    </WindowFrame>
  );
}

/* --------------------------- Hero workflow demo --------------------------- */

const COURSES = [
  "Lập trình hướng đối tượng",
  "Giải tích 2",
  "Tiếng Anh chuyên ngành",
  "Cơ sở dữ liệu",
];

function QueueWindow() {
  return (
    <WindowFrame title="Danh sách môn">
      <ul className="space-y-2 p-4">
        {COURSES.map((c, i) => {
          const running = i === COURSES.length - 1;
          return (
            <li
              key={c}
              className="flex items-center gap-2.5 rounded-lg border border-white/8 bg-white/[0.02] px-3 py-2.5"
              style={{
                animation: "mk-row-in 4s ease-in-out infinite",
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <span
                className={`flex h-5 w-5 flex-none items-center justify-center rounded-full ${
                  running ? "text-lime-100" : "bg-lime-100 text-[#06222a]"
                }`}
              >
                {running ? (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 animate-spin"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  >
                    <path d="M21 12a9 9 0 11-6.2-8.5" />
                  </svg>
                ) : (
                  <Icon name="check" className="h-3 w-3" />
                )}
              </span>
              <span className="truncate text-xs text-fg-200">{c}</span>
            </li>
          );
        })}
      </ul>
    </WindowFrame>
  );
}

function ResultWindow() {
  return (
    <WindowFrame title="Kết quả · 4/4">
      <div className="p-4">
        <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-white/8">
          <div className="h-full animate-progress rounded-full bg-lime-100" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {COURSES.map((c, i) => (
            <div
              key={c}
              className="rounded-lg border border-lime-100/20 bg-lime-100/[0.05] p-2.5"
              style={{
                animation: "mk-check-in 4s ease-in-out infinite",
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <div className="flex items-center gap-1.5">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-lime-100 text-[#06222a]">
                  <Icon name="check" className="h-2.5 w-2.5" />
                </span>
                <span className="text-[10px] font-medium text-lime-100">
                  Đã đăng ký
                </span>
              </div>
              <p className="mt-1.5 line-clamp-2 text-[11px] leading-snug text-fg-200">
                {c}
              </p>
            </div>
          ))}
        </div>
      </div>
    </WindowFrame>
  );
}

/* --------------------------- Hero timetable demo -------------------------- */

function TimetableDemo() {
  const PERIODS = 3;
  // index courses by day+row for quick lookup
  const cellOf = (day: number, row: number) =>
    SCHEDULE.find((s) => s.day === day && s.row === row);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-lime-100/10 blur-3xl" />

      <WindowFrame title="Thời khóa biểu · Học kỳ 2">
        <div className="p-4 sm:p-5">
          {/* day header */}
          <div className="grid grid-cols-[2.2rem_repeat(5,1fr)] gap-1.5 sm:gap-2">
            <div />
            {DAYS.map((d) => (
              <div
                key={d}
                className="rounded-md bg-white/[0.03] py-1.5 text-center text-[11px] font-semibold text-fg-300"
              >
                {d}
              </div>
            ))}

            {/* period rows */}
            {Array.from({ length: PERIODS }).map((_, row) => (
              <ProgressRow key={row} row={row} cellOf={cellOf} />
            ))}
          </div>

          {/* status bar */}
          <div className="mt-4 flex items-center justify-between rounded-xl border border-lime-100/20 bg-lime-100/[0.05] px-3.5 py-2.5">
            <span className="flex items-center gap-2 text-xs font-medium text-fg-200">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 animate-spin text-lime-100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              >
                <path d="M21 12a9 9 0 11-6.2-8.5" />
              </svg>
              Auto ĐKMH đang xếp môn vào lịch…
            </span>
            <span className="rounded-full bg-lime-100/15 px-2.5 py-0.5 text-[11px] font-bold text-lime-100">
              5/5 môn ✓
            </span>
          </div>
        </div>
      </WindowFrame>

      {/* floating badges — sit clear above/below the card so they never cover it */}
      <div className="absolute -top-7 left-6 hidden animate-float-a rounded-xl glass px-3 py-2 text-xs font-medium text-fg-100 shadow-xl lg:block">
        ⚡ CAPTCHA đã giải
      </div>
      <div className="absolute -bottom-7 right-6 hidden animate-float-b rounded-xl glass px-3 py-2 text-xs font-medium text-fg-100 shadow-xl lg:block">
        🔒 Giữ phiên đăng nhập
      </div>
    </div>
  );
}

function ProgressRow({
  row,
  cellOf,
}: {
  row: number;
  cellOf: (day: number, row: number) => (typeof SCHEDULE)[number] | undefined;
}) {
  return (
    <>
      <div className="flex items-center justify-center text-[10px] font-medium text-fg-500">
        Tiết {row + 1}
      </div>
      {DAYS.map((_, day) => {
        const c = cellOf(day, row);
        if (!c) {
          return (
            <div
              key={day}
              className="h-12 rounded-md border border-white/5 bg-white/[0.015]"
            />
          );
        }
        const order = SCHEDULE.indexOf(c);
        return (
          <div
            key={day}
            className="h-12 overflow-hidden rounded-md border px-1.5 py-1"
            style={{
              background: `${c.color}22`,
              borderColor: `${c.color}55`,
              animation: "mk-tile-in 5s ease-in-out infinite",
              animationDelay: `${order * 0.6}s`,
            }}
          >
            <div
              className="truncate text-[10px] font-semibold leading-tight"
              style={{ color: c.color }}
            >
              {c.name}
            </div>
            <div className="mt-0.5 truncate text-[9px] text-fg-400">
              {c.room}
            </div>
          </div>
        );
      })}
    </>
  );
}

/* ------------------------------- AI chat demo ----------------------------- */

const AI_CHECKS = [
  {
    b: "Tra cứu tức thì",
    t: "lịch học, điểm số, lịch thi và giờ mở cổng — chỉ bằng một câu hỏi",
  },
  {
    b: "Gợi ý lớp theo khung giờ",
    t: "tìm lớp còn slot khớp đúng thời gian rảnh của bạn",
  },
  {
    b: "Hỗ trợ học tập",
    t: "phân tích tiến độ tín chỉ, GPA và đề xuất môn nên đăng ký kỳ tới",
  },
];

/* ------------------------------ Structured data --------------------------- */

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Auto ĐKMH All-in-One",
        applicationCategory: "BrowserApplication",
        operatingSystem: "Chrome, Windows, macOS, Android, iOS",
        description:
          "Tiện ích Chrome giúp sinh viên đăng ký môn học tự động: giải CAPTCHA, tự đăng nhập, giữ phiên, quản lý nhiều tài khoản và trợ lý AI hỗ trợ học tập.",
        url: SITE_URL,
        downloadUrl: STORE_URL,
        inLanguage: "vi",
        offers: { "@type": "Offer", price: "0", priceCurrency: "VND" },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          ratingCount: "6",
          bestRating: "5",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ---------------------------------- Page ---------------------------------- */

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-x-clip">
      <JsonLd />
      {/* global background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* ------------------------------- Header ------------------------------ */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-bg-100/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5">
          <Link href="/" className="flex items-center gap-2.5">
            <BrandLogo className="h-9 w-9" />
            <span className="text-base font-bold tracking-tight text-fg-100">
              Auto ĐKMH
            </span>
          </Link>
          <div className="hidden items-center gap-8 text-sm text-fg-300 md:flex">
            <a href="#features" className="transition hover:text-fg-100">
              Tính năng
            </a>
            <a href="#process" className="transition hover:text-fg-100">
              Quy trình
            </a>
            <a href="#ai" className="transition hover:text-fg-100">
              Trợ lý AI
            </a>
            <a href="#schools" className="transition hover:text-fg-100">
              Trường hỗ trợ
            </a>
            <Link href="/blog" className="transition hover:text-fg-100">
              Blog
            </Link>
            <a href="#faq" className="transition hover:text-fg-100">
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm font-medium text-fg-300 transition hover:text-fg-100 sm:block"
            >
              Hướng dẫn
            </a>
            <StoreButton size="md">Bắt đầu</StoreButton>
          </div>
        </nav>
      </header>

      {/* -------------------------------- Hero ------------------------------- */}
      <section className="relative mx-auto w-full max-w-7xl px-5 pt-16 pb-20 sm:pt-20">
        {/* hero glow */}
        <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[34rem] w-[44rem] rounded-full bg-lime-100/[0.10] blur-[150px]" />
        <div className="pointer-events-none absolute left-0 bottom-0 -z-10 h-[24rem] w-[28rem] rounded-full bg-[#29e0e0]/[0.07] blur-[140px]" />

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          {/* copy */}
          <div className="animate-fade-in text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-lime-100/30 bg-lime-100/[0.06] px-4 py-1.5 text-sm font-medium text-lime-100">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-100 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-100" />
                </span>
                Tiện ích Chrome cho sinh viên Việt Nam
              </span>
            </div>

            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.2] tracking-tight text-fg-100 sm:text-6xl">
              Lấp đầy thời khóa biểu <span className="lime-text">tự động</span>,
              không lo nghẽn mạng
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-8 text-fg-300 lg:mx-0">
              Auto ĐKMH biến trình duyệt thành trợ thủ đăng ký môn học: tự giải
              CAPTCHA, tự đăng nhập, canh đúng giờ mở cổng và đăng ký hàng loạt
              chỉ trong tích tắc.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row lg:justify-start">
              <StoreButton size="lg" />
              <a
                href="#process"
                className="inline-flex h-13 items-center gap-2 rounded-full glass px-6 text-base font-semibold text-fg-100 transition hover:bg-white/10"
              >
                Xem cách hoạt động
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-fg-400 lg:justify-start">
              <span className="flex items-center gap-1.5">
                <span className="lime-text font-bold">★★★★★</span> 5.0 trên
                Chrome Store
              </span>
              <span>·</span>
              <span>1.000+ sinh viên · Miễn phí</span>
            </div>
          </div>

          {/* timetable demo */}
          <div className="animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <TimetableDemo />
          </div>
        </div>
      </section>

      {/* ------------------------------ Features ----------------------------- */}
      <section id="features" className="mx-auto w-full max-w-7xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Tính năng</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-fg-100 sm:text-5xl">
            Mọi thứ bạn cần để{" "}
            <span className="lime-text">đăng ký thành công</span>
          </h2>
          <p className="mt-4 text-lg text-fg-300">
            Một tiện ích gói trọn mọi công cụ — không cần cài thêm gì khác.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-white/8 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/15"
              style={{
                background: `radial-gradient(120% 120% at 0% 0%, ${f.color}1f 0%, rgba(255,255,255,0.015) 45%)`,
              }}
            >
              <span className="shimmer absolute inset-0" />
              <span
                className="absolute right-6 top-6 font-mono text-sm"
                style={{ color: `${f.color}99` }}
              >
                0{i + 1}
              </span>
              <div
                className="relative flex h-12 w-12 items-center justify-center rounded-xl ring-1"
                style={{
                  background: `${f.color}26`,
                  color: f.color,
                  borderColor: `${f.color}33`,
                }}
              >
                <Icon name={f.icon} className="h-6 w-6" />
              </div>
              <h3 className="relative mt-5 text-lg font-semibold text-fg-100">
                {f.title}
              </h3>
              <p className="relative mt-2 text-[15px] leading-7 text-fg-300">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------- Showcase A: process / nodes ------------------- */}
      <section id="process" className="mx-auto w-full max-w-7xl px-5 py-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <NodeGraph />
          <div>
            <Eyebrow>Quy trình tự động</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-fg-100 sm:text-5xl">
              Đăng nhập, giải CAPTCHA và đăng ký
              <br />— <span className="lime-text">hoàn toàn tự động.</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-8 text-fg-300">
              Bạn chỉ cần bật chế độ tự động. Auto ĐKMH lo từ đăng nhập, vượt
              CAPTCHA, canh giờ máy chủ cho tới khi tất cả môn được đăng ký
              thành công.
            </p>
            <CheckList items={PROCESS_CHECKS} />
            <div className="mt-9">
              <StoreButton size="lg">Cài đặt miễn phí</StoreButton>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------- Showcase B: batch register -------------------- */}
      <section className="mx-auto w-full max-w-7xl px-5 py-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <Eyebrow>Đăng ký hàng loạt</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-fg-100 sm:text-5xl">
              Từ danh sách môn đến{" "}
              <span className="lime-text">đăng ký hoàn tất</span> — tự động.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-8 text-fg-300">
              Nhập sẵn các môn cần học, bấm chạy. Auto ĐKMH xử lý lần lượt, tự
              thử lại khi nghẽn và báo ngay môn nào đã đăng ký thành công.
            </p>
            <CheckList items={BATCH_CHECKS} />
          </div>
          <div className="order-1 grid gap-4 sm:grid-cols-2 lg:order-2">
            <QueueWindow />
            <ResultWindow />
          </div>
        </div>
      </section>

      {/* ----------------------- Showcase C: AI assistant -------------------- */}
      <section id="ai" className="mx-auto w-full max-w-7xl px-5 py-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="order-1">
            <AIChatDemo />
          </div>
          <div className="order-2">
            <Eyebrow>Trợ lý AI</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-fg-100 sm:text-5xl">
              Hỏi gì cũng có — AI{" "}
              <span className="lime-text">tra cứu & hỗ trợ học tập</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-8 text-fg-300">
              Không cần lục từng trang web của trường. Hỏi trợ lý AI bằng tiếng
              Việt tự nhiên — từ lịch học, điểm số, lịch thi cho tới gợi ý lớp
              còn slot và phân tích quá trình học tập của bạn.
            </p>
            <CheckList items={AI_CHECKS} />
            <div className="mt-9">
              <StoreButton size="lg">Dùng thử trợ lý AI</StoreButton>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------- Stats ------------------------------ */}
      <section className="mx-auto w-full max-w-7xl px-5 py-12">
        <div className="grid grid-cols-2 gap-6 rounded-3xl border border-white/8 bg-white/[0.015] px-6 py-12 text-center sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-extrabold text-fg-100 sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-fg-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------- Universities -------------------------- */}
      <section id="schools" className="mx-auto w-full max-w-7xl px-5 py-12">
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-fg-400">
          Hỗ trợ nhiều nền tảng đăng ký phổ biến tại Việt Nam
        </p>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-10">
            {[...UNIVERSITIES, ...UNIVERSITIES].map((u, i) => (
              <span key={i} className="flex flex-none items-center gap-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/logos/${u.toLowerCase()}.png`}
                  alt={`Logo ${u}`}
                  loading="lazy"
                  className="h-7 w-7 flex-none object-contain"
                />
                <span className="whitespace-nowrap text-base font-semibold text-fg-300">
                  {u}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------- FAQ -------------------------------- */}
      <section id="faq" className="mx-auto w-full max-w-3xl px-5 py-20">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-fg-100 sm:text-5xl">
            Câu hỏi thường gặp
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-white/8 bg-white/[0.015] p-5 transition hover:border-white/15 [&_summary]:list-none"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-base font-semibold text-fg-100">
                {f.q}
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-white/12 text-fg-400 transition group-open:rotate-45 group-open:border-lime-100/40 group-open:text-lime-100">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[15px] leading-7 text-fg-300">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ------------------------------- Blog -------------------------------- */}
      <section className="mx-auto w-full max-w-7xl px-5 py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <Eyebrow>Blog</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight display-grad sm:text-4xl">
              Hướng dẫn đăng ký theo từng trường
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden flex-none text-sm font-medium text-lime-100 transition hover:brightness-110 sm:block"
          >
            Xem tất cả →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[...POSTS]
            .sort((a, b) => b.date.localeCompare(a.date))
            .slice(0, 3)
            .map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col rounded-2xl border border-white/8 bg-white/[0.015] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-100/30 hover:bg-white/[0.03]"
              >
                <div className="flex items-center gap-3 text-xs text-fg-400">
                  <span className="rounded-full border border-lime-100/25 bg-lime-100/[0.06] px-2.5 py-0.5 font-semibold text-lime-100">
                    {p.school}
                  </span>
                  <span>{p.readingTime}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-fg-100 transition group-hover:text-lime-100">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-[15px] leading-7 text-fg-300">
                  {p.description}
                </p>
                <span className="mt-4 text-sm font-medium text-lime-100">
                  Đọc tiếp →
                </span>
              </Link>
            ))}
        </div>
      </section>

      {/* ------------------------------- CTA --------------------------------- */}
      <section className="relative mx-auto w-full max-w-7xl px-5 py-24 text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-100/[0.10] blur-[130px]" />
        <h2 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-fg-100 sm:text-6xl">
          Đừng canh giờ đăng ký nữa.
          <br />
          <span className="lime-text">Hãy để Auto ĐKMH lo.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-fg-300">
          Cài tiện ích Chrome miễn phí. Đăng ký nhẹ nhàng như chưa từng có.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <StoreButton size="lg" />
          <a
            href="#faq"
            className="inline-flex h-13 items-center gap-2 rounded-full glass px-6 text-base font-semibold text-fg-100 transition hover:bg-white/10"
          >
            Tìm hiểu thêm
          </a>
        </div>
      </section>

      {/* ------------------------------ Footer ------------------------------- */}
      <footer className="border-t border-white/5">
        <div className="mx-auto w-full max-w-7xl px-5 py-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5">
                <BrandLogo className="h-9 w-9" />
                <span className="text-base font-bold text-fg-100">
                  Auto ĐKMH All-in-One
                </span>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-6 text-fg-400">
                Tiện ích Chrome giúp sinh viên đăng ký môn học tự động: giải
                CAPTCHA, tự đăng nhập, giữ phiên và trợ lý AI học vụ.
              </p>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2.5 rounded-xl border border-[#5865F2]/40 bg-[#5865F2]/10 px-4 py-2.5 text-sm font-semibold text-fg-100 transition hover:bg-[#5865F2]/20"
              >
                <DiscordIcon className="h-5 w-5 text-[#7d8aff]" />
                Tham gia cộng đồng Discord
              </a>
              <p className="mt-2 max-w-xs text-xs text-fg-500">
                Hỏi đáp, cập nhật tính năng mới và được hỗ trợ nhanh nhất.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-fg-300">
                Sản phẩm
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-fg-400">
                <li>
                  <a href="#features" className="transition hover:text-fg-100">
                    Tính năng
                  </a>
                </li>
                <li>
                  <a href="#process" className="transition hover:text-fg-100">
                    Quy trình
                  </a>
                </li>
                <li>
                  <a href="#schools" className="transition hover:text-fg-100">
                    Trường hỗ trợ
                  </a>
                </li>
                <li>
                  <a href="#faq" className="transition hover:text-fg-100">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-fg-300">
                Hỗ trợ
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-fg-400">
                <li>
                  <a
                    href={DISCORD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-fg-100"
                  >
                    Cộng đồng Discord ↗
                  </a>
                </li>
                <li>
                  <a
                    href={STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-fg-100"
                  >
                    Chrome Web Store ↗
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:langlaphieuluu9x@gmail.com"
                    className="transition hover:text-fg-100"
                  >
                    Email hỗ trợ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-sm text-fg-500 sm:flex-row">
            <p>© 2026 Auto ĐKMH All-in-One. Phát triển bởi langlaphieuluu9x.</p>
            <p className="flex items-center gap-1.5">
              Dành cho{" "}
              <span className="text-lime-100">● sinh viên Việt Nam</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
