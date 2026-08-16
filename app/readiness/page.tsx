import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { readinessRows } from "@/data/readiness";

export default function ReadinessPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader title="جاهزية البيانات" description="من المصدر العام. الحساسات «غير معلنة» وهذا مقصود حتى الزيارة." />
      <HonestyNote>وجود واتساب معلن لا يعني أن الرسائل مهيكلة.</HonestyNote>
      <div className="overflow-x-auto rounded-xl border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>المصدر</TableHead>
              <TableHead>موجود</TableHead>
              <TableHead>رقمي</TableHead>
              <TableHead>منظّم</TableHead>
              <TableHead>العمق</TableHead>
              <TableHead>جاهزية الذكاء</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {readinessRows.map((row) => (
              <TableRow key={row.source}>
                <TableCell>{row.source}</TableCell>
                <TableCell>{row.exists}</TableCell>
                <TableCell>{row.digital}</TableCell>
                <TableCell>{row.structured}</TableCell>
                <TableCell>{row.historicalDepth}</TableCell>
                <TableCell>{row.aiReadiness}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
