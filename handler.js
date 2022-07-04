module.exports = { 
  main: function (event, context) {
    return JSON.parse(process.env.testdata);
  }
}
