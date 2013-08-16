
/*
 * GET users listing.
 */
var db =require('./mydb');
db = db.createDB("delete");
var str = "<h3>delete</h3>";

exports.index = function(req, res){

    var type =  req.query.type;
    var q = req.query.q == undefined ?  q = "" : q = req.query.q;

    var obj = {};
    type == "all" ? obj = {} : obj[type] = q;

    var result = str;

    db.users.remove(obj,function(err, users){

          if( err || !users || users == "") {

            result += "No  users found";
            console.log("No  users found");

          }else{
            if(type == "all")
              result += "users is all removed";
            else
              result += type+"="+q+" is removed";

          }     

        res.send(result);
        res.end();

    });
 
   

};