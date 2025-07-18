const { createServer } = require("http");
const express = require("express");
const { notfound, findeerror } = require("./middleware/errormanage");
const mainrouter = require('./routes/mainrouter');
const { connectToDB } = require("./config/mongodbconfig");
const cookieParser = require("cookie-parser");
require("dotenv").config();
require('./config/checkenv') //check env variable


const app = express();
const server = createServer(app);
connectToDB()
server.listen(process.env.PORT, () => {
  console.log(`server runing on port ${process.env.PORT}...`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.get("/",(req,res)=>{
    res.redirect("/api/docs")
})
app.use("/api",mainrouter)
app.use(notfound)
app.use(findeerror)