/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const createMenu = require('../src/restaurant');

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    assert.deepStrictEqual(typeof createMenu(), 'object');

    const output = createMenu({ food: {}, drink: {} });
    assert.deepStrictEqual(output.fetchMenu(), { food: {}, drink: {} });

    const menuObj = createMenu({ food: 'Arroz' });
    assert.deepStrictEqual(menuObj.fetchMenu(), { food: 'Arroz' });

    assert.deepStrictEqual(createMenu({}).consumption, []);

    const objetoRetornado2 = createMenu({});
    objetoRetornado2.order('coxinha');
    assert.deepStrictEqual(objetoRetornado2.consumption, ['coxinha']);

    const objetoRetornado3 = createMenu();
    objetoRetornado3.order('coxinha');
    objetoRetornado3.order('agua');
    objetoRetornado3.order('sopa');
    objetoRetornado3.order('sashimi');
    assert.deepStrictEqual(objetoRetornado3.consumption, ['coxinha', 'agua', 'sopa', 'sashimi']);

    const objetoRetornado4 = createMenu();
    objetoRetornado4.order('coxinha');
    objetoRetornado4.order('agua');
    objetoRetornado4.order('coxinha');
    assert.deepStrictEqual(objetoRetornado4.consumption, ['coxinha', 'agua', 'coxinha']);

    const objetoRetornado5 = createMenu({ food: ['coxinha'], drink: ['agua'], pay: [3, 2] });
    objetoRetornado5.order('coxinha');
    objetoRetornado5.order('agua');
    assert.deepStrictEqual(objetoRetornado5.pay(), 5.5);
  });
});
