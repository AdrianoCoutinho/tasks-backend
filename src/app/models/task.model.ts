import { v4 as createUuid } from "uuid";

export class Task {
  private _id: string;

  constructor(
    public title: string,
    public description: string,
    public indActive: boolean,
    public idUser: string
  ) {
    this._id = createUuid();
  }

  public get id() {
    return this._id;
  }

  public static create(
    id: string,
    title: string,
    description: string,
    indActive: boolean,
    idUser: string
  ) {
    const task = new Task(title, description, indActive, idUser);

    task._id = id;

    return task;
  }
}
