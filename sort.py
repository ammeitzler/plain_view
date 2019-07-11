import re
import nltk
import sys
from nltk.corpus import stopwords

matches = ""
# text = "this is a test (248)698-0988 so is this 1233211234 and this 123-123-2222"
# print(sys.argv[1])
text = sys.argv[1]

def extract_phone_numbers(string):
    r = re.compile(r'(\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4}|\(\d{3}\)\s*\d{3}[-\.\s]??\d{4}|\d{3}[-\.\s]??\d{4})')
    phone_numbers = r.findall(string)
    return [re.sub(r'\D', '', number) for number in phone_numbers]

def main(text):
	global matches
	matches = extract_phone_numbers(text)
	file = open("matches.txt", "w") 
	file.write(str(matches))
	file.close() 
	return matches

main(text)
print(matches)