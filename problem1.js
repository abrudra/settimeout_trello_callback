/*Problem 1: Write a function that will return a particular board's information based on the boardID that is passed 
from the given list of boards in boards.json and then pass control back to the code that called 
it by using a callback function.*/

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "Data/boards.json");

function problem1(id, callback) {
  setTimeout(() => {
    fs.readFile(filePath, "utf8", function (error, data) {
      if (error) {
        console.error("File not found :", error);
        return;
      }
      let result = JSON.parse(data).find((ele) => ele.name === id);
      if (result) {
        callback(null, result);
        return;
      } else {
        callback(new Error("File not found: ", result));
      }
    });
  }, 2 * 1000);
}

module.exports =  problem1 ;
