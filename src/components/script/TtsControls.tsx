import { Pause, Play, Volume2 } from "lucide-react";
import { useState } from "react";
import { isSpeechSupported, speakText, stopSpeech } from "../../lib/speech";
import { Button } from "../ui/Button";

type TtsControlsProps = {
  text: string;
  onError: (message: string) => void;
};

export function TtsControls({ text, onError }: TtsControlsProps) {
  const [rate, setRate] = useState(1);
  const supported = isSpeechSupported();

  const play = () => {
    try {
      speakText(text, rate);
    } catch (error) {
      onError(error instanceof Error ? error.message : "음성 읽기를 시작할 수 없습니다.");
    }
  };

  if (!supported) {
    return <p className="text-xs leading-5 text-amber-700 dark:text-amber-300">이 브라우저는 Web Speech API를 지원하지 않아 TTS를 사용할 수 없습니다.</p>;
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button aria-label="영어 스크립트 재생" onClick={play} size="sm" variant="secondary"><Play className="h-3.5 w-3.5" />듣기</Button>
      <Button aria-label="영어 스크립트 정지" onClick={stopSpeech} size="sm" variant="ghost"><Pause className="h-3.5 w-3.5" />정지</Button>
      <label className="flex min-w-48 flex-1 items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
        <Volume2 className="h-4 w-4" />
        <input aria-label="TTS 속도" className="accent-indigo-600" max="1.1" min="0.8" onChange={(event) => setRate(Number(event.target.value))} step="0.1" type="range" value={rate} />
        <span className="w-8 font-semibold text-zinc-800 dark:text-zinc-100">{rate.toFixed(1)}x</span>
      </label>
    </div>
  );
}
