import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("OPIc exam guide", () => {
  it("opens the official-information guide from the sidebar", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "OPIc 수험 가이드" }));

    expect(await screen.findByRole("heading", { name: "시험 정보는 한곳에, 말하기 훈련은 OOM에서." })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /시험 신청/ })).toHaveAttribute("href", expect.stringContaining("ApplyServlet"));
  });
});
