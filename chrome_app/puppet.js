// use python to get all pages and puppeteer to loop through get content?
// const puppeteer = require('puppeteer');
// var util = require('util');

// const url = ""

// setInterval(function() {
//     chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
//         console.log("123")
//         console.log(msg.action)
//         url = msg.action
//     });
// }, 1000); 



// (async() => {
  // var url = "http://www.customarttools.com/contact/"
  // const browser = await puppeteer.launch({ headless: false});
  // const page = await browser.newPage();
  // var cur = page.url()
  // await page.goto(url, {waitUntil: 'networkidle2'});
  // let bodyHTML = await page.evaluate(() => document.body.innerHTML);
  // console.log(bodyHTML)

  // $.get( url, function( data ) {
  //   let bodyHTML = data;  
  //   console.log(bodyHTML)
  // });


  //pass data to python sort.py
  // var spawn = require(['child_process']).spawn
  // var child = spawn('python',["sort.py", bodyHTML])

  // util.log('initiated model')
  // /* returned list of matches*/
  // child.stdout.on('data',function(data){
  //     var matches = data.toString('utf8');// buffer to string
  //     util.log("returned " + matches);
  // });
  // util.log('returned model')

// })();


