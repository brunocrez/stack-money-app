const jwt = require('jsonwebtoken');
const env = require('../.env');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  } else {
    const token = req.body.token || req.query.token || req.headers['authorization'];

    if (!token) {
      res.status(403).send({ errors: ['No Token Provided.']});
    }

    jwt.verify(token, env.SECRET, function (err, decoded) {
      if (err) {
        res.status(403).send({ errors: ['Authentication Failed.']});
      } else {
        // req.decoded = decoded;
        next();
      }
    });
  }
}