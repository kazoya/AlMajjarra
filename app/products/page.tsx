import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { catalogProducts, familyLabel } from "@/data/products";

export default function ProductsPage() {
  const families = Object.keys(familyLabel) as Array<keyof typeof familyLabel>;
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader title="كتالوج Galaxy كما نُشر" description="المصدر: قوائم الموقع وصفحات الأصناف. الصفحات الرقيقة مُعلَّمة حتى لا تُملأ باختراع." />
      <HonestyNote>لا أسعار هنا. بعض المتخصصات بلا نشرة ظاهرة.</HonestyNote>
      {families.map((family) => {
        const items = catalogProducts.filter((p) => p.family === family);
        if (!items.length) return null;
        return (
          <section key={family}>
            <h2 className="mb-3 font-heading text-lg font-semibold">{familyLabel[family]}</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <Card key={item.id} className="shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="flex gap-2">
                      {item.contentStatus === "thin" ? <Badge variant="outline">نشرة رقيقة</Badge> : <Badge variant="secondary">منشور</Badge>}
                    </div>
                    <CardTitle className="text-base">{item.nameAr}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-7 text-muted-foreground">
                    <p>{item.nameEn}</p>
                    <p className="mt-1">{item.notes}</p>
                    <a href={item.sourceUrl} className="mt-2 inline-block text-copper underline-offset-4 hover:underline" target="_blank" rel="noreferrer">المصدر</a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
