$(document).ready(function(){


  var phoneData = function(bodyHTML) {
    //get phone numbers from api  
    var theURL = "https://plainview.herokuapp.com/phonenum"
    // var theURL = "http://localhost:80/phonenum"
    function httpPOST(theURL) {
      var xmlHttp = new XMLHttpRequest();
      var params = {"bodyHTML": bodyHTML};
      xmlHttp.open( "POST", theURL, false ); // false for synchronous request
      xmlHttp.setRequestHeader("Content-type", "application/json");
      xmlHttp.send(JSON.stringify(params));
      return xmlHttp.responseText;
    }
    var response = httpPOST(theURL)
    var response_json = JSON.parse(response )
    console.log(response_json)
    for (i = 0; i < response_json.length; i++) {
      console.log(response_json[i])
      $( "#loaded_content ul" ).append( "<li>number....................................." + "<span class='digits'>"+response_json[i]["number"] +"</span></li>" );
    }
  }

  var getBody = function(url) {
    $.get( url, function( data ) {
      var bodyHTML = data;  
      console.log(bodyHTML)
      phoneData(bodyHTML)
    });
  }

  //get popup.html radio options
  $(".option").click(function(event){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      var activeTabId = activeTab.id; // or do whatever you need
      var activeURL = tabs[0].url
      chrome.storage.sync.set({key: activeURL}, function() {
        console.log(activeURL);
      });
      chrome.storage.sync.get(['key'], function(result) {
        console.log(result.key);
        url = result.key
        getBody(url)
      });

    });
  });


});