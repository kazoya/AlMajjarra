import { TrendChart } from "@/components/charts/trend-chart";
import { HonestyNote } from "@/components/shared/demo-badge";
import { KpiCard } from "@/components/shared/kpi-card";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { monthlyDemo } from "@/data/irrigation";

export default function DashboardPage() {
  const last = monthlyDemo[monthlyDemo.length - 1];
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader title="لوحة القيادة" description="سيناريو لحقل تجريبي مرتبط بالمصنع. ليست أرقام تشغيل المجرة." />
      <HonestyNote>ماء وأسمدة وطلبات أدناه بيانات تجريبية.</HonestyNote>
      <div className="grid gap-4 sm:grid-cols-3">
        <KpiCard label="ماء (م³) — سيناريو" value={last.waterM3} hint={last.month} />
        <KpiCard label="سماد (كغ) — سيناريو" value={last.fertKg} />
        <KpiCard label="طلبات — سيناريو" value={last.orders} />
      </div>
      <Card className="shadow-sm">
        <CardHeader><CardTitle className="text-base">اتجاه تجريبي</CardTitle></CardHeader>
        <CardContent>
          <TrendChart
            data={monthlyDemo}
            xKey="month"
            series={[
              { key: "waterM3", name: "ماء م³", color: "#15803d" },
              { key: "fertKg", name: "سماد كغ", color: "#a16207" },
            ]}
          />
        </CardContent>
      </Card>
    </div>
  );
}
