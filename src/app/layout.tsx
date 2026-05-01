import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const fontHeading = DM_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontBody = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mall of America — Interactive Sales Experience",
  description:
    "A cinematic, non-linear sales deck for Mall of America — retail, sponsorship, events, and leasing paths.",
  openGraph: {
    title: "Mall of America — Interactive Sales Experience",
    description:
      "Retail city-scale storytelling — assets, modules, and CTAs built for live screen-share and standalone links.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontHeading.variable} ${fontBody.variable} h-full antialiased`}>
      <body className="min-h-full">
        {children}
        {process.env.NODE_ENV === "production" ? <Analytics /> : null}
      </body>
    </html>
  );
}
