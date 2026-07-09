import { Locator, Page } from "@playwright/test";

export class RegisterPage {
    readonly page: Page;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly emailField: Locator;
    readonly telephoneField: Locator;
    readonly passwordField: Locator;
    readonly confirmPasswordField: Locator;
    readonly subscribeCheckbox: Locator;
    readonly privacyPolicyCheckbox: Locator;
    readonly continueButton: Locator;
    readonly warningMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameField = page.getByRole('textbox', { name: 'First Name*' })
        this.lastNameField = page.getByRole('textbox', { name: 'Last Name*' })
        this.emailField = page.getByRole('textbox', { name: 'E-mail*' })
        this.telephoneField = page.getByRole('textbox', { name: 'Telephone*' })
        this.passwordField = page.getByRole('textbox', { name: 'Password*' })
        this.confirmPasswordField = page.getByRole('textbox', { name: 'Password Confirm*' })
        this.subscribeCheckbox = page.getByText('Yes')
        this.privacyPolicyCheckbox = page.getByText('I have read and agree to the Privacy Policy')
        this.continueButton = page.getByRole('button', { name: 'Continue' })
        this.warningMessage = page.getByText('Warning: E-Mail Address is')
    }

    async fillFirstName(firstName: string) {
        await this.firstNameField.fill(firstName);
    }

    async fillLastName(lastName: string) {
        await this.lastNameField.fill(lastName);
    }

    async fillEmail(email: string) {
        await this.emailField.fill(email);
    }

    async fillTelephone(telephone: string) {
        await this.telephoneField.fill(telephone);
    }

    async fillPassword(password: string) {
        await this.passwordField.fill(password);
    }

    async fillConfirmPassword(confirmPassword: string) {
        await this.confirmPasswordField.fill(confirmPassword);
    }

    async checkSubscribe() {
        await this.subscribeCheckbox.check();
    }

    async checkPrivacyPolicy() {
        await this.privacyPolicyCheckbox.check();
    }

    async clickContinue() {
        await this.continueButton.click();
    }
}

