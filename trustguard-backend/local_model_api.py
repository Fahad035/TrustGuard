from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)
# You can change the model to any Hugging Face text-classification model
classifier = pipeline("text-classification", model="distilbert-base-uncased-finetuned-sst-2-english")

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    text = data.get('text') or data.get('url')
    if not text:
        return jsonify({'error': 'No text provided'}), 400
    result = classifier(text)
    return jsonify(result)

if __name__ == '__main__':
    app.run(port=5001)
