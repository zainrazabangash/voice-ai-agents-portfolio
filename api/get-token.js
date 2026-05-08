export default async function handler(req, res) {
  // Allow requests from any origin (your GitHub Pages site)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const agentId = req.query.agent_id;
  if (!agentId) {
    return res.status(400).json({ error: 'agent_id query parameter is required' });
  }

  if (!process.env.RETELL_API_KEY) {
    return res.status(500).json({ error: 'RETELL_API_KEY not configured on server' });
  }

  try {
    const r = await fetch('https://api.retellai.com/v2/create-web-call', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RETELL_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ agent_id: agentId })
    });

    const data = await r.json();

    if (!r.ok) {
      return res.status(r.status).json({ error: data.error || data.message || 'Retell API error' });
    }

    return res.status(200).json({ access_token: data.access_token });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}