import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("OPIc exam guide", () => {
  it("opens the guide hub, its child page, and a detailed tab", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await user.click(screen.getByRole("button", { name: "OPIc 수험 가이드" }));
    expect(await screen.findByRole("heading", { name: "신청 전부터 성적 활용까지, 필요한 정보를 순서대로 확인하세요." })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "소개 · 등급" }));
    expect(await screen.findByRole("heading", { name: "OPIc의 방식과 등급을 먼저 이해해요." })).toBeInTheDocument();

    await user.click(screen.getByRole("tab", { name: "회원 · 신청 · 응시료" }));
    expect(await screen.findByRole("link", { name: /OPIc 시험 신청/ })).toHaveAttribute("href", expect.stringContaining("ApplyServlet"));
  });
});
