
$(function(){
  $("#q").attr('disabled','disabled');

  $("a").click(function(){

      var type = $("#type").val();
      var q = $("#q").val();
      console.log(type+","+q);
      var url = $(this).attr("class")+"?type="+type+"&q="+q;
      console.log(url);
      $("#loadpage").load(url);    
  });
  $("#q").focus(function(){
       $(this).attr("placeholder",""); 

  });    
  $("#q").focusout(function(){
       $(this).attr("placeholder","請輸入關鍵字"); 
       
  });  

  $("#type").change(function(){
      $(this).val() == "all" ?  $("#q").attr('disabled','disabled').attr("placeholder","") : $("#q").removeAttr('disabled').attr("autofocus","");
  });
  
});







function TableFilterCtrl($scope, $http,$filter) {

  $scope.friends = [];
  $http.get('/read?type=all').success(function(data) {
    $scope.friends = data;
  });
  
  

	$scope.read = function(){
	  $http.get('/read?type=all').success(function(data) {
			$scope.friends = data;
			console.log("read:\n"+JSON.stringify(data));
		});
	};

	
	$scope.create = function(){
	  $http.get('/create?type=all&q=').success(function(data) {
			console.log("create:\n"+data);
			$scope.read();
		});

	};

	
	$scope.del = function(){
	  $http.get('/delete?type=all&q= ').success(function(data) {
			
			console.log("del:\n"+data);
			$scope.read();
		});
	};	
}




 