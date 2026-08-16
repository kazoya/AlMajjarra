import Link from "next/link";
import { HonestyNote } from "@/components/shared/demo-badge";
import { HumanInTheLoop } from "@/components/shared/human-loop";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  { title: "قراءة الحقل", text: "رطوبة تربة وحرارة وضوء — هل الحقل يحتاج ماء الآن؟" },
  { title: "اعتماد الري", text: "المهندس أو المزارع يوافق على المدة المقترحة." },
  { title: "اختيار الصيغة", text: "درجة NPK أو معلق أو سائل من نشرة Galaxy المعتمدة لهذه المرحلة." },
  { title: "حقن محسوب", text: "التركيز ومعدل الحقن يُراجعان بشرياً. لا خلط في الخزان دون وصفة." },
];

export default function FertigationPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader title="الري التسميدي" description="الذائب والمعلق والسائل صُمّموا للري مع السماد. الأتمتة هنا تربط الصمام بالصيغة لا تستبدل المهندس." />
      <HonestyNote>لا نحقن سماداً في سيناريو الري التجريبي. هذه خريطة قرار فقط.</HonestyNote>
      <div className="grid gap-4 md:grid-cols-2">
        {steps.map((item) => (
          <Card key={item.title} className="shadow-sm">
            <CardHeader><CardTitle className="text-base">{item.title}</CardTitle></CardHeader>
            <CardContent className="text-sm leading-7 text-muted-foreground">{item.text}</CardContent>
          </Card>
        ))}
      </div>
      <HumanInTheLoop note="تحليل ماء الري (EC/pH) شرط قبل أي حقن متكرر — يُجمع في الاكتشاف." />
      <Button asChild className="cursor-pointer"><Link href="/irrigation">العودة للوحة الري</Link></Button>
    </div>
  );
}
