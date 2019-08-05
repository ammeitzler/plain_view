from flask import Flask
import phonenumbers

app = Flask(__name__)


matches = ""

def extract_phone_numbers(string):
	match_array = []
	for match in phonenumbers.PhoneNumberMatcher(string, "US"):
		match_array.append(match)
	return match_array


@app.route("/")
def hello():
    return "Hello World!"

@app.route("/phone", methods=['GET'])
def getPhoneNumbers():
    return "phone!"

@app.route("/phones", methods=['POST'])
def getPhones(bodyHTML):
	console.log(bodyHTML)
	return "phonessss"

# @app.route("/allcontent", methods=['GET'])
# def getContent():
#     return "all content from html"

if __name__ == "__main__":
	app.run(host='0.0.0.0', port=80)