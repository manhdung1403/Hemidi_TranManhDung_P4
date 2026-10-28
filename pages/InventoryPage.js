
class InventoryPage {
  constructor(page) {
    this.page = page;

    this.inventoryTitle = page.getByText('Products', {
      exact: true,
    });

    this.cartBadge = page.getByTestId('shopping-cart-badge');
    this.cartLink = page.getByTestId('shopping-cart-link');
  }

  async addProduct(product) {
    const addButton = this.page.getByTestId(product.testId);

    await addButton.click();
  }

  async addProducts(products) {
    for (const product of products) {
      await this.addProduct(product);
    }
  }

  async openCart() {
    await this.cartLink.click();
  }
}

module.exports = { InventoryPage };
