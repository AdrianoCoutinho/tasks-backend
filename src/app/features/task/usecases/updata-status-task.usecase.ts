import { Return } from "../../../shared/util/return.contract";
import { TaskRepository } from "../database/task.repository";

export class UpdateStatusTaskUsecase {
  public async execute(idTask: string): Promise<Return> {
    const repository = new TaskRepository();

    const listTask = await repository.changeStatus(idTask);

    return {
      ok: true,
      code: 200,
      message: "Status da tarefa mudado com sucesso!",
      data: `Status - ${listTask}`,
    };
  }
}
