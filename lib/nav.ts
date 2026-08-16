export type NavItem = { href: string; label: string };
export type NavGroup = { id: string; label: string; items: NavItem[] };

export const navGroups: NavGroup[] = [
  {
    id: "concept",
    label: "التصور",
    items: [
      { href: "/", label: "الرئيسية" },
      { href: "/overview", label: "التصور التنفيذي" },
      { href: "/products", label: "كتالوج Galaxy" },
      { href: "/workflow", label: "رحلة المصنع والحقل" },
      { href: "/bottlenecks", label: "الاختناقات المحتملة" },
    ],
  },
  {
    id: "opportunities",
    label: "الفرص",
    items: [
      { href: "/automation", label: "فرص الأتمتة" },
      { href: "/ai", label: "فرص الذكاء الاصطناعي" },
      { href: "/irrigation", label: "أتمتة الري والحساسات" },
      { href: "/fertigation", label: "الري التسميدي" },
    ],
  },
  {
    id: "operations",
    label: "العمليات",
    items: [
      { href: "/production", label: "الإنتاج" },
      { href: "/quality", label: "الجودة والصيغ" },
      { href: "/field", label: "الإرشاد الحقلي" },
      { href: "/crm", label: "العملاء والطلبات" },
      { href: "/knowledge", label: "معرفة المصنع" },
    ],
  },
  {
    id: "management",
    label: "الإدارة",
    items: [
      { href: "/dashboard", label: "لوحة القيادة" },
      { href: "/roi", label: "العائد على الاستثمار" },
      { href: "/architecture", label: "البنية المقترحة" },
      { href: "/pilot", label: "خطة التنفيذ" },
    ],
  },
  {
    id: "discovery",
    label: "الاكتشاف",
    items: [
      { href: "/assessment", label: "التقييم" },
      { href: "/assessment/results", label: "نتائج التقييم" },
      { href: "/readiness", label: "جاهزية البيانات" },
      { href: "/contact", label: "تواصل معنا" },
    ],
  },
];

export function findNavLabel(pathname: string): string {
  if (pathname === "/") return "الرئيسية";
  for (const group of navGroups) {
    const match = group.items.find((item) => item.href === pathname);
    if (match) return match.label;
  }
  return "المنصة";
}
