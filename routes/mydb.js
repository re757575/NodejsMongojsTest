
module.exports = {

	createDB: function (name) {
	 var mongojs = require('mongojs');
	 var config = {
	    "hostname":"localhost",
	    "port":27017,
	    "db":"mydb"
	}

	var dbURL = "mongodb://" + config.hostname + ":" + config.port + "/" + config.db;
	var collections = ["users","pet"];
	console.log("db is "+name);	
	return  mongojs.connect(dbURL, collections);
	 
	}

};

