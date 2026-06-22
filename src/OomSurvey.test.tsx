import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("OOM survey rehearsal", () => {
  it("shows the complete recommended survey and grades a blank practice attempt", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await user.click(screen.getByRole("button", { name: "서베이 고정 시작" }));
    expect(await screen.findByRole("heading", { name: "실제 형식으로 보고, OOM 조합을 그대로 기억합니다." })).toBeInTheDocument();
    expect(screen.getByText("Background Survey")).toBeInTheDocument();
    expect(screen.getByText("일 경험 없음")).toBeInTheDocument();
    expect(screen.getByText("테니스")).toBeInTheDocument();

    const practiceModeButton = screen.getByRole("button", { name: "연습 모드" });
    await user.click(practiceModeButton);
    await waitFor(() => expect(practiceModeButton).toHaveAttribute("aria-pressed", "true"));
    await user.click(await screen.findByText("채점하기", { selector: "button" }));
    expect(await screen.findByText(/추천 답안/)).toBeInTheDocument();
  });

  it("keeps the sidebar active item in sync with script selection", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await user.click(screen.getByRole("button", { name: "스크립트 보기" }));
    const indoorTitle = await screen.findByText("조용한 카페와 집에서의 휴식 루틴");
    await user.click(indoorTitle);

    expect(screen.getByRole("button", { name: "실내 / 휴식" })).toHaveAttribute("aria-current", "page");
  });
});
