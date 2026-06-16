import type { Metadata } from "next";
import Link from "next/link";
import { POSTS } from "./posts";
import { SiteHeader, SiteFooter, InstallButton } from "../ui";

export const metadata: Metadata = {
  title: "Blog — Hướng dẫn đăng ký môn học tự động theo từng trường",
  description:
    "Hướng dẫn đăng ký môn học tự động, mẹo vượt CAPTCHA và canh giờ mở cổng cho sinh viên VNUA, PTIT, HCMIU, HANU, FTU, HCMUAF, SGU, STU, HUMG, EIU, DHV và nhiều trường khác.",

  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog Auto ĐKMH — Hướng dẫn đăng ký môn học tự động",
    description:
      "Mẹo và hướng dẫn đăng ký tín chỉ không lo nghẽn mạng cho sinh viên các trường.",
    type: "website",
  },
};

export default function BlogIndex() {
  const posts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="relative flex flex-1 flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-lime-100/30 bg-lime-100/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-lime-100">
            Blog
          </span>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-fg-100 sm:text-5xl">
            Hướng dẫn đăng ký môn học tự động
          </h1>
          <p className="mt-4 text-lg leading-8 text-fg-300">
            Mẹo vượt CAPTCHA, canh giờ mở cổng và đăng ký tín chỉ không lo nghẽn
            mạng — cho sinh viên từng trường.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {posts.map((p) => (
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
              <h2 className="mt-4 text-lg font-semibold leading-snug text-fg-100 transition group-hover:text-lime-100">
                {p.title}
              </h2>
              <p className="mt-2 flex-1 text-[15px] leading-7 text-fg-300">
                {p.description}
              </p>
              <span className="mt-4 text-sm font-medium text-lime-100">
                Đọc tiếp →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-lime-100/20 bg-lime-100/[0.04] px-6 py-12 text-center">
          <h2 className="text-2xl font-bold text-fg-100 sm:text-3xl">
            Sẵn sàng đăng ký nhẹ nhàng hơn?
          </h2>
          <p className="max-w-md text-fg-300">
            Cài Auto ĐKMH miễn phí và để công cụ lo phần còn lại.
          </p>
          <InstallButton size="lg" />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
