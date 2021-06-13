const express = require("express");
const app = express();
const path = require("path");
const sequelize = require('./utils/database');
const todoRouter = require("./routes/todo");
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../../", "/dist/visualBorad")));

app.use("/api", todoRouter);

app.use((req, res) => {
  res.sendFile(
    path.join(__dirname, "../../", "/dist/visualBorad", "/index.html")
  );
});

async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT, () => console.log("Serve on PORT ", PORT));
  } catch(e) {
    console.log(e);
  }
}

start();
