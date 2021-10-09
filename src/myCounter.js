const myCounter = () => {
  var myArray = [];
  for (var counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (var secondCounter = 2; secondCounter <= 3; secondCounter += 1) {
      myArray.push(secondCounter);
    }
  }
  return myArray;
};

module.exports = myCounter;
