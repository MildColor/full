import express from "express";

import express from "express";
import * as todoController from "../controllers/todoController";

const router = express.Router();

router.get("/", todoController.getTodos);
router.post("/", todoController.createTodo);
router.get("/", todoController.getTodoById);
router.put("/:id", todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

// router.post("/todos", (req, res, next) => {
//   res.render("index", { title: "Express" });
// });
// router.put("/todos", (req, res, next) => {
//   res.render("index", { title: "Express" });
// });

// router.get("/todos/:id", (req, res, next) => {});

// router.delete("/todos/:id", (req, res, next) => {
//   res.render("index", { title: "Express" });
// });

export default router;
