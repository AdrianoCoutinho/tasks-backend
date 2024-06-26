import { Request, Response } from "express";
import { ApiError } from "../../../shared/errors/api.error";
import { LoginUsecase } from "../usecases/login.usecase";

export class LoginController {
  public async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const result = await new LoginUsecase().execute({
        email,
        password,
      });

      return res.status(result.code).send(result);
    } catch (error: any) {
      return ApiError.serverError(res, error);
    }
  }
}
