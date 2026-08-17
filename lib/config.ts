function readPublic(name: string): string {
  const value = process.env[name];
  return typeof value === "string" ? value.trim() : "";
}

function parseEmailList(raw: string): string[] {
  return raw
    .split(/[,;\s]+/)
    .map((e) => e.trim())
    .filter((e) => e.includes("@"));
}

export const siteConfig = {
  nameAr: "المجرة لحلول الأعمال الزراعية",
  nameEn: "Al-Majjarra for Agribusiness Solutions",
  brandLine: "GALAXY",
  productName: "تصور التحول الرقمي للزراعة والأسمدة",
  recipient: "إدارة الشركة",
  recipientRole: "المجرة لحلول الأعمال الزراعية",
  country: "الأردن",
  city: "السلط",
  cityDetailAr: "السلط — منطقة البحيرة الصناعية",
  since: 2008,
  websiteUrl: "https://almajjarra.com/",
  websiteArUrl: "https://almajjarra.com/ar/",
  defaultMapsUrl: "",
  defaultWhatsAppPhone: "962796883339",
  defaultWhatsAppPrefill: "السلام عليكم إدارة المجرة لحلول الأعمال الزراعية بخصوص ",
  defaultEmails: [
    "info@almajjarra.com",
    "sales@almajjarra.com",
    "Yasmeen@almajjarra.com",
  ] as const,
  phones: ["962796448244", "962796883339"] as const,
  hoursAr: "السبت–الخميس · 9 صباحاً–5 مساءً",
  addressAr: "السلط — منطقة البحيرة الصناعية، عمّان — الأردن",
  developer: {
    nameAr: "م. صهيب الصالح",
    phone: "962787523192",
    prefill: "مجرة",
  },
} as const;

export function getDiscoveryFormUrl(): string {
  return readPublic("NEXT_PUBLIC_DISCOVERY_FORM_URL");
}

export function getContactEmails(): string[] {
  const fromEnv = parseEmailList(readPublic("NEXT_PUBLIC_CONTACT_EMAILS"));
  if (fromEnv.length) return fromEnv;
  const single = readPublic("NEXT_PUBLIC_CONTACT_EMAIL");
  if (single) {
    const parts = parseEmailList(single);
    if (parts.length) return parts;
  }
  return [...siteConfig.defaultEmails];
}

export function getMapsUrl(): string {
  return readPublic("NEXT_PUBLIC_MAPS_URL") || siteConfig.defaultMapsUrl;
}

export function getCompanyWebsiteUrl(): string {
  return readPublic("NEXT_PUBLIC_COMPANY_WEBSITE") || siteConfig.websiteUrl;
}

export function getWhatsAppPhone(): string {
  const raw =
    readPublic("NEXT_PUBLIC_WHATSAPP_PHONE") || siteConfig.defaultWhatsAppPhone;
  return raw.replace(/[^\d]/g, "");
}

export function getWhatsAppPhoneDisplay(): string {
  const digits = getWhatsAppPhone();
  if (!digits) return "";
  return `+${digits}`;
}

export function getWhatsAppPrefill(): string {
  return (
    readPublic("NEXT_PUBLIC_WHATSAPP_PREFILL") || siteConfig.defaultWhatsAppPrefill
  );
}

export function getWhatsAppUrl(extra = ""): string {
  const phone = getWhatsAppPhone();
  if (!phone) return "";
  const text = `${getWhatsAppPrefill()}${extra}`.trim();
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function getWhatsAppQrValue(): string {
  const phone = getWhatsAppPhone();
  if (!phone) return "";
  return `https://wa.me/${phone}`;
}

export function getDeveloperWhatsAppPhone(): string {
  const raw =
    readPublic("NEXT_PUBLIC_DEVELOPER_WHATSAPP_PHONE") || siteConfig.developer.phone;
  return raw.replace(/[^\d]/g, "");
}

export function getDeveloperWhatsAppPhoneDisplay(): string {
  const digits = getDeveloperWhatsAppPhone();
  if (!digits) return "";
  return `+${digits}`;
}

export function getDeveloperWhatsAppPrefill(): string {
  return (
    readPublic("NEXT_PUBLIC_DEVELOPER_WHATSAPP_PREFILL") ||
    siteConfig.developer.prefill
  );
}

export function getDeveloperWhatsAppUrl(): string {
  const phone = getDeveloperWhatsAppPhone();
  if (!phone) return "";
  const text = getDeveloperWhatsAppPrefill().trim();
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function getSiteUrl(): string {
  const fromEnv = readPublic("NEXT_PUBLIC_SITE_URL");
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) return `https://${production.replace(/^https?:\/\//, "")}`;
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`;
  return "http://localhost:3000";
}

export function formatPhoneDisplay(digits: string): string {
  const d = digits.replace(/[^\d]/g, "");
  if (d.startsWith("962") && d.length === 12) {
    return `+${d.slice(0, 3)} ${d.slice(3, 4)} ${d.slice(4, 8)} ${d.slice(8)}`;
  }
  return `+${d}`;
}
