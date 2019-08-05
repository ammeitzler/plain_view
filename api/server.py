from flask import Flask
import phonenumbers
from flask import request

app = Flask(__name__)

matches = ""

def extract_phone_numbers(bodyHTML):
	match_array = []
	for match in phonenumbers.PhoneNumberMatcher(bodyHTML, "US"):
		match_array.append(match)
	return match_array

@app.route("/")
def hello():
    return "break bread wit me"

@app.route("/phonenum", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        user_agent_received = request.get_json()
        bodyHTML = user_agent_received["bodyHTML"]

        """ send bodyhtml to phone extract lib """
        global matches
        matches = extract_phone_numbers(bodyHTML)
        matches = ','.join(str(v) for v in matches)
        print(matches)
        return matches


# @app.route("/allcontent", methods=['GET'])
# def getContent():
#     return "all content from html"

if __name__ == "__main__":
	app.run(host='0.0.0.0', port=80)