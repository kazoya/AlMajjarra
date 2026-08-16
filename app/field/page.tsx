import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FieldPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader title="الإرشاد الحقلي" description="المجرة تصف نفسها بحلول أعمال زراعية ودعم فني. تفاصيل الزيارات غير معلنة." />
      <HonestyNote>أي محصول أو مزرعة في السيناريوهات الأخرى تجريبي.</HonestyNote>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="shadow-sm">
          <CardHeader><CardTitle className="text-base">مدخلات الزيارة</CardTitle></CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">المحصول، المرحلة، التربة، ماء الري، نظام الري، والأعراض. الصورة اختيارية للمراجعة البشرية.</CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader><CardTitle className="text-base">المخرج المعتمد</CardTitle></CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">برنامج تغذية + إن وُجدت حساسات: جدول ري مقترح. التنفيذ يبقى عند المزارع.</CardContent>
        </Card>
      </div>
    </div>
  );
}
