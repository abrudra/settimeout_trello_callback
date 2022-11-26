const problem3  = require("../problem3");

problem3("isks839", function (error, data) {
  if (error) {
    console.error("Error incounterd: ", error);
    return;
  } else {
    console.log(data);
  }
});


