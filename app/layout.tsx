import type { Metadata } from "next";
import { Geist_Mono, Noto_Naskh_Arabic, Noto_Sans_Arabic } from "next/font/google";
import { AppShell } from "@/components/layout/app-shell";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getSiteUrl, siteConfig } from "@/lib/config";
import "./globals.css";

const naskh = Noto_Naskh_Arabic({
  variable: "--font-naskh",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});
const arabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
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
      className={`${naskh.variable} ${arabic.variable} ${mono.variable} h-full antialiased`}
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
