
const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { users } = require('../data/users');
test.describe('Login Tests', () => {
    let loginPage;
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('LOGIN_001 - Dang nhap that bai voi locked_out_user', async ({ page }) => {
        await loginPage.login(
            users.lockedOutUser.username,
            users.lockedOutUser.password
        );
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toHaveText(
            'Epic sadface: Sorry, this user has been locked out.'
        );
        await expect(page).toHaveURL('https://www.saucedemo.com/');
    });
});