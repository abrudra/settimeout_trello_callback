/* 
	Problem 4: Write a function that will use the previously written functions to get the following information.
     You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind list simultaneously
*/
const boardFunction = require("./problem1");
const listFunction = require("./problem2");
const cardFunction= require("./problem3");
const fs = require("fs");

const path = require("path");
const filePath = path.join(__dirname, "Data/boards.json");

//const listData = require("./Data/lists.json");

function problem4(name) {
  setTimeout(() => {
    fs.readFile(filePath, "utf-8", function (error, data) {
      if (error) {
        console.log("File not found: ", error);
      }
      let nameData = JSON.parse(data);
      let thonosData = nameData.filter((ele) => ele.name === name);
      let thanosId = thonosData[0].id;
      console.log(thonosData);

      listFunction(thanosId, function (error, data) {
        if (error) {
          console.log("Thonos ID not got: ", error);
        }
        console.log(data);
        let mindID = data.filter((ele) => ele.name === "Mind")[0].id;

        cardFunction(mindID, function (error, data) {
          if (error) {
            console.error("Mind ID not got: ", error);
          }
          console.log(data);
        });
      });
    });
  }, 2 * 1000);
}

module.exports = problem4;
