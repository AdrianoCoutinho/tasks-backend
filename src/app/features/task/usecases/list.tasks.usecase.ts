import { Return } from "../../../shared/util/return.contract";
import { TaskRepository } from "../database/task.repository";

export class ListTasksUsecase {
  public async execute(idUser: string): Promise<Return> {
    const repository = new TaskRepository();
    const listTasks = await repository.list(idUser);

    return {
      ok: true,
      code: 200,
      message: "Tarefas listadas com sucesso.",
      data: listTasks,
    };
  }
}
