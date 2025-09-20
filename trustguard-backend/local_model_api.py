from flask import Flask, request, jsonify
import re
import urllib.parse
import json

app = Flask(__name__)

def check_domain_reputation(url):
    if not url:
        return 50
    
    credible_domains = [
        'reuters.com', 'bbc.com', 'ap.org', 'npr.org', 'pbs.org',
        'nature.com', 'science.org', 'cnn.com', 'nytimes.com',
        'washingtonpost.com', 'theguardian.com', 'wsj.com',
        'who.int', 'cdc.gov', 'nih.gov', 'gov.uk', 'europa.eu'
    ]
    
    problematic_domains = [
        'infowars.com', 'naturalnews.com', 'beforeitsnews.com',
        'worldnewsdailyreport.com', 'nationalreport.net',
        'theonion.com', 'clickhole.com'
    ]
    
    try:
        parsed = urllib.parse.urlparse(url)
        domain = parsed.netloc.lower().replace('www.', '')
        
        if any(credible in domain for credible in credible_domains):
            return 85
        elif any(problematic in domain for problematic in problematic_domains):
            return 25
        elif '.gov' in domain or '.edu' in domain:
            return 80
        elif domain.endswith('.blogspot.com') or domain.endswith('.wordpress.com'):
            return 40
        else:
            return 60
    except:
        return 50

def analyze_emotional_language(text):
    if not text:
        return 50
    
    sensational_words = [
        'shocking', 'unbelievable', 'incredible', 'amazing', 'stunning',
        'outrageous', 'scandalous', 'explosive', 'bombshell', 'revealed'
    ]
    
    conspiracy_phrases = [
        "they don't want you to know", "hidden truth", "secret", "cover-up",
        "mainstream media won't tell you", "big pharma", "deep state"
    ]
    
    urgency_words = [
        'urgent', 'breaking', 'exclusive', 'must read', 'share now',
        'before it\'s deleted', 'going viral', 'act fast'
    ]
    
    text_lower = text.lower()
    
    sensational_count = sum(1 for word in sensational_words if word in text_lower)
    conspiracy_count = sum(1 for phrase in conspiracy_phrases if phrase in text_lower)
    urgency_count = sum(1 for word in urgency_words if word in text_lower)
    exclamation_count = len(re.findall(r'[!]{2,}', text))
    caps_count = len(re.findall(r'\b[A-Z]{3,}\b', text))
    
    total_flags = (sensational_count * 5) + (conspiracy_count * 10) + (urgency_count * 7) + (exclamation_count * 3) + (caps_count * 2)
    
    credibility = max(0, 100 - total_flags)
    return min(credibility, 100)

def analyze_writing_quality(text):
    if not text or len(text) < 50:
        return 50
    
    sentences = len(re.findall(r'[.!?]+', text))
    words = len(text.split())
    
    if sentences == 0:
        return 30
    
    avg_sentence_length = words / sentences
    
    grammar_score = 70
    
    if avg_sentence_length < 5 or avg_sentence_length > 40:
        grammar_score -= 10
    
    misspelling_patterns = [
        r'\b\w*\d+\w*\b',
        r'\b[a-z]*[A-Z][a-z]*[A-Z][a-z]*\b'
    ]
    
    for pattern in misspelling_patterns:
        matches = len(re.findall(pattern, text))
        grammar_score -= matches * 2
    
    return max(30, min(grammar_score, 100))

def detect_suspicious_patterns(text):
    if not text:
        return []
    
    flags = []
    text_lower = text.lower()
    
    if re.search(r'\b(miracle cure|doctors hate|one weird trick|cure cancer|big pharma hiding)\b', text_lower):
        flags.append("Contains suspicious health claims")
    
    if re.search(r'\b(they don\'t want you to know|hidden truth|cover-up|mainstream media lies)\b', text_lower):
        flags.append("Uses conspiracy language")
    
    if len(re.findall(r'[!]{2,}', text)) > 3:
        flags.append("Excessive use of exclamation marks")
    
    if re.search(r'\b(share before it\'s deleted|going viral|act fast|limited time)\b', text_lower):
        flags.append("Uses urgency manipulation tactics")
    
    caps_words = len(re.findall(r'\b[A-Z]{3,}\b', text))
    if caps_words > 3:
        flags.append("Excessive use of capital letters")
    
    if re.search(r'\b(you won\'t believe|what happens next|shocking results)\b', text_lower):
        flags.append("Contains clickbait language")
    
    return flags

def suggest_verification_sources(text):
    base_sources = [
        {"name": "Snopes", "url": "https://snopes.com", "credibility": "high"},
        {"name": "FactCheck.org", "url": "https://factcheck.org", "credibility": "high"},
        {"name": "PolitiFact", "url": "https://politifact.com", "credibility": "high"}
    ]
    
    if re.search(r'\b(health|medical|vaccine|medicine)\b', text.lower()):
        base_sources.append({"name": "CDC", "url": "https://cdc.gov", "credibility": "high"})
        base_sources.append({"name": "WHO", "url": "https://who.int", "credibility": "high"})
    
    if re.search(r'\b(climate|global warming|environment)\b', text.lower()):
        base_sources.append({"name": "NASA Climate", "url": "https://climate.nasa.gov", "credibility": "high"})
    
    return base_sources

def basic_analysis(text, url=None):
    if not text and not url:
        return {"error": "No content to analyze"}
    
    if not text:
        text = ""
    
    domain_score = check_domain_reputation(url) if url else 50
    emotional_score = analyze_emotional_language(text)
    quality_score = analyze_writing_quality(text)
    red_flags = detect_suspicious_patterns(text)
    
    trust_score = int((domain_score * 0.4 + emotional_score * 0.3 + quality_score * 0.3))
    
    trust_score = max(0, trust_score - (len(red_flags) * 5))
    
    if trust_score >= 75:
        status = 'credible'
        findings = [
            "Content shows good credibility indicators",
            "Language appears factual and measured",
            "Few or no suspicious patterns detected"
        ]
    elif trust_score >= 50:
        status = 'questionable'
        findings = [
            "Mixed credibility signals detected",
            "Some concerning language patterns found",
            "Recommend additional verification"
        ]
    else:
        status = 'suspicious'
        findings = [
            "Multiple credibility concerns identified",
            "Suspicious language patterns detected",
            "High caution recommended"
        ]
    
    if red_flags:
        findings.extend([f"Warning: {flag}" for flag in red_flags[:2]])
    
    return {
        'trustScore': trust_score,
        'status': status,
        'factors': {
            'sourceCredibility': int(domain_score),
            'languageQuality': int(quality_score),
            'emotionalManipulation': int(100 - emotional_score),
            'overallAssessment': trust_score
        },
        'findings': findings,
        'sources': suggest_verification_sources(text),
        'redFlags': red_flags
    }

@app.route('/analyze', methods=['POST'])
def analyze():
    try:
        data = request.json
        text = data.get('text', '')
        url = data.get('url', '')
        
        if not text and not url:
            return jsonify({'error': 'No text or URL provided'}), 400
        
        result = basic_analysis(text, url)
        return jsonify(result)
    
    except Exception as e:
        return jsonify({'error': f'Analysis failed: {str(e)}'}), 500

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy', 'message': 'TrustGuard Analysis API is running'})

if __name__ == '__main__':
    app.run(port=5001, debug=True)