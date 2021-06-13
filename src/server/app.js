const express = require("express");
const app = express();
const path = require("path");
const todoRouter = require("./routes/todo");
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../../", "/dist/visualBorad")));

app.use("/api", todoRouter);

app.use((req, res) => {
  res.sendFile(
    path.join(__dirname, "../../", "/dist/visualBorad", "/index.html")
  );
});

app.listen(PORT, () => console.log("Serve on PORT ", PORT));
