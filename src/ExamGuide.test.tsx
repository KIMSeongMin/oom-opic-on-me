import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("OPIc exam guide", () => {
  it("opens the structured guide and changes its subpage", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "OPIc 수험 가이드" }));

    expect(await screen.findByRole("heading", { name: "OPIc은 어떤 시험이고, 무엇을 준비해야 할까요?" })).toBeInTheDocument();

    await user.click(screen.getByRole("tab", { name: "회원 · 신청 · 응시료" }));

    expect(await screen.findByRole("heading", { name: "신청 전에는 계정, 일정, 응시료를 순서대로 확인하세요." })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /OPIc 시험 신청/ })).toHaveAttribute("href", expect.stringContaining("ApplyServlet"));
  });
});
