import Link from "next/link";
import { ArrowLeft, Droplets, FlaskConical, Globe2, Leaf, Sprout } from "lucide-react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { HonestyNote } from "@/components/shared/demo-badge";
import { Button } from "@/components/ui/button";
import { getCompanyWebsiteUrl, siteConfig } from "@/lib/config";

const pillars = [
  { title: "أسمدة Galaxy", text: "محبب وسائل ومعلق وذائب وورقي، مع خط حيوي ومايكرو فلورا حسب الموقع." },
  { title: "حلول لا منتج واحد", text: "الشركة تقدّم نفسها كحلول أعمال زراعية: تغذية النبات مع دعم فني." },
  { title: "من المصنع إلى الحقل", text: "الفرصة الأوضح: ربط الصيغة المعتمدة بريٍّ يقرأ الحرارة والرطوبة والضوء." },
];

export default function HomePage() {
  const website = getCompanyWebsiteUrl();
  return (
    <div className="agri-glow field-grid -mx-4 rounded-2xl px-4 py-4 sm:-mx-6 sm:px-6">
      <section className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gold/40 bg-primary px-5 py-8 text-primary-foreground shadow-lg sm:px-10 sm:py-12">
        <div className="animate-brand-rise flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <span className="relative h-28 w-28 shrink-0 overflow-hidden rounded-3xl border border-gold/70 bg-white p-2">
            <BrandLogo alt={siteConfig.nameAr} priority />
          </span>
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-gold uppercase">
              {siteConfig.brandLine} · {siteConfig.cityDetailAr} · منذ {siteConfig.since}
            </p>
            <h1 className="mt-2 font-heading text-[1.65rem] font-bold text-balance sm:text-4xl">
              تغذية النبات، ثم ريّ يعرف متى يشرب الحقل
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-primary-foreground/85 sm:text-base">
              {siteConfig.nameAr} مصنع أسمدة أردني تأسس عام {siteConfig.since}. هذا التصور يربط دورة المصنع
              (خلط، جودة، طلب) بالحقل: حساسات حرارة ورطوبة وضوء، واقتراح ري وتسميد لا يُنفَّذ إلا باعتماد بشري.
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm font-medium text-gold">إلى عناية {siteConfig.recipient}</p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <a href={website} target="_blank" rel="noreferrer" className="inline-flex cursor-pointer items-center gap-1.5 text-gold underline-offset-4 hover:underline">
            <Globe2 className="size-3.5" /> almajjarra.com
          </a>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="cursor-pointer bg-ochre text-primary hover:bg-gold">
            <Link href="/irrigation">تجربة أتمتة الري <ArrowLeft /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="cursor-pointer border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
            <Link href="/assessment">ساعدنا على فهم المصنع والحقل</Link>
          </Button>
        </div>
      </section>
      <section className="mx-auto -mt-5 grid max-w-5xl gap-3 px-1 md:grid-cols-3">
        {pillars.map((item) => (
          <div key={item.title} className="harvest-panel rounded-2xl px-4 py-5 shadow-md">
            <h2 className="font-heading text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm leading-6">{item.text}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto mt-8 max-w-5xl">
        <HonestyNote>
          أرقام الماء والإنتاج داخل المنصة تجريبية. جلاكسي ووتر سيفر موجود كصفحة شبه فارغة — لن نخترع تركيبه.
        </HonestyNote>
      </section>
      <section className="mx-auto mt-6 grid max-w-5xl gap-3 md:grid-cols-3">
        <NextCard href="/products" icon={FlaskConical} title="كتالوج Galaxy" text="ذائب، محبب، معلق، سائل، ورقي، حيوي، متخصص، مخلب." />
        <NextCard href="/irrigation" icon={Droplets} title="الري الذكي" text="حرارة + رطوبة هواء + ضوء + رطوبة تربة → اقتراح مدة." />
        <NextCard href="/workflow" icon={Sprout} title="المصنع ثم الحقل" text="من الخام إلى العبوة إلى برنامج التغذية." />
      </section>
      <section className="mx-auto mt-6 max-w-5xl rounded-2xl border bg-card p-5">
        <Leaf className="size-4 text-copper" />
        <h2 className="mt-2 font-heading text-xl font-semibold">لماذا الري هنا وليس لوحة أسمدة فقط؟</h2>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">
          الذوبان والمعلق والسائل صُمّموا للري التسميدي. بدون قراءة الحقل تبقى التوصية عامة. نبدأ بحساسات
          بسيطة وقواعد مفهومة، ثم نربط الوصفة المعتمدة بعد اعتماد المهندس.
        </p>
      </section>
    </div>
  );
}

function NextCard({ href, icon: Icon, title, text }: { href: string; icon: typeof Leaf; title: string; text: string }) {
  return (
    <Link href={href} className="cursor-pointer rounded-2xl border bg-card p-4 shadow-sm hover:border-gold/50">
      <Icon className="size-4 text-copper" />
      <p className="mt-2 font-medium">{title}</p>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
    </Link>
  );
}
