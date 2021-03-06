var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dream-logger');
// require models
var REPL = require("repl");

var repl = REPL.start("> ");

// model requirements
repl.context.db = require("../models");
repl.context.db.Tag = require("../models/tag");

// listen for an `exit` event
repl.on("exit", function () {
  console.log("Ciao!");
  // disconnect the database connection
  mongoose.disconnect(function() {
    // exit the repl
    process.exit();
  });
});
