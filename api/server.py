from flask import Flask
import phonenumbers
from flask import request
import json


app = Flask(__name__)

matches = ""

def extract_phone_numbers(bodyHTML):
	match_array = []
	t_array = []

	for match in phonenumbers.PhoneNumberMatcher(bodyHTML, "US"):
		print(phonenumbers.format_number(match.number, phonenumbers.PhoneNumberFormat.E164))
		m = phonenumbers.format_number(match.number, phonenumbers.PhoneNumberFormat.E164)
		match_array.append(m)
		item = {'number':m}
		t_array.append(item)
	jsonData=json.dumps(t_array)
	return jsonData

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
        print(matches)
        return matches


# @app.route("/allcontent", methods=['GET'])
# def getContent():
#     return "all content from html"

if __name__ == "__main__":
	app.run(host='0.0.0.0', port=80)