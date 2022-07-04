const json = require("./test.json");
module.exports = { 
  main: function (event, context) {
    return JSON.parse(json);
  }
}
