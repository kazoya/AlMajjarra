import { DeveloperQr } from "@/components/layout/developer-qr";
import { WhatsAppQr } from "@/components/layout/whatsapp-qr";
import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPhoneDisplay, getCompanyWebsiteUrl, getContactEmails, siteConfig } from "@/lib/config";

export default function ContactPage() {
  const website = getCompanyWebsiteUrl();
  const emails = getContactEmails();
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader title="تواصل معنا" description="بيانات المصنع من صفحة Contact Us على الموقع. رمز المبرمج منفصل." demo={false} />
      <HonestyNote>نموذج الموقع يحتوي خيارات قوالب برمجيات. نستخدم الأرقام والبريد المعلنة فقط.</HonestyNote>
      <Card className="shadow-sm">
        <CardHeader><CardTitle className="text-base">المجرة — كما نُشر</CardTitle></CardHeader>
        <CardContent className="space-y-2 text-sm leading-7">
          <p>{siteConfig.addressAr}</p>
          <p>{siteConfig.hoursAr}</p>
          {siteConfig.phones.map((p) => (
            <p key={p} dir="ltr"><a className="text-copper underline-offset-4 hover:underline" href={`tel:+${p}`}>{formatPhoneDisplay(p)}</a></p>
          ))}
          {emails.map((email) => (
            <p key={email} dir="ltr"><a className="text-copper underline-offset-4 hover:underline" href={`mailto:${email}`}>{email}</a></p>
          ))}
          <a href={website} className="text-copper underline-offset-4 hover:underline" target="_blank" rel="noreferrer">{website}</a>
        </CardContent>
      </Card>
      <WhatsAppQr />
      <Card className="shadow-sm">
        <CardHeader><CardTitle className="text-base">{siteConfig.developer.nameAr}</CardTitle></CardHeader>
        <CardContent><DeveloperQr /></CardContent>
      </Card>
    </div>
  );
}
