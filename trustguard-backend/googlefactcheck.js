
const fetch = require('node-fetch');

async function googleFactCheck(query) {
  const apiKey = process.env.GOOGLE_FACTCHECK_API_KEY;
  if (!apiKey) throw new Error('Missing GOOGLE_FACTCHECK_API_KEY in .env');
  const url = `https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${encodeURIComponent(query)}&key=${apiKey}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Google Fact Check API error: ' + await response.text());
  return await response.json();
}

module.exports = { googleFactCheck };
