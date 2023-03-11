const micro = require('micro');

async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  if (req.method === 'OPTIONS') {
    return micro.send(res, 200);
    return
  };

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
