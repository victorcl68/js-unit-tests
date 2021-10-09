/* eslint-disable max-len */

const createMenu = (menuObj) => {
  const myMenu = {
    fetchMenu: () => menuObj,
    consumption: [],
    order(string) { this.consumption.push(string); },
    pay() {
      let total = 0;
      const array = this.consumption;
      // https://www.w3schools.com/js/js_this.asp

      array.forEach((each) => {
        if (each === menuObj.drink[0]) total += menuObj.pay[0];
      });
      array.forEach((each) => {
        if (each === menuObj.food[0]) total += menuObj.pay[1];
      });
      // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

      total += (total * 0.1);
      return total;
    },
  };
  return myMenu;
};

// I took a look at this pull request to have a base, as I was not able to proceed:
// https://github.com/tryber/sd-010-b-project-js-unit-tests/pull/117/files

module.exports = createMenu;
