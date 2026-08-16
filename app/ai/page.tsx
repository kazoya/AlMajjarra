import { OpportunityGrid } from "@/components/shared/opportunity-grid";
import { HonestyNote } from "@/components/shared/demo-badge";
import { HumanInTheLoop } from "@/components/shared/human-loop";
import { PageHeader } from "@/components/shared/page-header";
import { aiOpportunities } from "@/data/opportunities";

export default function AiPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader title="فرص الذكاء الاصطناعي" description="مساعد نشرات أولاً. ضبط عتبات الري يحتاج تاريخ حساسات." />
      <HonestyNote>لا جرعة خارج وثيقة معتمدة.</HonestyNote>
      <HumanInTheLoop />
      <OpportunityGrid items={aiOpportunities} />
    </div>
  );
}
