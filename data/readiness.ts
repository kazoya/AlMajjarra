import type { ReadinessRow } from "@/types";

export const readinessRows: ReadinessRow[] = [
  {
    source: "كتالوج Galaxy العلني",
    exists: "yes",
    digital: "partial",
    structured: "partial",
    historicalDepth: "صفحات متفاوتة الاكتمال",
    api: "no",
    aiReadiness: "صالح كتالوج — النشرات الرقيقة ضعيفة",
  },
  {
    source: "سجلات الخلط والإفراج",
    exists: "unknown",
    digital: "unknown",
    structured: "unknown",
    historicalDepth: "غير معلن",
    api: "no",
    aiReadiness: "يحتاج اكتشافاً",
  },
  {
    source: "واتساب / طلبات المبيعات",
    exists: "yes",
    digital: "partial",
    structured: "no",
    historicalDepth: "قناة معلنة",
    api: "no",
    aiReadiness: "التقاط الرسائل ممكن بعد الإذن",
  },
  {
    source: "حساسات ري (حرارة/رطوبة/ضوء/تربة)",
    exists: "unknown",
    digital: "no",
    structured: "no",
    historicalDepth: "غير معلن على الموقع",
    api: "no",
    aiReadiness: "مسار تجريب مقترح — يحتاج أجهزة",
  },
  {
    source: "برامج تغذية معتمدة لكل محصول",
    exists: "unknown",
    digital: "unknown",
    structured: "unknown",
    historicalDepth: "جزئياً من صفحات الأصناف",
    api: "no",
    aiReadiness: "أرشفة PDF أولاً",
  },
];
