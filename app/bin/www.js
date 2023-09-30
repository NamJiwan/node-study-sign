"use strict";

const app = require("../app");
const PROT = 3000;
// 서버 보여주는거
app.listen(PROT, () => {
  console.log("서버 저상 가동 : " + "http://localhost:3000");
});
