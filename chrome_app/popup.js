$(document).ready(function(){


  var phoneData = function(bodyHTML) {
    //get phone numbers from api  
    var theURL = "https://plainview.herokuapp.com/phones"
    function httpPOST(theURL) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "POST", theURL, false ); // false for synchronous request
      xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      console.log("123")
      xmlHttp.send("bodyHTML=Henry&lname=Ford");
      console.log(xmlHttp.responseText)
      return xmlHttp.responseText;
    }
    var getResponse = httpPOST(theURL)

    // var spawn = require(['child_process']).spawn
    // var child = spawn('python',["sort.py", bodyHTML])

    // util.log('initiated model')
    // /* returned list of matches*/
    // child.stdout.on('data',function(data){
    //     var matches = data.toString('utf8');// buffer to string
    //     util.log("returned " + matches);
    // });
    // util.log('returned model')

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