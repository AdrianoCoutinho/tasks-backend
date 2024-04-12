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

  return router;
};
