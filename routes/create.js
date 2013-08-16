
/*
 * GET users listing.
 */
var db =require('./mydb');
db = db.createDB("create");
var str = "<h3>create</h3>";

exports.index = function(req, res){
  obj = {};
  obj["name"] = "Michael2";
  obj["sex"] = "boy";
  console.log(obj);

  db.users.insert(obj, function(err, saved) {
    var result = str;

    if( err || !saved ) {

      console.log("User not saved");
      result += JSON.stringify(obj)+ " not saved";

    }
    else {

      result += JSON.stringify(obj) +" is saved";
    }
    res.send(result);
    res.end();
  });



};