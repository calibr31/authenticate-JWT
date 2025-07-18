const jwt = require("jsonwebtoken");
console.log("ACCESS_TOKEN_SECRET:", process.env.ACCESS_TOKEN_SECRET);
console.log("REFRESH_TOKEN_SECRET:", process.env.REFRESH_TOKEN_SECRET);
function generateAccessToken(payload) {
  const accesstoken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
  return accesstoken;
}
function generateRefreshToken(payload) {
  const refreshtoken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "5d" });
  return refreshtoken;
}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
