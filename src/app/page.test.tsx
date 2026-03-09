import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("MSW 모킹 테스트", () => {
  test("테스트", () => {
    render(<Home />);
    const element = screen.getByText("테스트");
    expect(element).toBeInTheDocument();
  });
});
