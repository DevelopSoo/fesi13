import { fireEvent, render, screen } from "@testing-library/react";
import { LoginButton } from ".";
import { AuthContext, AuthProvider } from "@/contexts/AuthContext";
import { renderWithAuth } from "@/testHelpers/renderWithAuth";
import { renderWithProviders } from "@/testHelpers/renderWithProviders";

describe("LoginButton 테스트", () => {
  test("인증되지 않은 경우 로그인 버튼이 렌더링되는지 테스트", () => {
    renderWithAuth(<LoginButton />);

    const loginButton = screen.getByRole("button", { name: "로그인" });
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveClass("bg-blue-500");
  });

  test("인증된 경우 로그아웃 버튼이 렌더링되는지 확인", () => {
    const authContextValue = {
      isAuthenticated: true,
      login: jest.fn(),
      logout: jest.fn(),
    };

    renderWithAuth(<LoginButton />, authContextValue);
    const logoutButton = screen.getByRole("button", { name: "로그아웃" });
    expect(logoutButton).toBeInTheDocument();
    expect(logoutButton).toHaveClass("bg-red-500");
  });

  test("로그인 버튼 클릭 시 login 함수가 실행되는지 확인", () => {
    const authContextValue = {
      isAuthenticated: false,
      login: jest.fn(),
      logout: jest.fn(),
    };

    renderWithAuth(<LoginButton />, authContextValue);

    const loginButton = screen.getByRole("button", { name: "로그인" });
    fireEvent.click(loginButton);

    expect(authContextValue.login).toHaveBeenCalledTimes(1);
  });

  test("로그인 버튼 클릭 시 로그아웃 버튼으로 잘 변경되는지 확인", () => {
    renderWithProviders(<LoginButton />);

    const loginButton = screen.getByRole("button", { name: "로그인" });
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveClass("bg-blue-500");

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "로그아웃" });
    expect(logoutButton).toBeInTheDocument();
    expect(logoutButton).toHaveClass("bg-red-500");
  });
});
