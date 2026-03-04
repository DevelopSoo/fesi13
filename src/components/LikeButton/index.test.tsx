import { fireEvent, render, screen } from "@testing-library/react";
import { LikeButton } from ".";

test("좋아요 버튼을 누르기 전에는 버튼에 '좋아요'가 표시되고, bg-gray-400 클래스가 적용되는지 확인", () => {
  render(<LikeButton />);

  const likeButton = screen.getByRole("button", { name: "좋아요" });

  expect(likeButton).toBeInTheDocument();
  expect(likeButton).toHaveClass("bg-gray-400");
});

test("'좋아요' 버튼을 클릭하면 '좋아요 취소'로 텍스트가 변경되고, bg-red-400 클래스가 적용되는지 확인", () => {
  render(<LikeButton />);

  const likeButton = screen.getByRole("button", { name: "좋아요" });
  // 1) 버튼을 클릭하면
  fireEvent.click(likeButton);
  //2) 바뀌는지 확인
  expect(likeButton.textContent).toBe("좋아요 취소");
  expect(likeButton).toHaveClass("bg-red-400");
});

test("'좋아요' 버튼을 한 번 클릭 후 다시 클릭하면 '좋아요' 버튼으로 되돌아오는지 확인", () => {
  render(<LikeButton />);

  const likeButton = screen.getByRole("button", { name: "좋아요" });

  fireEvent.click(likeButton);
  expect(likeButton.textContent).toBe("좋아요 취소");
  fireEvent.click(likeButton);
  expect(likeButton.textContent).toBe("좋아요");
});
