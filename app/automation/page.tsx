import { OpportunityGrid } from "@/components/shared/opportunity-grid";
import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { automationOpportunities } from "@/data/opportunities";

export default function AutomationPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader title="فرص الأتمتة" description="الري بالحساسات في المقدمة، ثم الصيغة الرقمية والتقاط واتساب واكتمال النشرات." />
      <HonestyNote>فتح الصمام مرحلة ثانية بعد الاعتماد. المرحلة الأولى توصية مفهومة.</HonestyNote>
      <OpportunityGrid items={automationOpportunities} />
    </div>
  );
}
