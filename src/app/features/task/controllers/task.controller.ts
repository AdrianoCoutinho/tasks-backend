import { Request, Response } from "express";
import { ApiError } from "../../../shared/errors/api.error";
import { CreateTaskUsecase } from "../usecases/create-task.usecase";

export class TaskController {
  public async create(req: Request, res: Response) {
    try {
      const { title, description, indActive } = req.body;

      const usuario = req.headers["user"] as string;
      const usuarioDecoded = JSON.parse(usuario);

      const usecase = new CreateTaskUsecase();
      const result = await usecase.execute({
        title,
        description,
        indActive,
        idUser: usuarioDecoded._id,
      });

      return res.status(result.code).send(result);
    } catch (error: any) {
      return ApiError.serverError(res, error);
    }
  }
}
