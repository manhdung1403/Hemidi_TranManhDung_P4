const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

const { users } = require('../data/users');
const { checkoutData } = require('../data/checkoutData');

test('CHECKOUT_001 - Them 2 san pham va thanh toan thanh cong', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login(
    users.standardUser.username,
    users.standardUser.password
  );
  await expect(inventoryPage.inventoryTitle).toBeVisible();

  await inventoryPage.addProducts(checkoutData.products);
  await expect(inventoryPage.cartBadge).toHaveText(
    String(checkoutData.products.length)
  );

  await inventoryPage.openCart();
  await expect(cartPage.cartTitle).toBeVisible();
  for (const product of checkoutData.products) {
    await expect(cartPage.productByName(product.name)).toBeVisible();
  }

  await cartPage.checkout();
  await checkoutPage.fillCustomerInformation(checkoutData.customer);
  await expect(checkoutPage.overviewTitle).toBeVisible();
  for (const product of checkoutData.products) {
    await expect(checkoutPage.productByName(product.name)).toBeVisible();
  }

  await checkoutPage.finishOrder();
  await expect(checkoutPage.completeTitle).toHaveText(
    checkoutData.expectedSuccessMessage
  );
  await expect(page).toHaveURL(/.*checkout-complete\.html$/);
});
