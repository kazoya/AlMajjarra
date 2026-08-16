import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProductionPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader title="الإنتاج" description="الموقع يذكر محبباً وسائل وبودرة ومعلقاً وأسمدة حيوية. عدد الخلاطات والطاقة غير معلنين." />
      <HonestyNote>لا نعرض OEE مخترعاً. بعد الاكتشاف تُملأ ورقة التشغيل الرقمية.</HonestyNote>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="shadow-sm">
          <CardHeader><CardTitle className="text-base">ما يمكن رقمنته مبكراً</CardTitle></CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">وصفة مقفلة، أوزان، رقم دفعة، زمن خلط، وربط العبوة بالدفعة.</CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader><CardTitle className="text-base">ما يحتاج أجهزة</CardTitle></CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">قياس تجانس المعلق، رطوبة المحبب، وعدّ التعبئة — بعد زيارة الخط.</CardContent>
        </Card>
      </div>
    </div>
  );
}
