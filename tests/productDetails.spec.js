/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.strictEqual(Array.isArray(productDetails(1, 2)), true);
    assert.strictEqual(productDetails(0, 1).length, 2);
    assert.strictEqual(typeof productDetails()[0], 'object');
    assert.strictEqual(typeof productDetails()[1], 'object');
    assert.strictEqual(productDetails()[0] !== productDetails()[1], true);
    assert.strictEqual(productDetails()[0].details.productId.endsWith('123'), true);
    assert.strictEqual(productDetails()[1].details.productId.endsWith('123'), true);
  });
});
