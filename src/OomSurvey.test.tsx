import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("OOM survey rehearsal", () => {
  it("shows the complete recommended survey and grades a blank practice attempt", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "서베이 고정 시작" }));
    expect(await screen.findByRole("heading", { name: "실제 형식으로 보고, OOM 조합을 그대로 기억합니다." })).toBeInTheDocument();
    expect(screen.getByText("Background Survey")).toBeInTheDocument();
    expect(screen.getByText("일 경험 없음")).toBeInTheDocument();
    expect(screen.getByText("테니스")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "연습 모드" }));
    expect(screen.getByText(/Part 4 선택:/)).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "선택한 서베이 답안 채점하기" }));
    expect(screen.getByText("추천 답안 0 / 15개 일치")).toBeInTheDocument();
  });

  it("keeps the sidebar active item in sync with script selection", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "스크립트 보기" }));
    const indoorTitle = await screen.findByText("조용한 카페와 집에서의 휴식 루틴");
    await user.click(indoorTitle);

    expect(screen.getByRole("button", { name: "실내 / 휴식" })).toHaveAttribute("aria-current", "page");
  });
});
