/* 
	Problem 3: Write a function that will return all cards that belong to a particular list based on the listID
     that is passed to it from the given data in cards.json. Then pass control back to the code that called it by 
     using a callback function.
*/

const fs = require("fs");
const path = require("path");

const filePathe = path.join(__dirname, "Data/cards.json");

function problem3(listID, callback) {
  setTimeout(() => {
    fs.readFile(filePathe, "utf-8", function (error, data) {
      if (error) {
        console.error("File not found: ", error);
        return;
      }

      let cardData = JSON.parse(data);

      if (cardData[listID]) {
        let result = Object.values(cardData[listID]);
        callback(null, result);
      } else {
        callback("There is AN ERRor", null);
      }
    });
  }, 2 * 1000);
}

module.exports = problem3;
