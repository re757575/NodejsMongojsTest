
/*
 * GET users listing.
 */
var db =require('./mydb');
db = db.createDB("read");
var str = "<h3>read</h3>";

exports.index = function(req, res){
 
  var type =  req.query.type; 
  var q = req.query.q == undefined ?  q = "" : q = req.query.q;

  var obj = {};
  type == "all" ? obj = {} : obj[type] = q; // if type == "all" ,obj inint ,else obj[type]
  
  console.log(type+","+q); // {type : q}
  console.log(obj);



 /* db.activity.find().limit(9).sort({}, function(err, docs) {
  }); */
/*
  db.users.find(obj, function(err, users) {

  	  var result = str;
      users.sort({name: 1});
      if( err || !users || users == "") {

        result += "No  users found";
        console.log("No  users found");

      }
      else users.forEach( function(user) {

        result += JSON.stringify(user)+"<br>\n"; //obj to json
        console.log(user);
        console.log(user.name);
        console.log(user.sex);

      });

      res.send(result);	
      res.end();
    });


*/
  db.users.find(obj).limit(0).skip(0).sort({_id:-1}, function(err, users) {
      var result = str;

      if( err || !users || users == "") {

          result += "No  users found";
          console.log("No  users found");

      } else{
          result += users;
          console.log(users.length);
          console.log(users.reverse());
          console.log(users);
    
      }      
      res.send(users); 
      res.end();
  });
};