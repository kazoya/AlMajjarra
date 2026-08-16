import type { CatalogProduct } from "@/types";

export const familyLabel: Record<CatalogProduct["family"], string> = {
  soluble: "NPK ذائب 100٪",
  granular: "محبب",
  suspension: "معلق",
  liquid: "سائل",
  foliar: "ورقي",
  bio: "حيوي / عضوي",
  specialized: "متخصص",
  chelated: "عناصر صغرى مخلبة",
};

/** Catalog from public menus and product pages. Thin pages are marked. */
export const catalogProducts: CatalogProduct[] = [
  { id: "soluble", nameAr: "أسمدة مركبة ذائبة 100٪", nameEn: "NPK 100% Water Soluble", family: "soluble", notes: "Galaxy fert — درجات متعددة مع TE للري التسميدي.", sourceUrl: "https://almajjarra.com/npk-water-soluble-fertilizers/", contentStatus: "published" },
  { id: "mega", nameAr: "جلاكسي ميغا", nameEn: "Galaxy Mega 9-0-36 / 9-0-40", family: "soluble", notes: "بوتاسيوم مخلب مع مركب عضوي مساعد.", sourceUrl: "https://almajjarra.com/npk-water-soluble-fertilizers/", contentStatus: "published" },
  { id: "granular", nameAr: "أسمدة محببة", nameEn: "NPK Granular 2–4 مم", family: "granular", notes: "حبيبات متجانسة بألوان متعددة حسب نص الشركة.", sourceUrl: "https://almajjarra.com/npk-granular-fertilizer/", contentStatus: "published" },
  { id: "suspension", nameAr: "أسمدة معلقة", nameEn: "NPK Suspension / Gel", family: "suspension", notes: "خلطة مستقرة رشّاً أو ريّاً.", sourceUrl: "https://almajjarra.com/npk-suspension-fertilizers/", contentStatus: "published" },
  { id: "liquid", nameAr: "أسمدة سائلة", nameEn: "NPK Liquid", family: "liquid", notes: "منها Galaxy DKP و Multi 40 و K 52.", sourceUrl: "https://almajjarra.com/liquid-fertilizer/", contentStatus: "published" },
  { id: "foliar", nameAr: "أسمدة ورقية", nameEn: "NPK Foliar 1 كغ", family: "foliar", notes: "رش ورقي فقط حسب الموقع.", sourceUrl: "https://almajjarra.com/npk-foliar-fertilizers/", contentStatus: "published" },
  { id: "amino-rich", nameAr: "بيو أمينو ريتش", nameEn: "Bio Amino Rich / fish extract", family: "bio", notes: "سماد سائل مستخلص من الأسماك مع مايكرو فلورا حسب الموقع.", sourceUrl: "https://almajjarra.com/bio-galaxy-rich-fertilizer/", contentStatus: "published" },
  { id: "amin", nameAr: "بيو جلاكسي أمين", nameEn: "Bio Galaxy Amin", family: "bio", notes: "أحماض أمينية بنسب معلنة (24٪ / 50٪ / ماكرو / مايكرو).", sourceUrl: "https://almajjarra.com/bio-galaxy-amin/", contentStatus: "published" },
  { id: "humic", nameAr: "بيو جلاكسي هيومك", nameEn: "Bio Galaxy Humic", family: "bio", notes: "مدرج في قائمة العضوية.", sourceUrl: "https://almajjarra.com/bio-full-humi/", contentStatus: "thin" },
  { id: "water-saver", nameAr: "جلاكسي ووتر سيفر", nameEn: "Galaxy Water Saver", family: "specialized", notes: "الصفحة موجودة تقريباً بلا محتوى تقني منشور — فرصة توثيق وربط بالري.", sourceUrl: "https://almajjarra.com/galaxy-water-saver/", contentStatus: "thin" },
  { id: "full-tonic", nameAr: "جلاكسي فل تونيك", nameEn: "Galaxy Full Tonic", family: "specialized", notes: "ضمن الأسمدة المتخصصة.", sourceUrl: "https://almajjarra.com/galaxy-full-tonic/", contentStatus: "thin" },
  { id: "top-g", nameAr: "جلاكسي توب جي", nameEn: "Galaxy Top G", family: "specialized", notes: "ضمن الأسمدة المتخصصة.", sourceUrl: "https://almajjarra.com/galaxy-top-g/", contentStatus: "thin" },
  { id: "sal-cal", nameAr: "جلاكسي سال كال", nameEn: "Galaxy SAL Cal", family: "specialized", notes: "كالسيوم متخصص حسب القائمة.", sourceUrl: "https://almajjarra.com/galaxy-sal-cal/", contentStatus: "thin" },
  { id: "fruit-set", nameAr: "جلاكسي فروت ست", nameEn: "Galaxy Fruit Set", family: "specialized", notes: "عقد الثمار — التفاصيل تُراجع من النشرة الداخلية.", sourceUrl: "https://almajjarra.com/galaxy-fruit-set/", contentStatus: "thin" },
  { id: "eddha", nameAr: "مايكرو جلاكسي حديد EDDHA 6٪", nameEn: "Micro Galaxy Iron 6% EDDHA", family: "chelated", notes: "للتربة فقط حسب الموقع.", sourceUrl: "https://almajjarra.com/chelated-eddha-edta-trace-elements/", contentStatus: "published" },
  { id: "edta-mix", nameAr: "مايكرو جلاكسي مكس EDTA", nameEn: "Micro Galaxy Mix EDTA", family: "chelated", notes: "Fe/Mn/Cu/Zn/B/Mo بنسب معلنة.", sourceUrl: "https://almajjarra.com/chelated-eddha-edta-trace-elements/", contentStatus: "published" },
];
