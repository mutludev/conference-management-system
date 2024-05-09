const User = require("../models/user");

module.exports = function ensureRole(...roles) {
  return async function (req, res, next) {
    let user = await User.findById(req.session.id);
    if (!user || !roles.includes(user.role)) {
      const message = `User must have one of the following roles: ${roles.join(
        ", "
      )}`;
      res.status(403).send(message);
      return;
    }
    req.role = user.role;
    next();
  };
};
