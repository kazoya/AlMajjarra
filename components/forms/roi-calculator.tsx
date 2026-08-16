"use client";

import { useMemo, useState } from "react";
import { HonestyNote } from "@/components/shared/demo-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatNumber } from "@/lib/format";

export function RoiCalculator() {
  const [water, setWater] = useState(18);
  const [rate, setRate] = useState(0.8);
  const [hours, setHours] = useState(6);
  const [wage, setWage] = useState(8);
  const [pilot, setPilot] = useState(6500);
  const yearly = useMemo(() => water * rate * 12 + hours * wage * 48, [water, rate, hours, wage]);
  return (
    <div className="space-y-4">
      <HonestyNote>آلة توضيحية فقط. ليست تكلفة ماء أو عمالة في المجرة أو عند عملائها.</HonestyNote>
      <div className="grid gap-4 md:grid-cols-2">
        <Num label="ماء يُوفَّر شهرياً (م³) — افتراض" value={water} onChange={setWater} />
        <Num label="تكلفة الم³ (د.أ) — افتراض" value={rate} onChange={setRate} />
        <Num label="ساعات تنسيق أسبوعية تُوفَّر" value={hours} onChange={setHours} />
        <Num label="تكلفة الساعة" value={wage} onChange={setWage} />
        <Num label="تكلفة تجريب أولى" value={pilot} onChange={setPilot} />
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">سيناريو تجريبي</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          أثر سنوي مفترض: <span className="tabular font-semibold">{formatNumber(yearly, 0)}</span> د.أ — استرداد تقريبي{" "}
          {yearly > 0 ? (pilot / (yearly / 12)).toFixed(1) : "—"} شهر
        </CardContent>
      </Card>
    </div>
  );
}

function Num({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input type="number" min={0} step="0.1" value={value} onChange={(e) => onChange(Number(e.target.value) || 0)} />
    </div>
  );
}
