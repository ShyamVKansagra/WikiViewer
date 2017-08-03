
$("#btnSrch").click(function(){
  var searchStr = document.getElementById("srchStr").value;
  
  var finalSrch = searchStr.replace(" ","+");
  console.log(finalSrch);
  var theUrl = "https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+finalSrch;
    $.get(theUrl, function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});
