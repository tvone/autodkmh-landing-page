import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME } from "./seo-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TITLE =
  "Auto ĐKMH All-in-One — Đăng ký môn học tự động cho sinh viên";
const DESCRIPTION =
  "Tiện ích Chrome giúp sinh viên đăng ký môn học tự động: giải CAPTCHA, tự đăng nhập, giữ phiên, quản lý nhiều tài khoản và trợ lý AI tra cứu lịch học, điểm số. Hỗ trợ VNUA, PTIT, HCMIU, HANU, FTU, HCMUAF, SGU, STU và nhiều trường.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "auto đkmh",
    "auto dkmh",
    "đăng ký môn học tự động",
    "đăng ký tín chỉ tự động",
    "tool đăng ký môn học",
    "tiện ích đăng ký môn học",
    "auto dkmh all in one",
    "giải captcha đăng ký",
    "đăng ký môn học VNUA",
    "đăng ký môn học PTIT",
    "đăng ký môn học HCMIU",
    "đăng ký môn học HANU",
    "đăng ký môn học FTU",
    "đăng ký môn học HCMUAF",
    "đăng ký môn học SGU",
    "đăng ký môn học STU",
  ],
  authors: [{ name: "langlaphieuluu9x" }],
  creator: "langlaphieuluu9x",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: TITLE,
    description:
      "Đăng ký môn học nhanh, an toàn và tự động. Hơn 1.000+ sinh viên đang dùng.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Đăng ký môn học nhanh, an toàn và tự động. Hơn 1.000+ sinh viên đang dùng.",
  },
  category: "education",
  verification: {
    google: "-UOrMRTE4xqMgvmHIsWOyl52vf7QMlnNWnBtSJb1jnQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
