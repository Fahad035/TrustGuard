
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'TrustGuard backend running!' });
});

app.post('/analyze', async (req, res) => {
  try {
    const response = await fetch('http://localhost:5001/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'Python API analysis failed', details: e.message });
  }
});

app.listen(PORT, () => {
  console.log(`TrustGuard backend running on http://localhost:${PORT}`);
});
