import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../../shared/errors/api.error";
import { RequestError } from "../../../shared/errors/request.error";

export class CreateTaskValidator {
  public static async validate(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { title, description, indActive } = req.body;

      if (!title) {
        return RequestError.fieldNotProvided(res, "title");
      }

      if (!description) {
        return RequestError.fieldNotProvided(res, "description");
      }

      next();
    } catch (error: any) {
      return ApiError.serverError(res, error);
    }
  }
}
