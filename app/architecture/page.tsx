import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const layers = [
  { title: "الواجهة", text: "عربي RTL — مصنع، كتالوج، ري، إرشاد. هذا المشروع هو الطبقة الظاهرة." },
  { title: "العمليات", text: "صيغ، إفراج، طلبات واتساب، برامج تغذية، اقتراحات ري." },
  { title: "الحقل", text: "حساسات حرارة ورطوبة وضوء وتربة، وصمامات لا تُفتح دون اعتماد." },
  { title: "الذكاء", text: "بحث في نشرات Galaxy + ضبط عتبات لاحقاً. لا جرعة من الفراغ." },
];

export default function ArchitecturePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader title="البنية المقترحة" description="المصنع والحقل طبقتان تتكلمان عبر الوصفة المعتمدة، لا عبر شات مفتوح." />
      <HonestyNote>لا أجهزة مربوطة الآن. لوحة الري محاكاة قواعد.</HonestyNote>
      <div className="grid gap-4 md:grid-cols-2">
        {layers.map((item) => (
          <Card key={item.title} className="shadow-sm">
            <CardHeader><CardTitle className="text-base">{item.title}</CardTitle></CardHeader>
            <CardContent className="text-sm leading-7 text-muted-foreground">{item.text}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
