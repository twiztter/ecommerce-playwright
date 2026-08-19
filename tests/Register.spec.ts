import { test, expect } from "@playwright/test";
import { RegisterPage } from "./Pages/Register";

test("Register new user", async ({ page }) => {
    await test.step('Goto the website', async () => {
        await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    });

    await test.step('Fill the form', async () => {
        const registerPage = new RegisterPage(page);
        await registerPage.fillFirstName('Alexis');
        await registerPage.fillLastName('Silva');
        await registerPage.fillEmail('test@mail.com');
        await registerPage.fillTelephone('8112342334');
        await registerPage.fillPassword('password123');
        await registerPage.fillConfirmPassword('password123');
        await registerPage.checkSubscribe();
        await registerPage.checkPrivacyPolicy();
        await registerPage.clickContinue();
    });

    await test.step('Verify the warning message', async () => {
        const registerPage = new RegisterPage(page);
        await expect(registerPage.warningMessage).toBeVisible();
    })

    await test.step('Close the browser', async () => {
        await page.close();
    });

});
