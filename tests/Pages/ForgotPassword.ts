import { Locator, Page } from "@playwright/test";

export class ForgotPasswordPage {
    readonly page: Page;
    readonly heading: Locator;
    readonly emailField: Locator;
    readonly continueButton: Locator;
    readonly backButton: Locator;
    readonly warningMessage: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.getByRole('heading', { name: 'Forgot Your Password?' });
        this.emailField = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.backButton = page.getByRole('link', { name: 'Back' });
        this.warningMessage = page.getByText('Warning: The E-Mail Address was not found in our records, please try again!');
        this.successMessage = page.getByText('An email with a confirmation link has been sent your email address.');
    }

    async fillEmail(email: string) {
        await this.emailField.fill(email);
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async clickBack() {
        await this.backButton.click();
    }
}
