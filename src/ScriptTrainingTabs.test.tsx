import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { scripts } from "./data/scripts";
import { ScriptTrainingTabs } from "./components/script/ScriptTrainingTabs";
import type { LlmSettings } from "./types";

const settings: LlmSettings = {
  endpoint: "",
  apiKey: "",
  model: "",
  mode: "openai-compatible",
  authType: "bearer",
  customBodyTemplate: "",
};

describe("ScriptTrainingTabs", () => {
  it("shows question variants and the answer blueprint for the selected scene", async () => {
    const user = userEvent.setup();
    render(<ScriptTrainingTabs onToast={() => undefined} script={scripts[0]} settings={settings} />);

    await user.click(screen.getByRole("tab", { name: "질문별 변형" }));
    expect(screen.getByText("좋아하는 장소")).toBeInTheDocument();
    expect(screen.getByText("Tell me about a park or beach you enjoy going to.")).toBeInTheDocument();

    await user.click(screen.getByRole("tab", { name: "답변 설계" }));
    expect(screen.getByText("장소 먼저")).toBeInTheDocument();
    expect(screen.getByText("같은 바닷가 장면을 세 방향으로 돌리기")).toBeInTheDocument();
  });
});
