import { test, expect } from "@playwright/test";

test("홈페이지가 올바르게 렌더링되는지 테스트", async ({ page }) => {
  // 페이지를 방문
  await page.goto("http://localhost:3000");

  const title = page.locator("h1");
  await expect(title).toBeVisible();
  await expect(title).toHaveText("게시글 목록");
});
