const { verifyToken } = require('../lib/jwt');

const authenticate = async (req, res, next) => {
  const bearer = req.headers.authorization;
  if (typeof bearer === 'undefined') {
    res.forbidden({ message: 'Not logged in' });
    return;
  }
  if (typeof bearer !== 'undefined') {
    const [, token] = bearer.split(' ');
    try {
      const payload = await verifyToken(token);
      if (!payload) {
        res.unauthorized({ message: 'Unauthorized, Please login' });
        return;
      }
      req.user = payload;
      next();
    } catch (err) {
      console.error(err);
      res.serverError(err);
    }
  }
};
module.exports = authenticate;
