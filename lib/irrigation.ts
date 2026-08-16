import type { IrrigationProposal, SensorReading } from "@/types";

/**
 * Deterministic demo rules — not a calibrated ET model and not connected to real valves.
 * A human must approve before any irrigation runs.
 */
export function proposeIrrigation(reading: SensorReading): IrrigationProposal {
  const reasons: string[] = [];
  let minutes = 0;
  let action: IrrigationProposal["action"] = "hold";

  if (reading.soilMoisturePct >= 55) {
    reasons.push(`رطوبة التربة ${reading.soilMoisturePct}٪ أعلى من حد الإيقاف التجريبي (55٪).`);
    return {
      zoneId: reading.zoneId,
      action: "hold",
      minutes: 0,
      reasons,
      requiresApproval: true,
    };
  }

  if (reading.soilMoisturePct < 28) {
    action = "irrigate";
    minutes += 18;
    reasons.push(`رطوبة التربة ${reading.soilMoisturePct}٪ تحت حد الري التجريبي (28٪).`);
  } else if (reading.soilMoisturePct < 38) {
    action = "irrigate";
    minutes += 10;
    reasons.push(`رطوبة التربة ${reading.soilMoisturePct}٪ في النطاق المتوسط — ري قصير تجريبي.`);
  }

  if (reading.tempC >= 34 && reading.humidityPct <= 35) {
    minutes += 6;
    action = "irrigate";
    reasons.push(`حرارة ${reading.tempC}°م ورطوبة هواء ${reading.humidityPct}٪ — إجهاد تبخّر مفترض.`);
  }

  if (reading.lightLux >= 70000 && reading.soilMoisturePct < 45) {
    minutes += 4;
    action = "irrigate";
    reasons.push(`إضاءة ${formatLux(reading.lightLux)} مع تربة غير مشبعة — احتياج أعلى مفترض.`);
  }

  if (action === "irrigate" && minutes > 30) {
    action = "reduce";
    reasons.push("المدة حُدّت بـ 30 دقيقة في السيناريو حتى لا يُغمر الحقل.");
    minutes = 30;
  }

  if (action === "hold") {
    reasons.push("لا شرط ري متحققاً في القواعد التجريبية الحالية.");
  }

  const fertigationHint =
    action === "irrigate" || action === "reduce"
      ? "إن وُجدت وصفة معتمدة لهذه المرحلة يمكن اقتراح حقن NPK مع الريات — لا تُحقن صيغة دون مهندس."
      : undefined;

  return {
    zoneId: reading.zoneId,
    action,
    minutes,
    reasons,
    fertigationHint,
    requiresApproval: true,
  };
}

export function formatLux(value: number) {
  if (value >= 1000) return `${Math.round(value / 1000)} ألف لكس`;
  return `${value} لكس`;
}

export const actionLabel: Record<IrrigationProposal["action"], string> = {
  irrigate: "اقتراح ري",
  hold: "إيقاف / لا ري",
  reduce: "ري محدود",
};
