const express = require("express");
const router = express.Router();

// 라우터 설정
router.get("/", (req, res) => {
  res.send("server is runnning");
});
router.get("/lamaChat", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

module.exports = router;
