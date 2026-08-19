import { test, expect } from "@playwright/test";
import { ForgotPasswordPage } from "./Pages/ForgotPassword";

test.describe("Forgot password", () => {
    test("shows a warning when the email is not registered", async ({ page }) => {
        const forgotPasswordPage = new ForgotPasswordPage(page);

        await test.step("Goto the website", async () => {
            await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten");
        });

        await test.step("Submit an unregistered email", async () => {
            await forgotPasswordPage.fillEmail(`not-registered-${Date.now()}@mail.com`);
            await forgotPasswordPage.clickContinue();
        });

        await test.step("Verify the warning message", async () => {
            await expect(forgotPasswordPage.warningMessage).toBeVisible();
        });
    });

    test("sends a reset email when the email is registered", async ({ page }) => {
        const forgotPasswordPage = new ForgotPasswordPage(page);

        await test.step("Goto the website", async () => {
            await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten");
        });

        await test.step("Submit a registered email", async () => {
            await forgotPasswordPage.fillEmail("test@mail.com");
            await forgotPasswordPage.clickContinue();
        });

        await test.step("Verify the success message", async () => {
            await expect(forgotPasswordPage.successMessage).toBeVisible();
        });
    });
});
