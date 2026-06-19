export function isRecorderSupported() {
  return (
    typeof window !== "undefined" &&
    typeof MediaRecorder !== "undefined" &&
    Boolean(navigator.mediaDevices?.getUserMedia)
  );
}

export async function requestAudioStream() {
  if (!isRecorderSupported()) {
    throw new Error("이 브라우저는 녹음 기능을 지원하지 않습니다.");
  }

  return navigator.mediaDevices.getUserMedia({ audio: true });
}

export function stopAudioTracks(stream: MediaStream | null) {
  stream?.getTracks().forEach((track) => track.stop());
}
