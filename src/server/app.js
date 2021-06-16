const express = require("express");
const app = express();
const path = require("path");
const sequelize = require("./utils/database");
const todoRouter = require("./routes/todo");
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  res.setHeader("Origin", "http://localhost:4200/todolist");

  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../../", "/dist/visualBorad")));

app.use("/api", todoRouter);

// app.use((req, res) => {
//   res.sendFile(
//     path.join(__dirname, "../../", "/dist/visualBorad", "/index.html")
//   );
// });

async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT, () => console.log("Serve on PORT ", PORT));
  } catch (e) {
    console.log(e);
  }
}

start();

app.use((req, res, next) => {
  next(createError(404));
});

app.get("/", (req, res) => {
  res.send("invalid endpoint");
});

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../", "/dist/visualBorad", "/index.html")
  );
});

app.use(function (err, req, res, next) {
  console.error("node error message: ", err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
