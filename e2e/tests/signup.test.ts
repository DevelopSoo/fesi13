import { test, expect } from "@playwright/test";

test.describe("회원가입 페이지 E2E 테스트", () => {
  // 회원가입 페이지로 이동
  test.beforeEach(async ({ page }) => {
    await page.goto("/auth/signup");
  });

  test("회원가입 페이지가 올바르게 로드되는지 확인", async ({ page }) => {
    // 회원가입 페이지 텍스트가 보이는지 확인
    const heading = page.getByRole("heading", { name: "회원가입 페이지" });
    await expect(heading).toBeVisible();
  });

  test("로그인 링크 클릭 시 로그인 페이지로 이동하는지 확인", async ({
    page,
  }) => {
    const loginLink = page.getByRole("link", { name: "로그인 페이지로 이동" });
    await expect(loginLink).toBeVisible();

    await loginLink.click();

    // 로그인 페이지로 주소가 바뀌었는지 확인
    await expect(page).toHaveURL("/auth/login");
  });

  test("회원가입 폼이 올바르게 동작하는지 확인", async ({ page }) => {
    const emailInput = page.getByPlaceholder("이메일");
    const passwordInput = page.getByPlaceholder("비밀번호", { exact: true });
    const confirmPasswordInput = page.getByPlaceholder("비밀번호 확인");
    const submitButton = page.getByRole("button", { name: "회원가입" });

    // 입력
    // fireEvent.change(emailInput, { target: { value: " "}})
    await emailInput.fill("test@test.com");
    await passwordInput.fill("123123");
    await confirmPasswordInput.fill("123123");
    await submitButton.click();

    // 로그인 페이지로 자동으로 이동
    await expect(page).toHaveURL("/auth/login");
  });
});
