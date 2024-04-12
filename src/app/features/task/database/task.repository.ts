import { TypeormConnection } from "../../../../main/database/typeorm.connection";
import { Task } from "../../../models/task.model";
import { TaskEntity } from "../../../shared/database/entities/task.entity";
import { UserRepository } from "../../user/database/user.repository";

export class TaskRepository {
  private repository = TypeormConnection.connection.getRepository(TaskEntity);

  public async create(task: Task) {
    const taskEntity = this.repository.create({
      id: task.id,
      title: task.title,
      description: task.description,
      indActive: task.indActive,
      idUser: task.idUser,
    });

    await this.repository.save(taskEntity);
  }

  public async list() {
    const result = await this.repository.find({
      relations: ["user"],
    });

    return result.map((item) => TaskRepository.mapEntityToModel(item));
  }

  public async get(id: string) {
    const result = await this.repository.findOne({
      where: {
        id,
      },
      relations: ["user"],
    });

    if (result === null) {
      return null;
    }

    return TaskRepository.mapEntityToModel(result);
  }

  public async changeStatus(id: string) {
    const task = await this.repository.findOne({
      where: {
        id,
      },
      relations: ["user"],
    });

    if (task === null) {
      return {
        ok: false,
        code: 404,
        message: "Tarefa não encontrada",
        data: null,
      };
    }

    if (task.indActive.toString() === "false") {
      task.indActive = true;

      await this.repository.save(task);

      return task.indActive;
    }

    if (task.indActive.toString() === "true") {
      task.indActive = false;
    }

    await this.repository.save(task);

    return task.indActive;
  }

  public async deleteTask(id: string) {
    const task = await this.repository.findOne({
      where: {
        id,
      },
      relations: ["user"],
    });

    if (task === null) {
      return null;
    }

    await this.repository.remove(task);

    return task;
  }

  public static mapEntityToModel(entity: TaskEntity): Task {
    const user = UserRepository.mapEntityToModel(entity.user);

    const task = Task.create(
      entity.id,
      entity.title,
      entity.description,
      entity.indActive,
      user.id
    );

    return task;
  }
}
