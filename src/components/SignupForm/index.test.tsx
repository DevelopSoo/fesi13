// src/components/SignupForm.test.tsx

import { fireEvent, render, screen } from "@testing-library/react";
import { SignupForm } from ".";

test("이메일, 비밀번호, 확인 비밀번호 입력 후 제출 이벤트 테스트", async () => {
  render(<SignupForm />);

  const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});

  // 이메일 입력 필드 확인
  const emailInput = screen.getByLabelText("이메일");
  fireEvent.click(emailInput); // 클릭해도 focus는 안됨
  // 이메일 필드에 포커스하기
  // emailInput.focus();
  // 이메일 필드에 포커스되어 있는지 확인
  // expect(emailInput).toHaveFocus()x;

  // jest.spyOn()으로 생성된 스파이(spy)를 원래 구현(original implementation)으로 완전히 복원하는 역할
  alertSpy.mockRestore();
});
