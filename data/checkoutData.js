
const checkoutData = {
  customer: {
    firstName: 'Manh',
    lastName: 'Dung',
    postalCode: '700000',
  },

  products: [
    {
      name: 'Sauce Labs Backpack',
      testId: 'add-to-cart-sauce-labs-backpack',
    },
    {
      name: 'Sauce Labs Bike Light',
      testId: 'add-to-cart-sauce-labs-bike-light',
    },
  ],

  expectedSuccessMessage: 'Thank you for your order!',
};

module.exports = { checkoutData };
