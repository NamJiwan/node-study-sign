// const http = require("http");
// const app = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//   //   console.log(req.url);
//   if (req.url === "/") {
//     res.end("여기는 루트화면입니다.");
//   } else if (req.url === "/Login") {
//     res.end("여기는 로그인화면입니다.");
//   }
// });

// app.listen(3001, () => {
//   console.log("http로 가동된 서버입니다.");
// });

"use strict";
//모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

//use = 미들 웨어를 등록해주는 메서드.
app.use("/", home);

module.exports = app;
