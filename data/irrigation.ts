import type { SensorReading } from "@/types";

/** Demo zones only — not Al-Majjarra customer fields. */
export const demoReadings: SensorReading[] = [
  {
    zoneId: "z1",
    zoneName: "بيت محمي أ (تجريبي)",
    crop: "بندورة",
    tempC: 36.2,
    humidityPct: 28,
    lightLux: 82000,
    soilMoisturePct: 22,
    at: "2026-08-16T10:15:00",
  },
  {
    zoneId: "z2",
    zoneName: "حقل مكشوف ب (تجريبي)",
    crop: "زيتون",
    tempC: 31.4,
    humidityPct: 41,
    lightLux: 64000,
    soilMoisturePct: 34,
    at: "2026-08-16T10:15:00",
  },
  {
    zoneId: "z3",
    zoneName: "خط نخيل ج (تجريبي)",
    crop: "نخيل",
    tempC: 38.0,
    humidityPct: 22,
    lightLux: 91000,
    soilMoisturePct: 58,
    at: "2026-08-16T10:15:00",
  },
];

export const monthlyDemo = [
  { month: "شباط", waterM3: 420, fertKg: 86, orders: 18 },
  { month: "آذار", waterM3: 510, fertKg: 102, orders: 22 },
  { month: "نيسان", waterM3: 640, fertKg: 128, orders: 27 },
  { month: "أيار", waterM3: 710, fertKg: 141, orders: 24 },
  { month: "حزيران", waterM3: 830, fertKg: 155, orders: 21 },
  { month: "تموز", waterM3: 910, fertKg: 149, orders: 19 },
];
