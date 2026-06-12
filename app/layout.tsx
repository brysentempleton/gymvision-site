import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gymvision-site.vercel.app"),
  title: "GymVision — The gym OS that thinks ahead",
  description: "AI-native gym management. Stripe at-cost. One-afternoon migration from any platform. Built for gyms that refuse to settle.",
  openGraph: {
    title: "GymVision — The gym OS that thinks ahead",
    description: "Replace your gym OS in one afternoon. Keep Stripe at-cost. Let AI handle the follow-ups.",
    siteName: "GymVision",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GymVision — The gym OS that thinks ahead",
    description: "AI-native gym management. Stripe at-cost. One-afternoon migration.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
