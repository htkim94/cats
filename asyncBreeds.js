// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callBack) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    //Pass the data into the callback
    if (!error) callBack(data);
  });
};

// callback function to use to return data that has been read
const printBreedData = (data) => {
  console.log('Return value', data);
};

breedDetailsFromFile('Bombay', printBreedData);