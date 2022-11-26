/* 
	Problem 5: Write a function that will use the previously written functions to get the following information. 
    You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind and Space lists simultaneously
*/

const boardFunction = require("./problem1");
const listFunction = require("./problem2");
const cardFunction = require("./problem3");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "Data/boards.json");

function problem5(name, stoneName1, stoneName2) {
  setTimeout(() => {
    fs.readFile(filePath, "utf-8", function (error, data) {
      if (error) {
        console.log("FIle not found: ", error);
      }
      let boardData = JSON.parse(data);

      let thanosData = boardData.filter((ele) => ele.name === name);
      let thanosId = thanosData[0].id;

      console.log(thanosData);

      //  boardFunction("mcu453ed", function (error, data) {
      //    if (error) {
      //      console.error("Thanos Id not got: ");
      //    }
      //    console.log(data);
      //  });

      listFunction(thanosId, function (error, data) {
        if (error) {
          console.error("Thanos Id not got: ", error);
        }

        console.log(data);
        let idArray = [];

        let stoneName1Id = data.filter((ele) => ele.name === stoneName1)[0].id;
        let stoneName2Id = data.filter((ele) => ele.name === stoneName2)[0].id;
        // console.log(stoneName1Id,stoneName2Id)

        cardFunction(stoneName1Id, function (error, data) {
          if (error) {
            console.error("Stone Id Not got: ", error);
          }

          console.log("Mind Stone Details: ", data);
        });

        cardFunction(stoneName2Id, function (error, data) {
          if (error) {
            console.error("stone Id Not got: ", error);
          }
          console.log("Space Stone Detailes: ", data);
        });
      });
    });
  }, 2 * 1000);
}

module.exports = problem5;
