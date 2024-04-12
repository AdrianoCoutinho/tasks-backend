import { Request, Response } from "express";
import { ApiError } from "../../../shared/errors/api.error";
import { CreateTaskUsecase } from "../usecases/create-task.usecase";
import { DeleteTaskUsecase } from "../usecases/delete-task.usecase";
import { ListTasksUsecase } from "../usecases/list.tasks.usecase";
import { UpdateStatusTaskUsecase } from "../usecases/updata-status-task.usecase";
import { UpdateTaskUsecase } from "../usecases/update-task.usecase";

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

  public async listTasks(req: Request, res: Response) {
    try {
      const usecase = new ListTasksUsecase();
      const result = await usecase.execute();

      return res.status(result.code).send(result);
    } catch (error: any) {
      return ApiError.serverError(res, error);
    }
  }

  public async updateTask(req: Request, res: Response) {
    try {
      const { idTask } = req.params;
      const { title, description } = req.body;

      const usecase = new UpdateTaskUsecase();

      const result = await usecase.execute({ idTask, title, description });

      return res.status(result.code).send(result);
    } catch (error: any) {
      return ApiError.serverError(res, error);
    }
  }

  public async changeStatus(req: Request, res: Response) {
    try {
      const { idTask } = req.params;
      const usecase = new UpdateStatusTaskUsecase();

      const result = await usecase.execute(idTask);

      return res.status(result.code).send(result);
    } catch (error: any) {
      return ApiError.serverError(res, error);
    }
  }

  public async deleteTask(req: Request, res: Response) {
    try {
      const { idTask } = req.params;
      const usecase = new DeleteTaskUsecase();

      const result = await usecase.execute(idTask);

      return res.status(result.code).send(result);
    } catch (error: any) {
      return ApiError.serverError(res, error);
    }
  }
}
