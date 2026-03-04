import { render, screen } from "@testing-library/react";
import TodoItem from ".";

test("할 일 항목 상태 테스트", () => {
  render(<TodoItem task="저녁 맛있게 먹기" completed={true} />);

  const taskText = screen.getByText("저녁 맛있게 먹기");
  expect(taskText).toHaveTextContent("저녁 맛있게 먹기");

  // 체크박스가 체크가 되어있는지 확인
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).toBeChecked();

  // 체크박스가 비활성화 되어있는지 확인
  expect(checkbox).toBeDisabled();

  const editButton = screen.getByRole("button", { name: "수정" });
  expect(editButton).toBeDisabled();

  const listItem = screen.getByRole("listitem");
  expect(listItem).toHaveClass("completed");
});
