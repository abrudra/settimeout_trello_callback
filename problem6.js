/* 
	Problem 6: Write a function that will use the previously written functions to get the following information. 
    You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for all lists simultaneously
*/

const boardFunction = require("./problem1");
const listFunction = require("./problem2");
const cardFunction = require("./problem3");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "Data/boards.json");

function problem6(name) {
  setTimeout(() => {
    fs.readFile(filePath, "utf-8", function (error, data) {
      if (error) {
        console.error("File not found: ", error);
      }
      let boardData = JSON.parse(data);
      let thanosData = boardData.filter((ele) => ele.name == name);
      console.log(thanosData);

      let thanosId = thanosData[0].id;
      listFunction(thanosId, function (error, data) {
        if (error) {
          console.error("Thanos Id not found: ", error);
        }
        console.log(data);
        let array = [];
        data.forEach((ele) => {
          array.push(ele.id);
        });

        array.forEach((ele) =>{
          cardFunction(ele, function (error, data) {
            if (error) {
              console.error("List Id not found: ", error);
            }

            console.log(ele, data);
          })
      });
      });
    });
  }, 2 * 1000);
}

module.exports = problem6;
