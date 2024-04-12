import cors from "cors";
import express from "express";
import { loginRoutes } from "../../app/features/login/routes/login.routes";
import { registerRoutes } from "../../app/features/register/routes/register.routes";
import { taskRoutes } from "../../app/features/task/routes/task.route";
// import { adminRoutes } from "../../app/features/admin/routes/admin.routes";
// import { candidacyRoutes } from "../../app/features/candidacy/routes/candidacy.routes";
// import { candidateRoutes } from "../../app/features/candidate/routes/candidate.routes";
// import { loginRoutes } from "../../app/features/login/routes/login.routes";
// import { recruiterRoutes } from "../../app/features/recruiter/routes/recruiter.routes";
// import { vacancyRoutes } from "../../app/features/vacancy/routes/vacancy.routes";

export const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  app.use("/register", registerRoutes());

  app.use("/auth", loginRoutes());

  app.use("/task", taskRoutes());

  //   app.use("/recruiter", recruiterRoutes());

  // app.use("/auth", loginRoutes());

  //   app.use("/candidate", candidateRoutes());

  //   app.use("/vacancy", vacancyRoutes());

  //   app.use("/candidacy", candidacyRoutes());

  return app;
};
