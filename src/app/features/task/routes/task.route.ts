import { Router } from "express";
import { checkLoginValidator } from "../../../shared/validators/check-login.validator";
import { TaskController } from "../controllers/task.controller";
import { CreateTaskValidator } from "../validators/create-task.validator";

export const taskRoutes = () => {
  const router = Router();

  router.post(
    "/",
    [checkLoginValidator, CreateTaskValidator.validate],
    new TaskController().create
  );

  router.get("/", [checkLoginValidator], new TaskController().listTasks);

  router.put(
    "/:idTask",
    [checkLoginValidator],
    new TaskController().updateTask
  );

  router.put(
    "/status/:idTask",
    [checkLoginValidator],
    new TaskController().changeStatus
  );

  router.delete(
    "/:idTask",
    [checkLoginValidator],
    new TaskController().deleteTask
  );

  return router;
};
