/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const circle = require('../src/circle');

describe('#circle', () => {
  it('given a radius, should return an object with circles info', () => {
    assert.strictEqual(typeof (circle(1)), 'object');
    assert.strictEqual(Object.keys(circle(1)).length, 3);
    assert.strictEqual(circle(), undefined);
    assert.strictEqual(typeof (circle(2)), 'object');
    assert.strictEqual(circle(2).circumference, (12.56));
    assert.strictEqual(typeof (circle(3)), 'object');
    assert.strictEqual(circle(3).area, (3.14 * 3 * 3));
    assert.deepStrictEqual(circle(3), {
      radius: 3,
      area: 3.14 * 3 * 3,
      circumference: 2 * 3.14 * 3,
    });
  });
});
