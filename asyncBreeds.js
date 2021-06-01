// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callBack) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    //Pass the data into the callback
    if (error) {
      callBack(undefined);
    } else {
      callBack(data);
    }
  });
};

module.exports = breedDetailsFromFile;