import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const PAGES = [
  { name: "Home", path: "/" },
];

for (const pageInfo of PAGES) {
  test(`${pageInfo.name} loads`, async ({ page }) => {
    await page.goto(pageInfo.path);
    await expect(page.locator("body")).toContainText(/GymVision/i);
    await expect(page.locator("h1").first()).toBeVisible();
  });

  test(`${pageInfo.name} has no critical or serious a11y violations`, async ({ page }) => {
    await page.goto(pageInfo.path);

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .disableRules(["color-contrast"])
      .analyze();

    const breaking = results.violations.filter(
      (violation) => violation.impact === "critical" || violation.impact === "serious",
    );
    expect(breaking).toEqual([]);
  });
}
