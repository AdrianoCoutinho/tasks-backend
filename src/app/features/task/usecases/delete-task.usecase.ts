import { Return } from "../../../shared/util/return.contract";
import { TaskRepository } from "../database/task.repository";

export class DeleteTaskUsecase {
  public async execute(idTask: string): Promise<Return> {
    const repository = new TaskRepository();

    const listTask = await repository.get(idTask);

    if (listTask === null || !listTask) {
      return {
        ok: false,
        code: 404,
        message: "Tarefa não encontrada",
        data: null,
      };
    }

    const result = await repository.deleteTask(idTask);

    return {
      ok: true,
      code: 200,
      message: "Tarefa deletada com sucesso!",
      data: result,
    };
  }
}
