const createHttpError = require("http-errors");
const { userModel } = require("../model/usermodel");
const { hash, compare } = require("bcrypt");
const { generateAccessToken, generateRefreshToken } = require("../utils/functions");
const { verify } = require("jsonwebtoken");

async function signup(req, res, next) {
  try {
    const { username, email, password, age } = req.body;
    let user = await userModel.findOne({ email });
    if (user) throw createHttpError(409, "User already exists");
    const hashpass = await hash(password, 10);
    user = await userModel.create({ username, email, password: hashpass, age });
    res.status(201).json({
      message: "user created",
    });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user || !(await compare(password, user.password)))
      throw createHttpError(401, "email or password is incorrect ");
    const accesstoken = generateAccessToken({ id: user.id });
    const refreshtoken = generateRefreshToken({ id: user.id });
    user.refresh_token = await hash(refreshtoken, 10);
    await user.save();
    res.cookie("token", refreshtoken, {
      httpOnly: true,
      secure: true,
      maxAge: 14 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ message: "Login was successful", accesstoken });
  } catch (error) {
    next(error);
  }
}

async function getprofile(req, res, next) {
  try {
    const user = await userModel.findById(req.user.id);
    res.status(200).json({
      username: `welcome ${user.username}`,
      email: `your email is : ${user.email}`,
      age: `you are ${user.age} years old`,
    });
  } catch (error) {
    next(error);
  }
}

async function logout(req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) {
      res.clearCookie("token");
      return res.status(200).json({ message: "logout was successfull" });
    }
    const decoded = verify(token, process.env.REFRESH_TOKEN_SECRET);
    const user = await userModel.findById(decoded.id);
    if (!user) throw createHttpError(401, "unauthorized");
    user.refresh_token = null;
    await user.save();
    res.clearCookie("token");
    res.status(200).json({ message: "logout was successfull" });
  } catch (error) {
    next(error);
  }
}

async function newtoken(req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) throw createHttpError(401, "unauthorized");
    const decoded = verify(token, process.env.REFRESH_TOKEN_SECRET);
    const user = await userModel.findById(decoded.id);
    if (!user) throw createHttpError(401, "unauthorized");
    const isvalid = await compare(token, user.refresh_token);
    if (!isvalid) throw createHttpError(401, "unauthorized");
    const newtoken = generateAccessToken({ id: user.id });
    res.status(200).json({ accesstoken: newtoken });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  signup,
  login,
  getprofile,
  logout,
  newtoken,
};
