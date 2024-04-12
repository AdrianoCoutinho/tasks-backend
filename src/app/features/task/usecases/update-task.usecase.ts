import { Return } from "../../../shared/util/return.contract";
import { TaskRepository } from "../database/task.repository";

interface TaskParams {
  idTask: string;
  title?: string;
  description?: string;
}

export class UpdateTaskUsecase {
  public async execute(data: TaskParams): Promise<Return> {
    const repository = new TaskRepository();

    const response = await repository.updateTask(data);

    if ("ok" in response) {
      if (response.ok.toString() === "false") {
        return {
          ok: false,
          code: 404,
          message: "Tarefa não encontrada!",
          data: null,
        };
      }
    }

    return {
      ok: true,
      code: 200,
      message: "Tarefa editada com sucesso!",
      data: response,
    };
  }
}
