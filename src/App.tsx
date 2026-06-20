import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiSettingsView } from "./components/ai/AiSettingsView";
import { DifficultyGuide } from "./components/difficulty/DifficultyGuide";
import { ExamGuideView } from "./components/guide/ExamGuideView";
import { HomeView } from "./components/home/HomeView";
import { AppShell } from "./components/layout/AppShell";
import type { ViewId } from "./components/layout/Sidebar";
import { PracticeView } from "./components/practice/PracticeView";
import { RoleplayView } from "./components/roleplay/RoleplayView";
import { ScriptDashboard } from "./components/script/ScriptDashboard";
import { BackgroundSurveySheet } from "./components/survey/BackgroundSurveySheet";
import { Toast } from "./components/ui/Toast";
import type { LlmSettings, ToastMessage } from "./types";

const SETTINGS_KEY = "oom-llm-settings";
const THEME_KEY = "oom-theme";
const defaultSettings: LlmSettings = { endpoint: "", apiKey: "", model: "", mode: "openai-compatible", authType: "bearer", customBodyTemplate: '{"model":{model},"messages":{messages},"temperature":0.4}' };
const scriptViewById: Record<string, ViewId> = {
  "outdoor-travel": "script-outdoor",
  "indoor-rest": "script-indoor",
  "sports-hobby": "script-sports",
  "home-residence": "script-home",
};
const nextViewById: Partial<Record<ViewId, { view: ViewId; label: string }>> = {
  home: { view: "survey", label: "STEP 1" },
  survey: { view: "difficulty", label: "STEP 2" },
  difficulty: { view: "script-outdoor", label: "STEP 3" },
  "script-outdoor": { view: "roleplay", label: "STEP 4" },
  "script-indoor": { view: "roleplay", label: "STEP 4" },
  "script-sports": { view: "roleplay", label: "STEP 4" },
  "script-home": { view: "roleplay", label: "STEP 4" },
  roleplay: { view: "practice", label: "STEP 5" },
  practice: { view: "ai-settings", label: "AI 설정" },
};

function loadSettings(): LlmSettings {
  try {
    const stored = window.localStorage.getItem(SETTINGS_KEY);
    return stored ? { ...defaultSettings, ...(JSON.parse(stored) as Partial<LlmSettings>) } : defaultSettings;
  } catch { return defaultSettings; }
}

export default function App() {
  const [activeView, setActiveView] = useState<ViewId>("home");
  const [settings, setSettings] = useState<LlmSettings>(loadSettings);
  const [darkMode, setDarkMode] = useState(() => window.localStorage.getItem(THEME_KEY) === "dark" || (window.localStorage.getItem(THEME_KEY) === null && window.matchMedia("(prefers-color-scheme: dark)").matches));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  useEffect(() => { document.documentElement.classList.toggle("dark", darkMode); window.localStorage.setItem(THEME_KEY, darkMode ? "dark" : "light"); }, [darkMode]);
  useEffect(() => { if (!toast) return; const timeout = window.setTimeout(() => setToast(null), 4400); return () => window.clearTimeout(timeout); }, [toast]);
  const showToast = (title: string, description?: string, tone: ToastMessage["tone"] = "info") => setToast({ id: Date.now(), title, description, tone });
  const saveSettings = () => { window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); showToast("AI 설정을 브라우저에 저장했습니다.", "공유 PC에서는 사용 후 설정을 지워 주세요.", "success"); };
  const screen = (() => {
    if (activeView === "home") return <HomeView onNavigate={setActiveView} />;
    if (activeView === "exam-guide") return <ExamGuideView onNavigate={setActiveView} />;
    if (activeView === "survey") return <BackgroundSurveySheet />;
    if (activeView === "difficulty") return <DifficultyGuide />;
    if (activeView === "roleplay") return <RoleplayView onToast={showToast} settings={settings} />;
    if (activeView === "practice") return <PracticeView onToast={showToast} settings={settings} />;
    if (activeView === "ai-settings") return <AiSettingsView onChange={setSettings} onSave={saveSettings} settings={settings} />;
    const scriptId = activeView === "script-outdoor" ? "outdoor-travel" : activeView === "script-indoor" ? "indoor-rest" : activeView === "script-sports" ? "sports-hobby" : "home-residence";
    return <ScriptDashboard initialScriptId={scriptId} onScriptChange={(nextScriptId) => setActiveView(scriptViewById[nextScriptId])} onToast={showToast} settings={settings} />;
  })();
  const isStepView = ["survey", "difficulty", "script-outdoor", "script-indoor", "script-sports", "script-home", "roleplay", "practice"].includes(activeView);
  const nextStep = nextViewById[activeView];
  return <AppShell activeView={activeView} darkMode={darkMode} mobileOpen={mobileOpen} nextStep={nextStep ? { label: nextStep.label, onClick: () => setActiveView(nextStep.view) } : undefined} onCloseMobileMenu={() => setMobileOpen(false)} onNavigate={setActiveView} onToggleDarkMode={() => setDarkMode((value) => !value)} onToggleMobileMenu={() => setMobileOpen((value) => !value)}><AnimatePresence mode="wait"><motion.div animate={{ opacity: 1, y: 0 }} className={isStepView ? "step-page" : undefined} exit={{ opacity: 0, y: -6 }} initial={{ opacity: 0, y: 8 }} key={activeView} transition={{ duration: 0.2 }}>{screen}</motion.div></AnimatePresence><Toast onDismiss={() => setToast(null)} toast={toast} /></AppShell>;
}
