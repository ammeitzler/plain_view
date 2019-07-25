import re
import nltk
import sys
from nltk.corpus import stopwords
import phonenumbers

matches = ""
# text = "this is a tes (248)698-0988 so is this 510-748-8230 if it's before 9:30, or on 703-4800500 "
# print(sys.argv[1])
text = sys.argv[1]
print("1")

def extract_phone_numbers(string):
	match_array = []
	for match in phonenumbers.PhoneNumberMatcher(string, "US"):
		match_array.append(match)
	return match_array
    # r = re.compile(r'(\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4}|\(\d{3}\)\s*\d{3}[-\.\s]??\d{4}|\d{3}[-\.\s]??\d{4})')
    # phone_numbers = r.findall(string)
    # return [re.sub(r'\D', '', number) for number in phone_numbers]

def main(text):
	global matches
	matches = extract_phone_numbers(text)
	file = open("matches.txt", "w") 
	file.write(str(matches))
	file.close() 
	return matches

main(text)
print(matches)