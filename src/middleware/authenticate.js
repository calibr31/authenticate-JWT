const createHttpError = require("http-errors");
const { verify } = require("jsonwebtoken");

async function authenticate(req, res, next) {
  try {
    const header = req.headers;
    const authorization = header.authorization || header.Authorization;
    if (!authorization || !authorization.startsWith("Bearer "))
      throw createHttpError(401, "unauthorized");
    const token = authorization.split(" ")[1];
    if (!token) throw createHttpError(401, "unauthorized");
    const user = verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (!user) throw createHttpError(401, "unauthorized");
    req.user = user;
    next();
  } catch (error) {
    error.status = 401
    next(error);
  }
}

module.exports = {
  authenticate,
};
