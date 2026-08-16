export type Department =
  | "procurement"
  | "production"
  | "quality"
  | "packing"
  | "sales"
  | "agronomy"
  | "irrigation"
  | "field"
  | "management";

export type ProductFamily =
  | "soluble"
  | "granular"
  | "suspension"
  | "liquid"
  | "foliar"
  | "bio"
  | "specialized"
  | "chelated";

export type Difficulty = "low" | "medium" | "high";
export type Impact = "low" | "medium" | "high";
export type PilotFit = "strong" | "possible" | "later";
export type AiReadiness = "available_now" | "needs_history" | "needs_iot";

export type CatalogProduct = {
  id: string;
  nameAr: string;
  nameEn: string;
  family: ProductFamily;
  notes: string;
  sourceUrl: string;
  contentStatus: "published" | "thin";
};

export type WorkflowNode = {
  id: string;
  title: string;
  currentProcess: string;
  requiredData: string[];
  possibleBottleneck: string;
  automationOpportunity: string;
  aiOpportunity: string;
  kpi: string;
  integration: string;
};

export type Bottleneck = {
  id: string;
  title: string;
  department: Department;
  description: string;
  signalToInvestigate: string;
};

export type OpportunityCard = {
  id: string;
  title: string;
  summary: string;
  impact: Impact;
  requiredData: string[];
  difficulty: Difficulty;
  dependencies: string[];
  pilotFit: PilotFit;
  readiness?: AiReadiness;
};

export type KnowledgeAnswer = {
  id: string;
  question: string;
  answer: string;
  citations: { title: string; note: string }[];
};

export type ReadinessRow = {
  source: string;
  exists: "unknown" | "yes" | "partial" | "no";
  digital: "unknown" | "yes" | "partial" | "no";
  structured: "unknown" | "yes" | "partial" | "no";
  historicalDepth: string;
  api: "unknown" | "yes" | "no";
  aiReadiness: string;
};

export type SensorReading = {
  zoneId: string;
  zoneName: string;
  crop: string;
  tempC: number;
  humidityPct: number;
  lightLux: number;
  soilMoisturePct: number;
  at: string;
};

export type IrrigationProposal = {
  zoneId: string;
  action: "irrigate" | "hold" | "reduce";
  minutes: number;
  reasons: string[];
  fertigationHint?: string;
  requiresApproval: true;
};
