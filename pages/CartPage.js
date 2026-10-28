
class CartPage {
  constructor(page) {
    this.page = page;

    this.cartTitle = page.getByText('Your Cart', {
      exact: true,
    });

    this.checkoutButton = page.getByTestId('checkout');
    this.continueShoppingButton =
      page.getByTestId('continue-shopping');
  }

  productByName(name) {
    return this.page.getByText(name, {
      exact: true,
    });
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}

module.exports = { CartPage };
