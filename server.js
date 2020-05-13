const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.listen(8081, () => {
  console.log("Listening on port 8081...");
});
