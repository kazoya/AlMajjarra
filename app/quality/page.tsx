import { HonestyNote } from "@/components/shared/demo-badge";
import { HumanInTheLoop } from "@/components/shared/human-loop";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function QualityPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader title="الجودة والصيغ" description="الجودة هنا مطابقة NPK والذوبان والعناصر المخلبة، لا شهادة نُظهر ملفها إن لم تُنشر." />
      <HonestyNote>ادّعاءات «أعلى جودة وأقل سعر» نص الشركة. لا تقييم مستقل.</HonestyNote>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="shadow-sm">
          <CardHeader><CardTitle className="text-base">إفراج الدفعة</CardTitle></CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">لا تخرج شحنة قبل حالة مخبرية رقمية. التوقيع والوقت جزء من الأثر.</CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader><CardTitle className="text-base">النشرة = المصدر</CardTitle></CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">أي توصية حقلية تستند إلى نشرة معتمدة. الصفحات الرقيقة تُكمَّل قبل أن يجيب عليها المساعد.</CardContent>
        </Card>
      </div>
      <HumanInTheLoop />
    </div>
  );
}
