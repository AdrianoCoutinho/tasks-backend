import { Task } from "../../../models/task.model";
import { Return } from "../../../shared/util/return.contract";
import { UserRepository } from "../../user/database/user.repository";
import { TaskRepository } from "../database/task.repository";

interface CreateTaskParams {
  title: string;
  description: string;
  indActive?: boolean;
  idUser: string;
}

export class CreateTaskUsecase {
  public async execute(data: CreateTaskParams): Promise<Return> {
    if (data.indActive === undefined) {
      data.indActive = true;
    }

    const userRepository = new UserRepository();
    const user = await userRepository.get(data.idUser);

    if (!user) {
      return {
        ok: false,
        code: 404,
        message: "Recrutador não encontrado.",
      };
    }

    const task = new Task(data.title, data.description, true, data.idUser);

    const repository = new TaskRepository();
    await repository.create(task);

    return {
      ok: true,
      code: 201,
      message: "A tarefa foi criada com sucesso.",
      data: task,
    };
  }
}
