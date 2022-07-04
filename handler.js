const json = require("./test.json");
module.exports = { 
  main: function (event, context) {
    console.log(json);
    return json;
  }
}
