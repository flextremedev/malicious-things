const express = require("express");
const path = require("path");
const app = express();
app.use(express.static("public"));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "malicious.html"));
});
app.listen(8081, () => {
  console.log("Listening on port 8081...");
});
