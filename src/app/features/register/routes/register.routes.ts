import { Router } from "express";
import { RegisterValidator } from "../../validators/register.validator";
import { RegisterController } from "../controllers/register.controller";
// import { AdminController } from "../controllers/admin.controller";
// import { CreateAdminValidator } from "../validators/create-admin.validator";
// import { checkAdminValidator } from "../../../shared/validators/check-admin-validator";

export const registerRoutes = () => {
  const router = Router();

  router.post(
    "/",
    [RegisterValidator.validate],
    new RegisterController().create
  );

  router.get(
    "/",
    // [checkAdminValidator],
    new RegisterController().listall
  );

  return router;
};
