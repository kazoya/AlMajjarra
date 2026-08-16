import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CrmPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader title="العملاء والطلبات" description="الواتساب والهواتف معلنة. لا قائمة عملاء عامة ولن نخترع أسماء مزارع." />
      <HonestyNote>الفرصة: تحويل رسالة واتساب إلى طلب فيه محصول وكمية وصنف، ثم تسعير بشري.</HonestyNote>
      <Card className="shadow-sm">
        <CardHeader><CardTitle className="text-base">قنوات معلنة</CardTitle></CardHeader>
        <CardContent className="text-sm leading-7 text-muted-foreground">
          واتساب +962 7 9688 3339 · هاتف +962 7 9644 8244 · sales@ / info@ / Yasmeen@ almajjarra.com
        </CardContent>
      </Card>
    </div>
  );
}
