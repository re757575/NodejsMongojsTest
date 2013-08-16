
/*
 * GET users listing.
 */
var db =require('./mydb');
db = db.createDB("update");
var str = "<h3>update</h3>";

exports.index = function(req, res){
    db.users.update({name: "Michael2"}, {$set: {name: "James"}}, function(err, updated) {
      
      var result = str;
      if( err || !updated ){

         result += "No  users found";
         console.log("User not updated");

      } 
      else {

       result += "User updated";

      }
        res.send(result);
        res.end();
    });
};