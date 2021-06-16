const { Router } = require("express");
const Todo = require("../models/todoModel");
const router = Router();
router
  .route("/todolist")
  .get((req, res) => {
    try {

      res.status(200).json(req.body);
    } catch (e) {
      console.log(e);
      res.status(500).json({
        message: "Server error!!!",
      });
    }
    res.json({ status: "OK" });
  })
  .post(async (req, res) => {


    try {
      const todo = await Todo.create({
        title: req.body.title,
        done: false,
      });
      res.status(200).json(todo);
    } catch (e) {
      console.log(e);
      res.status(500).json({
        message: "Server error!!!",
      });
    }
    res.status(200).send({ status: "OK" });
  });

router
  .route("/todolist/:id")
  .put((req, res) => {
    try {
    } catch (e) {
      console.log(e);
      res.status(500).json({
        message: "Server error!!!",
      });
    }
  })
  .delete((req, res) => {
    try {
    } catch (e) {
      console.log(e);
      res.status(500).json({
        message: "Server error!!!",
      });
    }
  });

module.exports = router;
