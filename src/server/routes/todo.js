const { Router } = require("express");
const router = Router();

router
  .route("/todolist")
  .get((req, res) => {
    res.json({ status: "OK" });
  })
  .post((req, res) => {
    res.status(200).send({ status: "OK" });
  });

router
  .route("/todolist/:id")
  .put((req, res) => {})
  .delete((req, res) => {});

module.exports = router;
