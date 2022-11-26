/*	Problem 2: Write a function that will return all lists that belong to a board based on the boardID that is passed to it 
from the given data in lists.json. Then pass control back to the code that called it by using a callback function.*/

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "Data/lists.json");

function problem2(boardID, callback) {
  setTimeout(() => {
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        console.log("file not found: ", error);
        return;
      }
      let listData = JSON.parse(data);

      let result = Object.values(listData[boardID]);
      if (result) {
        callback(null, result);
        return;
      } else {
        callback(new Error("File not found: ", result));
      }
    });
  }, 2 * 1000);
}

module.exports = problem2 
