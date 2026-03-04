import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from ".";

test("Input 컴포넌트에 값이 입력되지 않으면 X 버튼이 보이지 않아야 한다.", () => {
  render(<Input />);

  const input = screen.getByRole("textbox");
  const deleteButton = screen.queryByRole("button", { name: "입력값 지우기" });

  // 입력값이 비어있고
  expect(input).toHaveValue("");
  // X 버튼이 안보이는지 확인
  expect(deleteButton).not.toBeInTheDocument();
});

test("Input 컴포넌트에 입력값이 있을 때 X 버튼이 보이는지 확인한다.", () => {
  render(<Input defaultValue="입력값" />);

  const input = screen.getByRole("textbox");
  const deleteButton = screen.getByRole("button", { name: "입력값 지우기" });

  expect(input).toHaveValue("입력값");
  expect(deleteButton).toBeInTheDocument();
});

test("X 버튼 클릭 시 입력값이 지워지는지 확인한다", () => {
  render(<Input defaultValue="입력값" />);

  // 1. 가져오기
  const input = screen.getByRole("textbox");
  const deleteButton = screen.getByRole("button", { name: "입력값 지우기" });

  // 2. 클릭하기
  fireEvent.click(deleteButton);

  // 3-1. 입력값이 지워졌는지 확인
  expect(input).toHaveValue("");
  // 3-2. X 버튼이 사라졌는지 확인
  expect(deleteButton).not.toBeVisible();
});

test("Input 컴포넌트에서 에러 발생 시 에러 메세지가 잘 보이는지 확인", () => {
  render(<Input isError={true} errorMessage="입력값에 문제가 있습니다" />);

  const errorMessage = screen.getByText("입력값에 문제가 있습니다");
  expect(errorMessage).toBeInTheDocument();
});
