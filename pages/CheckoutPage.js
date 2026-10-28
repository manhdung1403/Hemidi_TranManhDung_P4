
class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.firstNameInput = page.getByTestId('firstName');
    this.lastNameInput = page.getByTestId('lastName');
    this.postalCodeInput = page.getByTestId('postalCode');

    this.continueButton = page.getByTestId('continue');
    this.finishButton = page.getByTestId('finish');

    this.overviewTitle = page.getByText('Checkout: Overview', {
      exact: true,
    });

    this.completeTitle = page.getByTestId('complete-header');
  }

  async fillCustomerInformation(customer) {
    await this.firstNameInput.fill(customer.firstName);
    await this.lastNameInput.fill(customer.lastName);
    await this.postalCodeInput.fill(customer.postalCode);

    await this.continueButton.click();
  }

  productByName(name) {
    return this.page.getByText(name, {
      exact: true,
    });
  }

  async finishOrder() {
    await this.finishButton.click();
  }
}

module.exports = { CheckoutPage };
