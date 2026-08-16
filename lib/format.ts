export function formatNumber(value: number, digits = 0) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);
}

export const departmentLabel: Record<string, string> = {
  procurement: "الخامات",
  production: "الإنتاج",
  quality: "الجودة",
  packing: "التعبئة",
  sales: "المبيعات",
  agronomy: "الإرشاد",
  irrigation: "الري",
  field: "الحقل",
  management: "الإدارة",
};
