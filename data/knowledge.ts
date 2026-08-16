import type { KnowledgeAnswer } from "@/types";

export const sampleQuestions = [
  "متى تأسست المجرة؟",
  "ما عوائل منتجات Galaxy؟",
  "كيف يمكن التواصل مع المصنع؟",
  "ما تركيب بيو جلاكسي أمين؟",
  "ما تفاصيل جلاكسي ووتر سيفر؟",
  "كم طاقة إنتاج المصنع؟",
];

export const knowledgeAnswers: KnowledgeAnswer[] = [
  {
    id: "k1",
    question: "متى تأسست المجرة؟",
    answer:
      "حسب صفحة من نحن: مصنع وطني متخصص في الأسمدة تأسس عام 2008 في عمّان — الأردن، لإنتاج المحبب والسائل والبودرة والمعلق والأسمدة المتخصصة والحيوية.",
    citations: [{ title: "About", note: "almajjarra.com/ar/about" }],
  },
  {
    id: "k2",
    question: "ما عوائل منتجات Galaxy؟",
    answer:
      "القائمة العامة: أسمدة مركبة (ذائبة، محببة، معلقة، سائلة، ورقية)، أسمدة عضوية/حيوية، أسمدة متخصصة، وعناصر صغرى مخلبة EDTA وEDDHA.",
    citations: [{ title: "القوائم العامة", note: "almajjarra.com" }],
  },
  {
    id: "k3",
    question: "كيف يمكن التواصل مع المصنع؟",
    answer:
      "من صفحة تواصل معنا: هاتف 00962-796448244 و00962-796883339، واتساب +962-796883339، بريد info@almajjarra.com وsales@almajjarra.com وYasmeen@almajjarra.com. العنوان: السلط — منطقة البحيرة الصناعية. الدوام السبت–الخميس 9–5.",
    citations: [{ title: "Contact Us", note: "almajjarra.com/contact-us" }],
  },
  {
    id: "k4",
    question: "ما تركيب بيو جلاكسي أمين؟",
    answer:
      "الموقع ينشر جداول: أمين 24٪ (أحماض أمينية 24٪، مادة عضوية 30٪، نيتروجين 3.8٪) وأمين 50٪ وماكرو ومايكرو بنسب مختلفة. هذه نسب الشركة على الصفحة لا تحليلاً مستقلاً.",
    citations: [{ title: "Bio Galaxy Amin", note: "almajjarra.com/bio-galaxy-amin" }],
  },
  {
    id: "k5",
    question: "ما تفاصيل جلاكسي ووتر سيفر؟",
    answer:
      "الصفحة موجودة في قائمة الأسمدة المتخصصة لكن المحتوى التقني شبه غائب في التصفح العام. لا نخترع تركيباً أو جرعة. هذا أحد أسباب ربط المنتج لاحقاً ببرنامج ري موثّق.",
    citations: [{ title: "Galaxy Water Saver", note: "صفحة شبه فارغة على الموقع" }],
  },
  {
    id: "k6",
    question: "كم طاقة إنتاج المصنع؟",
    answer:
      "لا رقم معلن لطاقة الخلط أو التحبيب أو عدد الخطوط. أي رقم هنا سيكون اختراعاً. مكانه نموذج الاكتشاف.",
    citations: [{ title: "لا مصدر عام", note: "الموقع لا ينشر طاقة رقمية" }],
  },
];

export const fallbackKnowledgeAnswer: KnowledgeAnswer = {
  id: "fallback",
  question: "",
  answer:
    "لا أملك مصدراً معتمداً. المساعد لا يخمن جرعة ولا يفتح صمام ري ولا يغيّر صيغة إنتاج.",
  citations: [{ title: "سياسة الصدق", note: "إجابة من مصدر أو اعتذار" }],
};
