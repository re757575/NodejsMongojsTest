
module.exports = function(){

	 var mongojs = require('mongojs');
	 var config = {
	    "hostname":"localhost",
	    "port":27017,
	    "db":"mydb"
	}

	var dbURL = "mongodb://" + config.hostname + ":" + config.port + "/" + config.db;
	var collections = ["users"];
	var db =mongojs.connect(dbURL, collections);
};

