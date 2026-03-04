import { render, screen } from "@testing-library/react";
import LoginForm from ".";

test("로그인 폼이 올바르게 렌더링되는지 확인", () => {
  render(<LoginForm />);

  // 라벨을 이용해서 input 요소 찾기
  const emailByLabel = screen.getByLabelText("이메일:");

  // 플레이스홀더를 이용해서 input 요소 찾기
  const emailByPlaceholder = screen.getByPlaceholderText("이메일을 입력하세요");

  // 역할을 이용해서 버튼 찾기
  const loginButton = screen.getByRole("button", { name: "로그인" });

  // 테스트 id로 input 찾기
  const emailByTestId = screen.getByTestId("email-input");

  expect(emailByLabel).toBeInTheDocument();
  expect(emailByPlaceholder).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
  expect(emailByTestId).toBeInTheDocument();

  // emailByLabel, emailByPlaceholder, emailByTestId가 동일한 요소인지 확인
  expect(emailByLabel).toBe(emailByPlaceholder);
  expect(emailByLabel).toBe(emailByTestId);
});
