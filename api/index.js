const micro = require('micro');

async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'POST') {
    try {
      const body = await micro.json(req);
      console.log('Received data:', body);
      // Process the POST data here
      // ...
      return micro.send(res, 200, { message: 'Data received successfully' });
    } catch (error) {
      console.error(error);
      return micro.send(res, 500, { error: 'Server error' });
    }
  } else {
    return micro.send(res, 405, { error: 'Method not allowed' });
  }
}

module.exports = handler;
