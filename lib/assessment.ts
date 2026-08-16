import { z } from "zod";

export const STORAGE_KEY = "majjarra-discovery-assessment";
const text = z.string();
const list = z.array(z.string());

export const assessmentSchema = z.object({
  lines: text,
  formulasDigital: text,
  qaRelease: text,
  orderChannels: list,
  priceOwner: text,
  agronomyVisits: text,
  fertigationToday: text,
  irrigationMethod: text,
  sensorsNow: list,
  valveControl: text,
  waterSaverUse: text,
  websiteOwner: text,
  systems: list,
  notes: text,
});

export type AssessmentValues = z.infer<typeof assessmentSchema>;

export const defaultAssessment: AssessmentValues = {
  lines: "",
  formulasDigital: "",
  qaRelease: "",
  orderChannels: [],
  priceOwner: "",
  agronomyVisits: "",
  fertigationToday: "",
  irrigationMethod: "",
  sensorsNow: [],
  valveControl: "",
  waterSaverUse: "",
  websiteOwner: "",
  systems: [],
  notes: "",
};

export const channelOptions = ["واتساب", "هاتف", "بريد", "مندوب", "موقع", "موزّع"];
export const sensorOptions = [
  "لا شيء",
  "رطوبة تربة",
  "حرارة هواء",
  "رطوبة هواء",
  "ضوء / إشعاع",
  "EC ماء",
  "صمامات كهربائية",
];
export const systemOptions = ["إكسل", "محاسبة", "واتساب فقط", "ERP", "غير معروف"];

export function loadAssessment(): AssessmentValues {
  if (typeof window === "undefined") return defaultAssessment;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultAssessment;
    return { ...defaultAssessment, ...JSON.parse(raw) };
  } catch {
    return defaultAssessment;
  }
}

export function saveAssessment(values: AssessmentValues) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
}

export function summarizeAssessment(values: AssessmentValues) {
  const filled = Object.values(values).filter((value) =>
    Array.isArray(value) ? value.length > 0 : Boolean(value && String(value).trim()),
  ).length;
  const total = Object.keys(defaultAssessment).length;
  return { filled, total, pct: Math.round((filled / total) * 100) };
}
