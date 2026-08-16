import Link from "next/link";
import { HonestyNote } from "@/components/shared/demo-badge";
import { HumanInTheLoop } from "@/components/shared/human-loop";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";

const layers = [
  { title: "ما نعرفه علناً", items: [`تأسيس ${siteConfig.since} في الأردن`, "علامة Galaxy لتغذية النبات", "أربع عوائل: مركبة، عضوية، متخصصة، مخلبة", "تواصل: هاتف وواتساب وبريد معلن", "مصنع في السلط — البحيرة الصناعية"] },
  { title: "ما لا نعرفه بعد", items: ["طاقة الخطوط", "بروتوكول المختبر", "كيف يُحوَّل واتساب إلى أمر", "هل يوجد ريٌّ آلي عند العملاء", "تركيب جلاكسي ووتر سيفر"] },
  { title: "ماذا نقترح", items: ["اكتشاف مصنع + حقل", "رقمنة الصيغة والإفراج", "التقاط الطلبات", "تجريب ري بالحساسات", "قرار بشري على السعر والصمام"] },
];

export default function OverviewPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader eyebrow="Executive brief" title="تصور تنفيذي لمصنع أسمدة وحقل يُروى بعلم" description="الإدارة ترى المصنع والإرشاد والري في دورة واحدة. ليست دردشة ولا أرقام مخترعة." />
      <HonestyNote>صفحة «لماذا نحن» على الموقع ما زالت تحمل قوالب IT/NanoSoft. نذكرها كفرصة هوية لا كهجوم.</HonestyNote>
      <div className="grid gap-4 md:grid-cols-3">
        {layers.map((layer) => (
          <Card key={layer.title} className="shadow-sm">
            <CardHeader><CardTitle className="text-base">{layer.title}</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pr-4 text-sm leading-7 text-muted-foreground">
                {layer.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      <HumanInTheLoop />
      <div className="flex flex-wrap gap-2">
        <Button asChild className="cursor-pointer"><Link href="/irrigation">الري والحساسات</Link></Button>
        <Button asChild variant="outline" className="cursor-pointer"><Link href="/assessment">الاكتشاف</Link></Button>
      </div>
    </div>
  );
}
