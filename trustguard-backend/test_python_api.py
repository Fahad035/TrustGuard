import requests

url = 'http://localhost:5001/analyze'
data = {"text": "This is a test sentence about fake news."}

response = requests.post(url, json=data)
print("Status code:", response.status_code)
print("Response:", response.json())
