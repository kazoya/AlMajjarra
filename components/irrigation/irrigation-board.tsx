"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { HonestyNote } from "@/components/shared/demo-badge";
import { HumanInTheLoop } from "@/components/shared/human-loop";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { demoReadings } from "@/data/irrigation";
import { actionLabel, formatLux, proposeIrrigation } from "@/lib/irrigation";
import type { SensorReading } from "@/types";

export function IrrigationBoard() {
  const [selectedId, setSelectedId] = useState(demoReadings[0].zoneId);
  const [live, setLive] = useState<SensorReading[]>(demoReadings);
  const selected = live.find((z) => z.zoneId === selectedId) ?? live[0];
  const proposal = useMemo(() => proposeIrrigation(selected), [selected]);

  function update(partial: Partial<SensorReading>) {
    setLive((rows) => rows.map((row) => (row.zoneId === selected.zoneId ? { ...row, ...partial } : row)));
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader
        title="أتمتة الري حسب الحرارة والرطوبة والضوء"
        description="قواعد تجريبية واضحة: رطوبة التربة أولاً، ثم الحرارة والرطوبة الجوية والضوء. لا اتصال بصمام حقيقي في هذا التصور."
        demoLabel="حساسات وسيناريو تجريبي"
      />
      <HonestyNote>
        الموقع لا يعلن أن المجرة تشغّل شبكة ري ذكية اليوم. هذا مسار نقدر بناءه مع الحقل، ويرتبط لاحقاً بمنتج
        «جلاكسي ووتر سيفر» بعد توثيق نشرته.
      </HonestyNote>
      <div className="flex flex-wrap gap-2">
        {live.map((zone) => (
          <button
            key={zone.zoneId}
            type="button"
            onClick={() => setSelectedId(zone.zoneId)}
            className={`cursor-pointer rounded-full border px-3 py-1.5 text-sm ${
              zone.zoneId === selected.zoneId
                ? "border-primary bg-primary text-primary-foreground"
                : "bg-card hover:bg-muted"
            }`}
          >
            {zone.zoneName}
          </button>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">قراءات {selected.zoneName}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <SensorSlider label={`حرارة الهواء ${selected.tempC}°م`} value={selected.tempC} min={10} max={48} onChange={(v) => update({ tempC: v })} />
            <SensorSlider label={`رطوبة الهواء ${selected.humidityPct}٪`} value={selected.humidityPct} min={10} max={90} onChange={(v) => update({ humidityPct: v })} />
            <SensorSlider label={`الضوء ${formatLux(selected.lightLux)}`} value={selected.lightLux} min={5000} max={110000} step={1000} onChange={(v) => update({ lightLux: v })} />
            <SensorSlider label={`رطوبة التربة ${selected.soilMoisturePct}٪`} value={selected.soilMoisturePct} min={8} max={80} onChange={(v) => update({ soilMoisturePct: v })} />
            <p className="text-xs text-muted-foreground">حرّك المؤشرات لترى كيف تتغيّر التوصية. المحصول في السيناريو: {selected.crop}</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader>
            <div className="flex flex-wrap gap-2">
              <Badge variant={proposal.action === "hold" ? "outline" : "default"}>{actionLabel[proposal.action]}</Badge>
              <Badge variant="secondary">{proposal.minutes} دقيقة مقترحة</Badge>
            </div>
            <CardTitle className="text-base">توصية تحتاج اعتماداً</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-7">
            <ul className="list-disc space-y-1 pr-5 text-muted-foreground">
              {proposal.reasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
            {proposal.fertigationHint ? <p>{proposal.fertigationHint}</p> : null}
            <div className="flex flex-wrap gap-2 pt-2">
              <Button
                className="cursor-pointer"
                disabled={proposal.action === "hold"}
                onClick={() => toast.success("سُجّل الاعتماد التجريبي — لم يُفتح أي صمام حقيقي")}
              >
                اعتماد الري
              </Button>
              <Button
                variant="outline"
                className="cursor-pointer"
                onClick={() => toast.message("رُفض الاقتراح — يبقى الصمام مغلقاً")}
              >
                رفض
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <HumanInTheLoop note="حتى بعد تركيب أجهزة حقيقية: التوصية آلية، فتح الصمام بشري في المرحلة الأولى." />
    </div>
  );
}

function SensorSlider({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">{label}</p>
      <Slider value={[value]} min={min} max={max} step={step} onValueChange={(v) => onChange(v[0] ?? value)} />
    </div>
  );
}
