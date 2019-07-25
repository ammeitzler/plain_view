from bs4 import BeautifulSoup
import urllib.request
import requests
import json


################## scraping beautiful soup 12/20/18
#gets all links from website
resp = urllib.request.urlopen("http://angeline-meitzler.com")
soup = BeautifulSoup(resp, from_encoding=resp.info().get_param('charset'))

pages = []
for link in soup.find_all('a', href=True):
    print(link['href'])
    pages.append(link['href'])

print(pages)

#iterate through links to get all website contents
# page = requests.get("http://angeline-meitzler.com")
# soup = BeautifulSoup(page.content, 'html.parser')

# for page in pages:
# 	page_content = requests.get("http://angeline-meitzler.com/"+page)
# 	soup = BeautifulSoup(page_content.content, 'html.parser')
# 	print(soup.get_text())

# new url  
url = "http://angeline-meitzler.com"    
wp = urllib.request.urlopen(url)
pw = wp.read()
data = requests.get(pw).json()

print(data)

