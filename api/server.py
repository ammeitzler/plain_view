from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/phone", methods=['GET'])
def getPhoneNumbers():
    return "phone!"

@app.route("/allcontent", methods=['GET'])
def getContent():
    return "all content from html"

if __name__ == "__main__":
	app.run(host='0.0.0.0', port=80)