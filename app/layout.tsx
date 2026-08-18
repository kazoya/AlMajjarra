import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { AppShell } from "@/components/layout/app-shell";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getSiteUrl, siteConfig } from "@/lib/config";
import "./globals.css";

const arabic = localFont({
  src: [
    { path: "./fonts/DroidArabicKufi-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/DroidArabicKufi-Regular.ttf", weight: "500", style: "normal" },
    { path: "./fonts/DroidArabicKufi-Bold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/DroidArabicKufi-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-arabic",
  display: "swap",
});
const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${siteConfig.nameEn} | تصور زراعي رقمي`,
    template: `%s | ${siteConfig.nameAr}`,
  },
  description:
    "تصور أولي مستقل لمنظومة رقمية وأتمتة ري وأسمدة لشركة المجرة لحلول الأعمال الزراعية. ليس نظاماً رسمياً للشركة.",
  icons: { icon: [{ url: "/logo.png", type: "image/png" }] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${arabic.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full" suppressHydrationWarning>
        <TooltipProvider>
          <AppShell>{children}</AppShell>
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
