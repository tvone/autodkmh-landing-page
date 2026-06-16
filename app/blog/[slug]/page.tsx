import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, getPost, type Block } from "../posts";
import { SiteHeader, SiteFooter, InstallButton } from "../../ui";
import { SITE_URL, SITE_NAME } from "../../seo-config";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Auto ĐKMH — Đăng ký môn học tự động cho sinh viên",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og.png"],
    },
  };
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

function RenderBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-10 text-2xl font-bold tracking-tight text-fg-100">
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p className="mt-4 text-[17px] leading-8 text-fg-200">{block.text}</p>
      );
    case "ul":
      return (
        <ul className="mt-4 space-y-2.5">
          {block.items.map((it, i) => (
            <li key={i} className="flex items-start gap-3 text-[17px] leading-8 text-fg-200">
              <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-lime-100" />
              {it}
            </li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className="mt-4 space-y-3">
          {block.items.map((it, i) => (
            <li key={i} className="flex items-start gap-3 text-[17px] leading-8 text-fg-200">
              <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full border border-lime-100/30 bg-lime-100/10 text-xs font-bold text-lime-100">
                {i + 1}
              </span>
              {it}
            </li>
          ))}
        </ol>
      );
    case "cta":
      return (
        <div className="my-8 flex flex-col items-center gap-4 rounded-2xl border border-lime-100/20 bg-lime-100/[0.05] px-6 py-8 text-center">
          <p className="text-lg font-semibold text-fg-100">
            Cài Auto ĐKMH — đăng ký môn học tự động, miễn phí
          </p>
          <InstallButton size="lg" />
        </div>
      );
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "vi",
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <div className="relative flex flex-1 flex-col">
      <SiteHeader />

      <article className="mx-auto w-full max-w-3xl flex-1 px-5 py-14">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Link
          href="/blog"
          className="text-sm font-medium text-fg-400 transition hover:text-fg-100"
        >
          ← Tất cả bài viết
        </Link>

        <div className="mt-6 flex items-center gap-3 text-xs text-fg-400">
          <span className="rounded-full border border-lime-100/25 bg-lime-100/[0.06] px-2.5 py-0.5 font-semibold text-lime-100">
            {post.school}
          </span>
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-fg-100 sm:text-4xl">
          {post.title}
        </h1>

        <div className="mt-2">
          {post.blocks.map((block, i) => (
            <RenderBlock key={i} block={block} />
          ))}
        </div>

        {/* related */}
        <div className="mt-16 border-t border-white/8 pt-10">
          <h2 className="text-xl font-bold text-fg-100">Bài viết liên quan</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group rounded-xl border border-white/8 bg-white/[0.015] p-4 transition hover:border-lime-100/30 hover:bg-white/[0.03]"
              >
                <span className="text-[11px] font-semibold text-lime-100">
                  {p.school}
                </span>
                <p className="mt-1.5 text-sm font-medium leading-snug text-fg-100 transition group-hover:text-lime-100">
                  {p.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
