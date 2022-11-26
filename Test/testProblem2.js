const problem2 = require("../problem2");

problem2("mcu453ed", function (error, data) {
  if (error) {
    console.error("Error incounterd: ", error);
    return;
  } else {
    console.log(data);
  }
});

