import { KeyRound, Save, ShieldCheck } from "lucide-react";
import type { ChangeEvent } from "react";
import type { LlmSettings } from "../../types";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

type AiSettingsPanelProps = {
  settings: LlmSettings;
  onChange: (settings: LlmSettings) => void;
  onSave: () => void;
};

export function AiSettingsPanel({ settings, onChange, onSave }: AiSettingsPanelProps) {
  const update = (key: keyof LlmSettings, value: string) => onChange({ ...settings, [key]: value });
  const handleMode = (event: ChangeEvent<HTMLSelectElement>) => update("mode", event.target.value);
  return (
    <Card className="p-5 sm:p-6">
      <div className="flex gap-3"><span className="grid h-9 w-9 place-items-center rounded-md bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300"><KeyRound className="h-5 w-5" /></span><div><h2 className="text-base font-bold text-zinc-900 dark:text-white">내부 LLM 연결 설정</h2><p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">이 정보는 현재 브라우저의 localStorage에만 저장됩니다. 공유 PC에서는 사용 후 삭제하세요.</p></div></div>
      <div className="mt-6 grid gap-5 md:grid-cols-2"><Field label="API Endpoint URL"><input autoComplete="url" className="input" onChange={(event) => update("endpoint", event.target.value)} placeholder="https://internal.example.com/v1/chat/completions" type="url" value={settings.endpoint} /></Field><Field label="Model Name"><input className="input" onChange={(event) => update("model", event.target.value)} placeholder="internal-chat-model" type="text" value={settings.model ?? ""} /></Field><Field label="API Key 또는 Authorization Token"><input autoComplete="off" className="input" onChange={(event) => update("apiKey", event.target.value)} placeholder="브라우저에만 저장됩니다" type="password" value={settings.apiKey ?? ""} /></Field><Field label="Authorization Header"><select className="input" onChange={(event) => update("authType", event.target.value)} value={settings.authType}><option value="bearer">Bearer token</option><option value="x-api-key">x-api-key</option><option value="none">No auth</option></select></Field><Field label="Request Body Template"><select className="input" onChange={handleMode} value={settings.mode}><option value="openai-compatible">OpenAI-compatible</option><option value="generic">Generic chat messages</option><option value="custom">Custom JSON</option></select></Field></div>
      {settings.mode === "custom" ? <Field className="mt-5" label="Custom JSON Body"><textarea className="input min-h-36 resize-y font-mono text-xs" onChange={(event) => update("customBodyTemplate", event.target.value)} placeholder={'{"model":{model},"messages":{messages},"temperature":0.4}'} value={settings.customBodyTemplate ?? ""} /><p className="mt-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">사용 가능한 토큰: <code>{"{model}"}</code>, <code>{"{messages}"}</code>, <code>{"{system}"}</code>, <code>{"{user}"}</code>. JSON 값으로 자동 치환되므로 토큰 주위에 따옴표를 넣지 마세요.</p></Field> : null}
      <div className="mt-6 flex flex-col justify-between gap-3 border-t border-zinc-100 pt-5 dark:border-zinc-800 sm:flex-row sm:items-center"><div className="flex items-start gap-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />키와 Endpoint는 소스 코드, Git 커밋, 배포 산출물에 포함되지 않습니다.</div><Button onClick={onSave}><Save className="h-4 w-4" />브라우저에 저장</Button></div>
    </Card>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return <label className={`block ${className}`}><span className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-200">{label}</span>{children}</label>;
}
