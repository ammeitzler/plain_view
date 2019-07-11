// use python to get all pages and puppeteer to loop through get content?
const puppeteer = require('puppeteer');
var util = require('util');

(async() => {
  var url = "http://www.customarttools.com/contact/"
  // var url = "http://google.com"
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  // var cur = page.url()
  await page.goto(url, {waitUntil: 'networkidle2'});
  let bodyHTML = await page.evaluate(() => document.body.innerHTML);
  // console.log(bodyHTML)


  //find phone numbers using regrex
  // var regex = /+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/; 
  // var text = bodyHTML;
  // text = text.search(regex);
  // console.log(text)

  //find phone numbers using api
  // const extractor = require('phone-number-extractor');
  // extractor.getCandidates(
  //     bodyHTML,
  //     'US',
  //     true // Set this param to true for advanced result formatting options
  // )
  // .then(function(res){
  //     // console.log(res);
  // })
  // .catch(function(err){
  //     throw err;
  // });

  //pass data to python sort.py
  var spawn = require('child_process').spawn
  var child = spawn('python',["sort.py", bodyHTML])

  util.log('initiated model')
  /* returned list of matches*/
  child.stdout.on('data',function(data){
      var matches = data.toString('utf8');// buffer to string
      util.log("returned " + matches);
  });
  util.log('returned model')

  // await browser.close();
})();


// 310.951.3985
//using python to javascript loaded scrape html
// from selenium import webdriver
// client = webdriver.PhantomJS()
// client.get(url)
// soup = bs(client.page_source)

