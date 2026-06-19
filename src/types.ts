export type GoalLevel = "IM3" | "IH" | "AL" | "IM3-IH-AL";

export type ScriptItem = {
  id: string;
  group: string;
  title: string;
  goalLevel: GoalLevel;
  surveyBadges: string[];
  covers: string[];
  expectedQuestions: string[];
  strategy: string;
  keywords: string[];
  fillerPhrases: string[];
  koreanSummary: string;
  englishScript: string;
  pointNotes: string[];
};

export type SurveyItem = {
  id: string;
  name: string;
  category: string;
  reason: string;
  scriptGroup: string;
  covers: string[];
  recommended: boolean;
};

export type RoleplayScenario = {
  id: string;
  title: string;
  group: string;
  situation: string;
  evaQuestion: string;
  answerStructure: string[];
  englishExample: string;
  alternatives: string[];
  levelDifferences: Record<"IM3" | "IH" | "AL", string>;
};

export type PracticeQuestion = {
  id: string;
  group: string;
  prompt: string;
  scriptId: string;
  type: string;
};

export type LlmMode = "openai-compatible" | "generic" | "custom";
export type LlmAuthType = "bearer" | "x-api-key" | "none";

export type LlmSettings = {
  endpoint: string;
  apiKey?: string;
  model?: string;
  mode: LlmMode;
  authType: LlmAuthType;
  customBodyTemplate?: string;
};

export type LlmMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export type ToastMessage = {
  id: number;
  title: string;
  description?: string;
  tone?: "success" | "error" | "info";
};
