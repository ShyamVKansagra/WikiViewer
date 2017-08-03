
//$("#btnSrch").click(function(){
function fetchWiki() {
	console.log("something");
  var searchStr = document.getElementById("srchStr").value;
  
  var finalSrch = searchStr.replace(" ","+");
  console.log(finalSrch);
  $.ajax({
    url: "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+finalSrch,

    dataType: "jsonp",
    success: function( response ) {

    	for(var i=1; i<=10; i++) {
    	document.getElementById("a"+i).href = response[3][i-1];
    	document.getElementById("p"+i+"h").innerHTML = response[1][i-1];
    	document.getElementById("p"+i+"c").innerHTML = response[2][i-1];
        //console.log(response[1][1]); // server response
    }
    document.getElementById("homeDiv").style.paddingTop = "25px";
    document.getElementById("Wikilinks").style.display = "block";

	}
});

//  var theUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+finalSrch;
  //  $.get(theUrl, function(data, status){
    //    alert("Data: " + data + "\nStatus: " + status);
    //});
}
