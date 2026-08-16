import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const phases = [
  { title: "اكتشاف", text: "جولة مصنع + حقل عميل متطوع: صيغ، واتساب، طريقة الري الحالية." },
  { title: "نشرات وطلبات", text: "ملء الصفحات الرقيقة، والتقاط طلب واتساب إلى طابور تسعير." },
  { title: "تجريب ري", text: "3 مناطق، حساسات رطوبة/حرارة/ضوء، توصية لمدة، اعتماد يدوي." },
  { title: "بعدها", text: "صمامات، ري تسميدي مربوط بوصفة، ومساعد نشرات." },
];

export default function PilotPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader title="خطة التنفيذ" description="تجريب ضيق يمكن إيقافه. لا استبدال لخط الخلط في المرحلة الأولى." />
      <HonestyNote>المدد إرشادية للنقاش حتى الزيارة.</HonestyNote>
      <div className="grid gap-4 md:grid-cols-2">
        {phases.map((item) => (
          <Card key={item.title} className="shadow-sm">
            <CardHeader><CardTitle className="text-base">{item.title}</CardTitle></CardHeader>
            <CardContent className="text-sm leading-7 text-muted-foreground">{item.text}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
